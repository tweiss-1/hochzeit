document.addEventListener("DOMContentLoaded", async () => {
    try {
        let response = await fetch('./content.json');
        if (!response.ok) throw new Error("Fehler beim Laden der JSON");
        let data = await response.json();

        // 1. Alle einfachen Textelemente befüllen (wie bisher)
        for (let key in data) {
            let elements = document.querySelectorAll(`[data-content="${key}"]`);
            elements.forEach(element => {
                element.innerText = data[key];
            });
        }

        // 2. DIASHOW STARTEN
        startDiashow(data.diashow_bilder);

    } catch (error) {
        console.error("Fehler:", error);
        // (Optional: Hier den roten Kasten von vorher einblenden, wenn was schiefgeht)
    }
});


function startDiashow(bilderListe) {
    const diashowWrapper = document.getElementById('diashow-wrapper');

    if (!bilderListe || bilderListe.length === 0) {
        console.warn("Keine Diashow-Bilder in content.json gefunden.");
        return;
    }

    // A) Die Bild-Elemente im HTML erstellen
    bilderListe.forEach((bildName, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('diashow-slide');
        // WICHTIG: Pfad zum Ordner images/diashow/
        slideDiv.style.backgroundImage = `url('images/diashow/${bildName}')`;
        
        // Das erste Bild sofort sichtbar machen
        if (index === 0) {
            slideDiv.classList.add('active');
        }
        
        diashowWrapper.appendChild(slideDiv);
    });

    // B) Die Rotation starten
    const slides = document.querySelectorAll('.diashow-slide');
    let currentSlideIndex = 0;
    const intervalTime = 5000; // 5 Sekunden pro Bild

    if (slides.length > 1) {
        setInterval(() => {
            // Das aktuelle Bild ausblenden
            slides[currentSlideIndex].classList.remove('active');
            
            // Index erhöhen (und zum Anfang zurückspringen, wenn am Ende)
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            
            // Das nächste Bild einblenden
            slides[currentSlideIndex].classList.add('active');
            
        }, intervalTime);
    }
}