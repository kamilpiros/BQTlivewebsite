# BQT Partners — Website

Statische Website für BQT Partners GmbH, Baar. Kein Build-Schritt nötig: React und Babel werden per CDN geladen, alle Inhalte liegen in `content.js`.

## Deployment (GitHub Pages)

1. Diesen Ordner als Repository auf GitHub pushen.
2. In den Repository-Einstellungen unter **Pages** den Branch `main` (Root) als Quelle wählen.
3. Die Seite ist danach unter `https://<username>.github.io/<repo>/` erreichbar. Eigene Domain (bqtpartners.com) lässt sich dort unter "Custom domain" hinterlegen.

Funktioniert genauso auf jedem anderen statischen Hosting (Netlify, Vercel, Cloudflare Pages, klassischer Webspace) — einfach den Ordnerinhalt hochladen.

## Struktur

| Datei | Inhalt |
|---|---|
| `index.html` | Einstiegspunkt, lädt alle Skripte |
| `content.js` | Sämtliche Texte (DE/EN) — Textänderungen nur hier |
| `styles.css` | Gesamtes Styling inkl. Hell/Dunkel-Modus |
| `app.jsx` | App-Logik: Sprache, Tag/Nacht-Modus, Navigation |
| `splash.jsx` | Startseite mit den zwei Bereichen |
| `advisory.jsx` / `capital.jsx` | Die beiden Unterseiten |
| `shared.jsx` | Gemeinsame Komponenten (Nav, Footer, Hero, …) |
| `inquiry.jsx` | Kontaktformulare (Formspree-Endpoint hier konfiguriert) |
| `Impressum.html` | Impressum und Datenschutz |
| `assets/` | Logos und Porträt |

## Formulare

Die Formulare senden an Formspree (Endpoint in `inquiry.jsx`, Konstante `FORM_ENDPOINT`). Jede Einsendung enthält das Feld `bereich` (`advisory`, `capital` oder `fuehrung`). CV-Datei-Uploads benötigen einen bezahlten Formspree-Plan; ohne diesen kommen die Textfelder trotzdem an.

## Hinweise

- Hell/Dunkel-Modus: Standard ist hell, manuell umschaltbar (Sonne/Mond oben rechts), Wahl wird im Browser gespeichert.
- Der Bereich KMU Nachfolge ist bewusst nur auf Deutsch verfügbar.
- Keine Cookies, kein Tracking.
