export default {
    id: "ARC5_02-chapitre1",
    arc: "arc5",
    chapterNumber: 1,
    title: "Chapitre 1 — Manipulation Systémique",
    subtitle: "Les mots peuvent être des armes...",

    pages: [
        {
            pageTitle: "Page 1 — Le Plan 🎯",
            blocks: [
                { type: "card", tone: "danger", icon: "🎯", title: "Réunion secrète", text: "Dans un coin sombre du réseau, le trio se rassemble. Leurs écrans brillent d'une lueur malsaine." },
                { type: "quote", tone: "danger", who: "Huawei", text: "On ne les attaque pas de front. On les détruit de l'intérieur. Doute. Peur. Isolement." },
                { type: "quote", tone: "danger", who: "Acer", text: "On monte MSI contre ASUS. Dell contre HP. Gigabyte contre tout le monde." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Rumeurs 🗣️",
            blocks: [
                { type: "big", tone: "danger", icon: "🗣️", text: "Les messages commencent." },
                { type: "card", tone: "danger", icon: "📱", title: "À MSI, de 'source anonyme'", text: "« ASUS dit que tes LEDs RGB sont ridicules. Que le 'gaming' c'est pour les losers. »" },
                { type: "card", tone: "danger", icon: "📱", title: "À ASUS, de 'source anonyme'", text: "« MSI prépare quelque chose contre toi. Méfie-toi du dragon. »" },
                { type: "quote", tone: "mystery", who: "Narrateur", text: "Aucun message n'est vrai. Tous font leur effet." }
            ]
        },
        {
            pageTitle: "Page 3 — La Fracture 💔",
            blocks: [
                { type: "card", tone: "danger", icon: "🐉", title: "MSI s'énerve", text: "Le dragon confronte ASUS. Les mots volent. Les accusations pleuvent." },
                { type: "quote", tone: "danger", who: "MSI", text: "Alors comme ça tu parles dans mon dos ?! J'aurais dû me méfier de toi depuis le début !" },
                { type: "quote", tone: "mystery", who: "ASUS", text: "Quoi ?! Je n'ai RIEN dit ! D'où tu sors ça ?!" },
                { type: "card", tone: "danger", icon: "😈", title: "Dans l'ombre...", text: "Packard Bell regarde et sourit. Le plan fonctionne." }
            ]
        },
        {
            pageTitle: "Page 4 — L'Isolement 🏝️",
            blocks: [
                { type: "card", tone: "mystery", icon: "💚", title: "HP se retrouve seule", text: "Les messages de Huawei ont fait leur effet. Elle ne sait plus qui croire." },
                { type: "quote", tone: "mystery", who: "HP", text: "Est-ce que... est-ce que tout le monde pense vraiment que je suis obsolète ?" },
                { type: "card", tone: "danger", icon: "📱", title: "Nouveau message", text: "« Même Lenovo l'a dit. Tu devrais peut-être juste... disparaître. »" },
                { type: "big", tone: "danger", icon: "😢", text: "HP ne répond plus aux autres." }
            ]
        },
        {
            pageTitle: "Page 5 — Le Malaise 😰",
            blocks: [
                { type: "banner", tone: "mystery", title: "Ambiance toxique", subtitle: "Personne ne se fait plus confiance", icons: ["❌", "😰", "🤫"], labels: ["Méfiance", "Peur", "Silence"] },
                { type: "quote", tone: "mystery", who: "Dell", text: "Quelque chose ne va pas. Tout le monde se regarde de travers. C'était pas comme ça avant." },
                { type: "card", tone: "danger", icon: "👁️", title: "Mais personne ne voit", text: "Personne ne voit les trois ombres qui tirent les ficelles. Personne... sauf Gigabyte." },
                { type: "divider", text: "À SUIVRE..." }
            ]
        }
    ]
};
