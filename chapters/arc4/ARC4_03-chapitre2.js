export default {
    id: "ARC4_03-chapitre2",
    arc: "arc4",
    chapterNumber: 2,
    title: "Chapitre 2 — Media Center Dreams",
    subtitle: "Quand la nostalgie devient réalité virtuelle...",

    pages: [
        {
            pageTitle: "Page 1 — Windows Media Center 🎬",
            blocks: [
                { type: "big", tone: "life", icon: "🎬", text: "WINDOWS MEDIA CENTER" },
                { type: "card", tone: "system", icon: "📺", title: "Interface mythique", text: "L'écran vert métallique. Les menus fluides. La télécommande infrarouge. HP active le Media Center." },
                { type: "quote", tone: "life", who: "HP", text: "Nostalgie... Je me souviens de l'époque où on streamait en 480p et on trouvait ça révolutionnaire." }
            ]
        },
        {
            pageTitle: "Page 2 — La Bibliothèque Infinie 📚",
            blocks: [
                { type: "card", tone: "mystery", icon: "📚", title: "Catalogue sans fin", text: "HP navigue dans sa bibliothèque multimédia. Mais elle ne finit jamais. Des millions de fichiers. Des milliards." },
                { type: "banner", tone: "mystery", title: "Fichiers détectés", icons: ["🎵", "🎥", "📷", "📄"], labels: ["∞ musiques", "∞ vidéos", "∞ photos", "∞ documents"] },
                { type: "big", tone: "danger", icon: "♾️", text: "Infini. Littéralement INFINI." }
            ]
        },
        {
            pageTitle: "Page 3 — Glitch Musical 🎵",
            blocks: [
                { type: "card", tone: "danger", icon: "🎵", title: "Lecture aléatoire", text: "HP lance un morceau au hasard. C'est... le son de démarrage Vista. En loop. Remixé. Distordu.", sfx: "shock" },
                { type: "quote", tone: "system", who: "Gigabyte", text: "C'est... hypnotique ? Je peux pas arrêter d'écouter..." },
                { type: "big", tone: "mystery", icon: "🌀", text: "Le son devient une entité." }
            ]
        },
        {
            pageTitle: "Page 4 — Troll : Codec Manquant 🎭",
            blocks: [
                { type: "card", tone: "neutral", icon: "▶️", title: "Acer veut lire une vidéo", text: "« Ooh, un vieux film ! Je lance ! »" },
                { type: "big", tone: "danger", icon: "❌", text: "CODEC MANQUANT", shake: true },
                { type: "quote", tone: "neutral", who: "Acer", text: "Ah non... Pas encore le message du codec... JE TROUVE LE CODEC OÙ ?!" },
                { type: "card", tone: "system", icon: "😂", title: "ASUS rigole", text: "« Bienvenue en 2007 mon gars. K-Lite Codec Pack, ça te dit quelque chose ? »" }
            ]
        },
        {
            pageTitle: "Page 5 — Visualisation Audio 🌈",
            blocks: [
                { type: "card", tone: "life", icon: "🌈", title: "Visualiseur activé", text: "MSI active le visualiseur audio. Des ondes colorées dansent sur l'écran. Vert. Bleu. Aurora." },
                {
                    type: "stats", tone: "life", items: [
                        { icon: "🎨", value: "100%", label: "Beauté" },
                        { icon: "✨", value: "MAX", label: "Style" },
                        { icon: "🔊", value: "EPIC", label: "Son" }
                    ]
                },
                { type: "quote", tone: "life", who: "MSI", text: "C'est beau. C'est inutile. C'est PARFAIT." },
                { type: "divider", text: "MÉDIA EN LECTURE..." }
            ]
        }
    ]
};
