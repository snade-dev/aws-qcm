# QWM Quiz App

Application React/Vite avec backend Express pour importer des fichiers Markdown, les stocker sur disque, puis les transformer en quiz.

## Développement local

```bash
npm install
npm run dev
```

Le frontend Vite tourne en développement et le backend Express répond sur le port `3001`.

## Production locale

```bash
npm install
npm run build
npm start
```

En production, Express sert le frontend buildé depuis `dist` et expose aussi les routes API.

## Variables d'environnement

`PORT`
Port HTTP du serveur Express. Par défaut : `3001`.

`DATA_DIR`
Dossier de stockage persistant pour les fichiers Markdown importés.

Sans `DATA_DIR` :

- en développement, les fichiers sont stockés dans `src/data`
- en production, les fichiers sont stockés dans `data`

## Déploiement Railway ou Render

Configuration recommandée :

1. Root directory : `app`
2. Build command : `npm install && npm run build`
3. Start command : `npm start`
4. Variable d'environnement : `DATA_DIR=/data`
5. Ajouter un volume persistant monté sur `/data`

Le backend expose :

1. `GET /api/health`
2. `GET /api/markdown-files`
3. `POST /api/upload-markdown`

## Note d'architecture

Ne déploie pas cette application sur une plateforme frontend statique seule si tu veux conserver l'upload de fichiers. Il faut un service Node.js avec stockage persistant.
