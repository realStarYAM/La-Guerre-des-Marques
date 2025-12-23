export default {
    id: "ARC1_01-prologue",
    arc: "arc1",
    chapterNumber: 0,
    title: "Prologue — L'Aube du Chaos",
    subtitle: "Le ciel numérique brûle. Les serveurs hurlent. Quelque chose se prépare.",
    pages: [
        {
            pageTitle: "Page 1 — Le Calme Avant la Tempête ⚡",
            blocks: [
                { type: "big", tone: "danger", icon: "🔥", text: "Le ciel numérique brûle." },
                { type: "card", tone: "system", icon: "🖥️", title: "Les serveurs hurlent", text: "Une pulsation sourde traverse les câbles. Quelque chose se prépare." },
                { type: "card", tone: "mystery", icon: "⚖️", title: "Un équilibre fragile", text: "Depuis des décennies, les Marques coexistent. Une paix calculée." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Géants Observent 👁️",
            blocks: [
                { type: "banner", tone: "system", title: "Les Marques se préparent", icons: ["🔵", "🔴", "🟠", "🟢"], labels: ["ASUS", "MSI", "Gigabyte", "HP"] },
                { type: "card", tone: "system", icon: "🔵", title: "ASUS observe", text: "Ses circuits pulsent d'une lumière froide. Elle sent le changement venir." },
                { type: "card", tone: "danger", icon: "🐉", title: "MSI se tient prêt", text: "Le dragon rouge gronde. Son énergie crépite." }
            ]
        },
        {
            pageTitle: "Page 3 — Les Faibles 💀",
            blocks: [
                { type: "card", tone: "mystery", icon: "🌑", title: "Dans l'ombre…", text: "HP et Lenovo échangent des données. Silencieux. Stratégiques. Mortellement précis." },
                { type: "banner", tone: "danger", title: "Les premiers à tomber", icons: ["💻", "🔔"], labels: ["Acer", "Packard Bell"] },
                { type: "quote", tone: "danger", who: "Narrateur", text: "Les oubliés. Les faibles. Ils ne le savent pas encore, mais leur destin est scellé." }
            ]
        },
        {
            pageTitle: "Page 4 — L'Inévitable ⚔️",
            blocks: [
                { type: "big", tone: "danger", icon: "⚔️", text: "La guerre n'a pas encore commencé." },
                { type: "big", tone: "mystery", icon: "🌀", text: "Mais elle est inévitable." },
                { type: "card", tone: "system", icon: "⏱️", title: "FIN DU PROLOGUE", text: "Les lumières clignotent. Le compte à rebours commence." }
            ]
        }
    ]
};
