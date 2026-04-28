# Notes projet — Ma Maison dans le Nord

## Serveur WordPress (EasyHoster)

**IP du serveur WordPress EasyHoster : 135.125.127.37**

Après un changement DNS (ou pour accéder au WordPress sans attendre la propagation), utiliser :

```
curl -H "Host: ma-maison-dans-le-nord.fr" http://135.125.127.37/chemin/de/la-page/
```

Exemple :
```
curl -H "Host: ma-maison-dans-le-nord.fr" http://135.125.127.37/constructeur-maison-ossature-bois-lille/
```

---

## Contenu WordPress manquant — À récupérer le 30 avril

Le quota de consultation du site WordPress (EasyHoster) a été atteint le 28 avril 2026 et se réinitialise le **30 avril à 5h**.

### Pages locales dont l'intro WordPress n'a pas pu être récupérée

Toutes les pages `/constructeur-maison-[type]-nord/[ville]` dont le champ `openingIntro` est absent dans le fichier page.tsx correspondant. Vérifier et compléter en priorité :

- `/constructeur-maison-bois-nord/[ville]` — URL WordPress : `/constructeur-maison-ossature-bois-[ville]/`
- `/constructeur-maison-cubique-nord/[ville]`
- `/constructeur-maison-plain-pied-nord/[ville]`
- `/constructeur-nord-maison-passive/[ville]` — URL WordPress : `/construction-maison-passive-[ville]/` (Valenciennes) ou `/constructeur-maison-passive-[ville]/`
- `/constructeur-de-maison-contemporaine-nord/lille` — page retournait une image JPEG (indisponible)
- `/constructeur-de-maison-contemporaine-nord/villeneuve-dascq` — idem

### Méthode de récupération

```bash
curl -H "Host: ma-maison-dans-le-nord.fr" http://135.125.127.37/constructeur-maison-ossature-bois-lille/ | \
  grep -o '<p>[^<]*</p>' | head -5
```
