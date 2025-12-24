export default {
    id: "ARC6_03-chapitre3",
    arc: "arc6",
    chapterNumber: 3,
    title: "Chapitre 3 — Le Silence",
    subtitle: "Quand tout s'arrête.",

    // Hook spécial pour gérer l'effet de silence
    onPageChange(pageIndex) {
        if (pageIndex === 0) {
            // Couper la musique pendant 2 secondes puis reprendre doucement
            if (window.AudioManager && window.AudioManager.ambient) {
                const ambient = window.AudioManager.ambient;
                const originalVolume = window.AudioManager.volume;

                // Fade out rapide
                window.AudioManager.fadeOut(ambient, () => {
                    // Silence de 2 secondes
                    setTimeout(() => {
                        // Reprendre à volume faible
                        if (window.AudioManager.ambient) {
                            window.AudioManager.ambient.volume = 0;
                            window.AudioManager.ambient.play().then(() => {
                                window.AudioManager.fadeIn(window.AudioManager.ambient, originalVolume * 0.5, 2000);
                            }).catch(e => console.warn('Reprise audio échouée:', e));
                        }
                    }, 2000);
                }, 500);
            }
        }
    },

    pages: [
        {
            pageTitle: "Page 1 — Le Vide 🔇",
            blocks: [
                { type: "big", tone: "mystery", icon: "🔇", text: "Plus aucun rire. Plus aucun son." },
                { type: "card", tone: "neutral", icon: "⏸️", title: "Le Silence Absolu", text: "Pour la première fois depuis le début de la guerre, personne ne parle. Personne n'ose." },
                { type: "card", tone: "mystery", icon: "👁️", title: "L'Attente", text: "Tous les regards sont tournés vers Acer. Que va-t-il faire maintenant qu'il a le pouvoir ?" },
                { type: "divider", text: "..." },
                { type: "big", tone: "neutral", icon: "💨", text: "Le calme avant la tempête" }
            ]
        }
    ]
};
