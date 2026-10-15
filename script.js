document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Wir versuchen die JSON-Datei zu laden
        let response = await fetch('./content.json');

        // Prüfen, ob die Datei überhaupt existiert (Fehler wie 404 abfangen)
        if (!response.ok) {
            throw new Error(`Datei nicht gefunden (HTTP-Status: ${response.status})`);
        }

        let data = await response.json();

        // Alle Elemente mit data-content Attribut befüllen
        for (let key in data) {
            let elements = document.querySelectorAll(`[data-content="${key}"]`);
            elements.forEach(element => {
                element.innerText = data[key];
            });
        }
    } catch (error) {
        // Zeigt den Fehler direkt rot auf der Website an
        console.error("Fehler:", error);
        document.body.innerHTML = `
            <div style="background: #f8d7da; color: #721c24; padding: 30px; margin: 50px auto; max-width: 600px; border-radius: 8px; font-family: sans-serif; border: 1px solid #f5c6cb;">
                <h2 style="margin-top:0; color: #721c24;">⚠️ Fehler beim Laden der Inhalte</h2>
                <p><strong>Details:</strong> ${error.message}</p>
                <hr style="border:0; border-top:1px solid #f5c6cb; margin: 15px 0;">
                <p style="font-size: 0.9rem; margin-bottom:0;">Mögliche Ursache: Entweder heißt die Datei auf GitHub nicht exakt <code>content.json</code> (Groß-/Kleinschreibung!) oder sie liegt nicht im Hauptverzeichnis.</p>
            </div>
        ` + document.body.innerHTML;
    }
});