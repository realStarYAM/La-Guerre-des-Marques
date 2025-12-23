export default {
    id: "ARC4_07-chapitre6",
    arc: "arc4",
    chapterNumber: 6,
    title: "Chapitre 6 — La Rupture",
    subtitle: "Quand la rage numérique ne connaît plus de limites...",

    pages: [
        {
            pageTitle: "Page 1 — Tensions Maximales ⚡",
            blocks: [
                { type: "big", tone: "danger", icon: "⚡", text: "L'atmosphère est électrique." },
                { type: "card", tone: "mystery", icon: "🌡️", title: "Température système : CRITIQUE", text: "Les processeurs surchauffent. Les ventilateurs hurlent. Quelque chose va exploser." },
                { type: "quote", tone: "danger", who: "Narrateur", text: "Après toutes les humiliations, tous les rires, toutes les moqueries... Acer est au bord du gouffre." }
            ]
        },
        {
            pageTitle: "Page 2 — L'Arrogance de MSI 🐉",
            blocks: [
                { type: "card", tone: "danger", icon: "🐉", title: "MSI s'approche", text: "Le dragon se pavane avec son arrogance habituelle. Ses LEDs RGB clignotent avec mépris." },
                { type: "quote", tone: "neutral", who: "MSI", text: "Tu sais Acer... Tu as toujours été le maillon faible. Le budget PC. Celui qu'on achète quand on a pas les moyens." },
                { type: "card", tone: "mystery", icon: "😤", title: "Acer serre les poings", text: "Ses circuits crépitent. Sa RAM vibre de rage contenue." }
            ]
        },
        {
            pageTitle: "Page 3 — La Provocation Finale 🎭",
            blocks: [
                { type: "big", tone: "danger", icon: "🎭", text: "MSI continue..." },
                { type: "quote", tone: "neutral", who: "MSI", text: "Regarde-toi. Même Packard Bell a plus de dignité que toi. Et Packard Bell est MORT." },
                { type: "card", tone: "danger", icon: "💢", title: "Les autres Marques reculent", text: "HP, Dell, ASUS... Tous sentent que quelque chose de terrible va se produire." },
                { type: "quote", tone: "mystery", who: "ASUS (murmurant)", text: "MSI... arrête... Tu vas trop loin..." }
            ]
        },
        {
            pageTitle: "Page 4 — Le Mot de Trop 💣",
            blocks: [
                { type: "card", tone: "danger", icon: "🐉", title: "MSI ricane", text: "Ignorant tous les avertissements, le dragon lance une dernière pique..." },
                { type: "big", tone: "neutral", icon: "🗣️", text: "« Acer... »" },
                { type: "card", tone: "mystery", icon: "⏸️", title: "Silence total", text: "Le temps se fige. Tout le monde retient son souffle numérique." },
                { type: "divider", text: "..." }
            ]
        },
        {
            pageTitle: "Page 5 — L'EXPLOSION 💥",
            blocks: [
                { type: "big", tone: "danger", icon: "💥", text: "ACER EXPLOSE.", shake: true, sfx: "acerRage" },
                { type: "quote", tone: "danger", who: "ACER", text: "TA GUEULE ! TU ES DE LA MERDE MSI !!!", shake: true },
                { type: "card", tone: "danger", icon: "🔊", title: "La voix résonne", text: "Le cri traverse tout le réseau. Chaque serveur, chaque routeur, chaque switch entend la rage pure d'Acer.", shake: true },
                { type: "banner", tone: "danger", title: "SYSTÈME EN SURCHARGE", subtitle: "Niveau de rage : MAXIMUM", icons: ["🔥", "💢", "☠️"], labels: ["Fury", "Rage", "Chaos"] }
            ]
        },
        {
            pageTitle: "Page 6 — Le Choc 😱",
            blocks: [
                { type: "big", tone: "mystery", icon: "😱", text: "Silence absolu." },
                { type: "card", tone: "mystery", icon: "🐉", title: "MSI... ne dit rien", text: "Pour la première fois de son existence, le dragon est sans voix. Ses LEDs RGB sont figées." },
                {
                    type: "chips", tone: "danger", items: [
                        { icon: "😨", label: "HP", sublabel: "Choqué" },
                        { icon: "😰", label: "Dell", sublabel: "Terrifié" },
                        { icon: "😶", label: "ASUS", sublabel: "Muet" },
                        { icon: "💀", label: "Gigabyte", sublabel: "Paralysé" }
                    ]
                },
                { type: "quote", tone: "mystery", who: "Narrateur", text: "Personne n'avait jamais vu Acer ainsi. Le budget PC venait de montrer sa vraie puissance." }
            ]
        },
        {
            pageTitle: "Page 7 — FIN DU CHAPITRE 🔥",
            blocks: [
                { type: "card", tone: "danger", icon: "💻", title: "Acer tourne le dos", text: "Sans un mot de plus, Acer s'éloigne. Ses pas résonnent dans le silence numérique." },
                { type: "quote", tone: "danger", who: "Acer (murmurant)", text: "Je ne serai plus jamais votre punching-ball." },
                { type: "big", tone: "mystery", icon: "🌑", text: "Les ténèbres numériques l'engloutissent." },
                { type: "card", tone: "danger", icon: "⚠️", title: "FIN DU CHAPITRE 6", text: "La Guerre des Marques vient de prendre un tournant. Rien ne sera plus jamais comme avant." },
                { type: "divider", text: "À SUIVRE..." }
            ]
        }
    ]
};
