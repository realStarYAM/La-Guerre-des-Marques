export default {
    id: "ARC1_04-chapitre3",
    arc: "arc1",
    arcLabel: "ARC 1",
    chapterNumber: 3,
    title: "Le Silence Après la Guerre",
    subtitle: "La guerre s'est tue. Les armes se sont tues. Tout s'est tu.",
    theme: "arc1",
    pages: [
        {
            pageTitle: "Page 1 — Le Silence 🔇",
            blocks: [
                { type: "big", tone: "mystery", icon: "🔇", text: "La guerre s'est tue." },
                { type: "big", tone: "mystery", icon: "⚔️", text: "Les armes se sont tues." },
                { type: "big", tone: "mystery", icon: "🌑", text: "Tout s'est tu." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Survivants 👁️",
            blocks: [
                { type: "banner", tone: "system", title: "Les géants se regardent", icons: ["🔵", "🐉", "🦅", "🔷", "🟢", "🎖️"], labels: ["ASUS", "MSI", "Gigabyte", "HP", "Lenovo", "Dell"] },
                { type: "quote", tone: "mystery", who: "Narrateur", text: "Ils ont survécu. Mais à quel prix ?" }
            ]
        },
        {
            pageTitle: "Page 3 — Les Ruines 💔",
            blocks: [
                { type: "card", tone: "danger", icon: "🏚️", title: "Les ruines numériques s'étendent", text: "Des fragments de code flottent dans le vide." },
                { type: "card", tone: "mystery", icon: "👻", title: "Les fantômes", text: "Acer et Packard Bell hantent les réseaux." },
                { type: "card", tone: "system", icon: "🔵", title: "ASUS contemple le carnage", text: "Ses circuits portent les cicatrices du combat." }
            ]
        },
        {
            pageTitle: "Page 4 — L'Après-Guerre 🖤",
            blocks: [
                { type: "card", tone: "danger", icon: "🐉", title: "MSI range ses griffes", text: "Le dragon est fatigué. Son feu brûle moins fort." },
                { type: "card", tone: "system", icon: "🦅", title: "Gigabyte calcule les pertes", text: "Les chiffres sont terrifiants. La victoire a un goût amer." },
                { type: "card", tone: "mystery", icon: "🌑", title: "HP et Lenovo se retirent", text: "Dans l'ombre. Elles planifient déjà la prochaine guerre." }
            ]
        },
        {
            pageTitle: "Page 5 — La Lueur 🕯️",
            blocks: [
                { type: "card", tone: "system", icon: "🎖️", title: "Dell observe les débris", text: "Elle a fait ce qu'il fallait. Les faibles devaient partir." },
                { type: "card", tone: "life", icon: "🌐", title: "Le réseau mondial cicatrise", text: "Les données reprennent leur flux. Mais rien ne sera plus comme avant." },
                { type: "card", tone: "mystery", icon: "💜", title: "Dans les profondeurs oubliées…", text: "Quelque chose pulse. Faiblement. Imperceptiblement." }
            ]
        },
        {
            pageTitle: "Page 6 — FIN DE L'ARC 1 🌀",
            blocks: [
                { type: "big", tone: "life", icon: "💓", text: "Les morts ne restent pas toujours morts." },
                { type: "quote", tone: "mystery", who: "Narrateur", text: "Pas dans ce monde." },
                { type: "card", tone: "mystery", icon: "🕯️", title: "FIN DE L'ARC 1", text: "Le silence règne. Les survivants comptent leurs blessures. Dans l'ombre, une lueur persiste." }
            ]
        }
    ]
};
