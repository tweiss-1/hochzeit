# Hochzeitswebsite

hochzeit/
├── index.html          Inhalt (Texte, Kapitel)
├── css/
│   ├── design.css      Designsprache: Farben, Schriften, Größen  <- hier zuerst anpassen
│   └── style.css       Layout (nutzt nur Variablen aus design.css)
├── js/main.js          Navigation, Tastenkürzel 1–5
└── assets/
    ├── images/         start.jpg, brautpaar.jpg, location.jpg, kulinarik.jpg, einladung.jpg
    ├── video/          location.mp4 (Hintergrundvideo der Location)
    ├── pdf/            menueplan.pdf
    └── fonts/          optional, für lokal gehostete Schriften

Bilder: einfach mit den obigen Dateinamen ablegen. Video: in index.html das <img> im Kapitel
durch <video autoplay muted loop playsinline src="assets/video/start.mp4"></video> ersetzen.
Neues Kapitel: <section class="chapter"> kopieren und einen Link in <nav> ergänzen.

Links anpassen (in index.html): Google Maps (Kapitel Location), Formular (Kapitel Einladung, aktuell Platzhalter).
Video-Tipp: MP4 (H.264), max. ca. 10 MB, 10–20 Sekunden, ohne Ton – lädt auf dem Handy schneller.
