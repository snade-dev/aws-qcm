import express from "express";
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDirectory = path.resolve(__dirname, "..");
const clientBuildDirectory = path.resolve(rootDirectory, "dist");
const defaultDataDirectory =
  process.env.NODE_ENV === "production"
    ? path.resolve(rootDirectory, "data")
    : path.resolve(rootDirectory, "src/data");
const dataDirectory = path.resolve(
  process.env.DATA_DIR ?? defaultDataDirectory,
);
const maxUploadBytes = 5 * 1024 * 1024;
const port = Number(process.env.PORT ?? 3001);
const hasClientBuild = fsSync.existsSync(
  path.join(clientBuildDirectory, "index.html"),
);

const sanitizeFileName = (fileName) => {
  const baseName = path.basename(String(fileName ?? "")).trim();
  const safeBaseName = Array.from(baseName)
    .map((character) => {
      const isWindowsReservedCharacter = '<>:"/\\|?*'.includes(character);
      const isControlCharacter = character.charCodeAt(0) < 32;

      if (isWindowsReservedCharacter || isControlCharacter) {
        return "-";
      }

      return character;
    })
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\.+$/g, "")
    .trim();

  const normalizedName = safeBaseName || `quiz-${Date.now()}`;
  return normalizedName.toLowerCase().endsWith(".md")
    ? normalizedName
    : `${normalizedName}.md`;
};

const ensureUniqueFilePath = async (directory, fileName) => {
  const parsedPath = path.parse(fileName);
  let attempt = 0;

  while (true) {
    const suffix = attempt === 0 ? "" : `-${attempt}`;
    const candidateName = `${parsedPath.name}${suffix}${parsedPath.ext || ".md"}`;
    const candidatePath = path.join(directory, candidateName);

    try {
      await fs.access(candidatePath);
      attempt += 1;
    } catch {
      return candidatePath;
    }
  }
};

const listMarkdownFiles = async () => {
  await fs.mkdir(dataDirectory, { recursive: true });
  const entries = await fs.readdir(dataDirectory, { withFileTypes: true });
  const markdownFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md"),
  );

  const files = await Promise.all(
    markdownFiles.map(async (entry) => {
      const filePath = path.join(dataDirectory, entry.name);
      const [content, stats] = await Promise.all([
        fs.readFile(filePath, "utf8"),
        fs.stat(filePath),
      ]);

      return {
        name: entry.name,
        content,
        updatedAt: stats.mtime.toISOString(),
      };
    }),
  );

  return files.sort((left, right) => left.name.localeCompare(right.name, "fr"));
};

const app = express();

app.use(express.json({ limit: `${maxUploadBytes}b` }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/markdown-files", async (_request, response) => {
  try {
    const files = await listMarkdownFiles();
    response.json({ files });
  } catch {
    response
      .status(500)
      .json({ message: "Impossible de lire le dossier src/data." });
  }
});

app.post("/api/upload-markdown", async (request, response) => {
  const files = Array.isArray(request.body?.files) ? request.body.files : [];

  if (files.length === 0) {
    response.status(400).json({ message: "Aucun fichier n'a été fourni." });
    return;
  }

  try {
    await fs.mkdir(dataDirectory, { recursive: true });

    const savedFiles = [];

    for (const file of files) {
      if (typeof file?.name !== "string" || typeof file?.content !== "string") {
        response
          .status(400)
          .json({ message: "Le format de l'upload est invalide." });
        return;
      }

      const safeFileName = sanitizeFileName(file.name);
      const destinationPath = await ensureUniqueFilePath(
        dataDirectory,
        safeFileName,
      );

      await fs.writeFile(destinationPath, file.content, "utf8");
      savedFiles.push({
        name: path.basename(destinationPath),
        content: file.content,
      });
    }

    response.status(201).json({ savedFiles });
  } catch {
    response
      .status(500)
      .json({ message: "L'enregistrement des fichiers a échoué." });
  }
});

if (hasClientBuild) {
  app.use(express.static(clientBuildDirectory));

  app.get(/^(?!\/api).*/, (_request, response) => {
    response.sendFile(path.join(clientBuildDirectory, "index.html"));
  });
} else {
  app.get("/", (_request, response) => {
    response.status(200).json({
      status: "backend-only",
      message:
        "Le frontend n'est pas encore buildé. Lancez `npm run build` avant le démarrage en production.",
    });
  });
}

app.listen(port, () => {
  console.log(`Markdown backend running on http://localhost:${port}`);
  console.log(`Markdown data directory: ${dataDirectory}`);
  if (hasClientBuild) {
    console.log(`Serving frontend build from: ${clientBuildDirectory}`);
  }
});
