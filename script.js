document.addEventListener("DOMContentLoaded", async () => {
    try {
        let response = await fetch('./content.json');
        let data = await response.json();

        // Alle IDs aus der JSON in die HTML-Elemente mappen
        for (let key in data) {
            let element = document.getElementById(key);
            if (element) {
                element.innerText = data[key];
            }
        }
    } catch (error) {
        console.error("Fehler beim Laden der Inhalte:", error);
    }
});
