export default {
    id: "ARC5_01-prologue",
    arc: "arc5",
    chapterNumber: 0,
    title: "Prologue — Les Ténèbres Intérieures",
    subtitle: "Quand la vengeance devient obsession...",

    pages: [
        {
            pageTitle: "Page 1 — Changement d'Atmosphère 🌑",
            blocks: [
                { type: "big", tone: "danger", icon: "🌑", text: "Quelque chose a changé." },
                { type: "card", tone: "mystery", icon: "🌫️", title: "L'air est différent", text: "Plus lourd. Plus sombre. Comme si le réseau lui-même retenait son souffle." },
                { type: "quote", tone: "danger", who: "Narrateur", text: "Après la rupture d'Acer, après les humiliations subies... les victimes sont devenues bourreaux." }
            ]
        },
        {
            pageTitle: "Page 2 — Le Trio Toxique 💀",
            blocks: [
                { type: "banner", tone: "danger", title: "Ils se sont trouvés", subtitle: "Unis par la rancœur, la haine et le désir de vengeance", icons: ["💻", "🔔", "📱"], labels: ["Acer", "Packard Bell", "Huawei"] },
                { type: "card", tone: "danger", icon: "🤝", title: "Une alliance malsaine", text: "Trois Marques humiliées. Trois Marques brisées. Trois Marques qui ne veulent plus pardonner." },
                { type: "big", tone: "danger", icon: "😈", text: "Ils veulent que les autres SOUFFRENT." }
            ]
        },
        {
            pageTitle: "Page 3 — Les Premiers Signes ⚠️",
            blocks: [
                { type: "card", tone: "mystery", icon: "📱", title: "Huawei envoie un message", text: "Un message privé à HP. Des mots qui blessent. Des vérités déformées. Des mensonges calculés." },
                { type: "quote", tone: "danger", who: "Huawei", text: "Tu sais HP... Tout le monde pense que tu es obsolète. Même Dell le dit dans ton dos." },
                { type: "card", tone: "danger", icon: "😢", title: "HP ne répond pas", text: "Mais les mots ont fait leur effet. La graine du doute est plantée." }
            ]
        },
        {
            pageTitle: "Page 4 — Le Silence des Témoins 🤐",
            blocks: [
                { type: "card", tone: "mystery", icon: "🔔", title: "Packard Bell ricane", text: "Il observe depuis l'ombre. Chaque larme. Chaque doute. Chaque fissure." },
                { type: "quote", tone: "neutral", who: "Packard Bell", text: "Avant, c'était moi le fantôme. Maintenant... je vais hanter les vivants." },
                {
                    type: "chips", tone: "danger", items: [
                        { icon: "👀", label: "MSI", sublabel: "Observe" },
                        { icon: "😰", label: "ASUS", sublabel: "S'inquiète" },
                        { icon: "🤫", label: "Dell", sublabel: "Se tait" }
                    ]
                }
            ]
        },
        {
            pageTitle: "Page 5 — FIN DU PROLOGUE 🔥",
            blocks: [
                { type: "card", tone: "danger", icon: "💻", title: "Acer émerge de l'ombre", text: "Le plus brisé de tous. Le plus dangereux. Sa rage s'est transformée en cruauté froide." },
                { type: "quote", tone: "danger", who: "Acer", text: "Ils m'ont traité de déchet. De budget PC. De moins que rien. Maintenant... je vais leur montrer ce que c'est d'être RIEN." },
                { type: "big", tone: "danger", icon: "⚡", text: "L'ARC 5 commence.", shake: true },
                { type: "divider", text: "LES TÉNÈBRES S'ÉTENDENT..." }
            ]
        }
    ]
};
