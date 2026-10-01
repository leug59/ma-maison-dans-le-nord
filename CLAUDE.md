@AGENTS.md

## Build et tests locaux

- Toujours lancer `npm run build` au premier plan (pas en arrière-plan).
- Avant un build, arrêter tout processus sur le port 3000 : `pkill -f "next"; lsof -ti:3000 | xargs kill -9 2>/dev/null`.
- Arrêter `npm start` après les tests : ne pas laisser de serveur tourner.
