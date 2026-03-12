import fs from "node:fs/promises"
import path from "node:path"
import react from "@vitejs/plugin-react"
import { inspectAttr } from "kimi-plugin-inspect-react"
import { defineConfig, type Plugin } from "vite"

const dataDirectory = path.resolve(__dirname, "./src/data")
const maxUploadBytes = 5 * 1024 * 1024

type UploadRequestBody = {
  files?: Array<{
    name: string
    content: string
  }>
}

const readRequestBody = async (request: NodeJS.ReadableStream) => {
  const chunks: Buffer[] = []
  let totalBytes = 0

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    totalBytes += buffer.length

    if (totalBytes > maxUploadBytes) {
      throw new Error("PAYLOAD_TOO_LARGE")
    }

    chunks.push(buffer)
  }

  return Buffer.concat(chunks).toString("utf8")
}

const sanitizeFileName = (fileName: string) => {
  const baseName = path.basename(fileName).trim()
  const safeBaseName = Array.from(baseName)
    .map((character) => {
      const isWindowsReservedCharacter = "<>:\"/\\|?*".includes(character)
      const isControlCharacter = character.charCodeAt(0) < 32

      if (isWindowsReservedCharacter || isControlCharacter) {
        return "-"
      }

      return character
    })
    .join("")
    .replace(/\s+/g, " ")
    .replace(/\.+$/g, "")
    .trim()

  const normalizedName = safeBaseName || `quiz-${Date.now()}`
  return normalizedName.toLowerCase().endsWith(".md")
    ? normalizedName
    : `${normalizedName}.md`
}

const ensureUniqueFilePath = async (directory: string, fileName: string) => {
  const parsedPath = path.parse(fileName)
  let attempt = 0

  while (true) {
    const suffix = attempt === 0 ? "" : `-${attempt}`
    const candidateName = `${parsedPath.name}${suffix}${parsedPath.ext || ".md"}`
    const candidatePath = path.join(directory, candidateName)

    try {
      await fs.access(candidatePath)
      attempt += 1
    } catch {
      return candidatePath
    }
  }
}

const uploadMarkdownPlugin = (): Plugin => ({
  name: "upload-markdown-to-data-folder",
  configureServer(server) {
    server.middlewares.use("/api/upload-markdown", async (request, response, next) => {
      if (request.method !== "POST") {
        next()
        return
      }

      try {
        const rawBody = await readRequestBody(request)
        const parsedBody = JSON.parse(rawBody) as UploadRequestBody
        const files = parsedBody.files ?? []

        if (files.length === 0) {
          response.statusCode = 400
          response.setHeader("Content-Type", "application/json")
          response.end(JSON.stringify({ message: "Aucun fichier n'a été fourni." }))
          return
        }

        await fs.mkdir(dataDirectory, { recursive: true })

        const savedFiles: string[] = []

        for (const file of files) {
          if (typeof file.name !== "string" || typeof file.content !== "string") {
            response.statusCode = 400
            response.setHeader("Content-Type", "application/json")
            response.end(JSON.stringify({ message: "Le format de l'upload est invalide." }))
            return
          }

          const safeFileName = sanitizeFileName(file.name)
          const destinationPath = await ensureUniqueFilePath(dataDirectory, safeFileName)

          await fs.writeFile(destinationPath, file.content, "utf8")
          savedFiles.push(path.basename(destinationPath))
        }

        response.statusCode = 200
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify({ savedFiles }))
      } catch (error) {
        const message =
          error instanceof Error && error.message === "PAYLOAD_TOO_LARGE"
            ? "Les fichiers sont trop volumineux pour l'import."
            : "L'enregistrement des fichiers a échoué."

        response.statusCode = message.includes("trop volumineux") ? 413 : 500
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify({ message }))
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [inspectAttr(), react(), uploadMarkdownPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
