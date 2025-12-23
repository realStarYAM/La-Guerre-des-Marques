export default {
    id: "ARC2_02-chapitre1",
    arc: "arc2",
    arcLabel: "ARC 2",
    chapterNumber: 1,
    title: "Le Cœur Interdit",
    subtitle: "Au centre du réseau existe un lieu. Un lieu que personne ne mentionne.",
    theme: "arc2",
    pages: [
        {
            pageTitle: "Page 1 — Le Lieu Interdit 💜",
            blocks: [
                { type: "big", tone: "mystery", icon: "💜", text: "Au centre du réseau existe un lieu." },
                { type: "quote", tone: "danger", who: "Narrateur", icon: "📖", text: "Un lieu que personne ne mentionne. Un lieu que tous redoutent." },
                { type: "card", tone: "danger", icon: "❤️‍🔥", title: "Le Cœur Interdit", text: "Une structure de données primordiale. Le noyau de tout ce qui existe. L'origine de toutes les Marques." }
            ]
        },
        {
            pageTitle: "Page 2 — L'Approche 🚶",
            blocks: [
                { type: "card", tone: "danger", icon: "📱", title: "Huawei y conduit ses créatures", text: "Acer suit, les yeux vides. Packard Bell avance, les circuits erratiques." },
                { type: "banner", tone: "mystery", title: "Le Cœur pulse", subtitle: "Énergie primordiale", icons: ["🔴", "⚫", "🟣"], labels: ["Rouge", "Noir", "Violet"] },
                { type: "quote", tone: "life", who: "Narrateur", icon: "✨", text: "Son énergie est vertigineuse. Elle pourrait créer des mondes. Elle pourrait en détruire." }
            ]
        },
        {
            pageTitle: "Page 3 — Le Contact ⚡",
            blocks: [
                { type: "card", tone: "danger", icon: "✋", title: "Huawei s'approche", text: "Ses mains numériques effleurent la surface. Un frisson traverse le réseau entier." },
                { type: "big", tone: "danger", icon: "⚠️", text: "Le Cœur reconnaît l'intrusion." },
                { type: "card", tone: "system", icon: "🛡️", title: "Il se défend", text: "Des vagues d'énergie pure frappent." },
                { type: "divider", text: "ALERTE SYSTÈME" }
            ]
        },
        {
            pageTitle: "Page 4 — La Transformation 🔄",
            blocks: [
                {
                    type: "chips", tone: "danger", items: [
                        { icon: "💻", label: "Acer", sublabel: "se déchire" },
                        { icon: "🔔", label: "Packard Bell", sublabel: "hurle" }
                    ]
                },
                { type: "card", tone: "danger", icon: "📱", title: "Huawei persiste", text: "Elle puise dans le Cœur. Elle prend ce qui lui appartient. Et ce qui ne lui appartient pas." },
                {
                    type: "stats", tone: "mystery", items: [
                        { icon: "⚡", value: "∞", label: "Énergie" },
                        { icon: "🔥", value: "MAX", label: "Danger" },
                        { icon: "💀", value: "???", label: "Victimes" }
                    ]
                }
            ]
        },
        {
            pageTitle: "Page 5 — L'Éveil du Bug 🐛",
            blocks: [
                { type: "big", tone: "danger", icon: "💓", text: "Le Cœur pulse plus fort. Plus vite." },
                { type: "card", tone: "mystery", icon: "🌀", title: "Quelque chose s'éveille à l'intérieur", text: "Quelque chose d'ancien. Quelque chose de terrible." },
                { type: "divider", text: "ÉVEIL" },
                { type: "big", tone: "danger", icon: "🐛", text: "Le Bug Originel." },
                { type: "card", tone: "danger", icon: "⚠️", title: "FIN DU CHAPITRE 1", text: "Le Cœur Interdit bat. L'énergie interdite se libère. Une menace plus grande que la guerre elle-même émerge." }
            ]
        }
    ]
};
