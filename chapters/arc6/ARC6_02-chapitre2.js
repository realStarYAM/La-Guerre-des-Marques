export default {
    id: "ARC6_02-chapitre2",
    arc: "arc6",
    chapterNumber: 2,
    title: "Chapitre 2 — Les Marques Paniquent",
    subtitle: "La peur change de camp.",

    pages: [
        {
            pageTitle: "Page 1 — Dell Réalise 😰",
            blocks: [
                { type: "quote", tone: "mystery", who: "DELL", text: "C'était censé être une blague…", sfx: "noGodPleaseNo" },
                { type: "card", tone: "danger", icon: "😱", title: "La Réalisation", text: "Dell comprend enfin l'ampleur de ce qu'ils ont déclenché. Toutes ces moqueries, tous ces pipi..." },
                { type: "big", tone: "danger", icon: "🚨", text: "CONSÉQUENCES IMMINENTES" }
            ]
        },
        {
            pageTitle: "Page 2 — Lenovo S'Inquiète 😓",
            blocks: [
                { type: "quote", tone: "neutral", who: "LENOVO", text: "On a été trop loin…" },
                { type: "card", tone: "mystery", icon: "💭", title: "Les Remords", text: "Lenovo, d'habitude si discret, prend enfin la parole. Mais est-il déjà trop tard ?" },
                { type: "banner", tone: "danger", title: "ÉTAT D'ALERTE", subtitle: "Toutes les marques sur les nerfs", icons: ["🔵", "💻", "🐉", "💚"], labels: ["ASUS", "Dell", "MSI", "HP"] }
            ]
        }
    ]
};
