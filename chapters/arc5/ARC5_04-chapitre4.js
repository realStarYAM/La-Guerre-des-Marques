export default {
    id: "ARC5_04-chapitre4",
    arc: "arc5",
    chapterNumber: 4,
    title: "Acer a volé l'OS de Dell",
    subtitle: "Drame numérique et cris désespérés.",

    pages: [
        {
            pageTitle: "Page 1 — Le Vol 💾",
            blocks: [
                { type: "big", tone: "mystery", icon: "🌙", text: "Tout le monde dort... Acer agit." },
                { type: "card", tone: "system", icon: "💾", title: "Copie sauvage", text: "Acer clone l'OS de Dell pixel par pixel, comme un ninja binaire." },
                { type: "quote", tone: "danger", who: "Narrateur", text: "Les disques durs frissonnent. La trahison circule en silence." }
            ]
        },
        {
            pageTitle: "Page 2 — Dell débarque 🚨",
            blocks: [
                { type: "big", tone: "danger", icon: "🚨", text: "Dell repère l'intrusion. Les alarmes internes s'allument." },
                { type: "quote", tone: "danger", who: "Dell", text: "NON !!", sfx: "noGodPleaseNo", shake: true },
                { type: "card", tone: "danger", icon: "⚡", title: "Panique instantanée", text: "Les ventilateurs s'emballent, l'écran devient rouge, tout le réseau retient son souffle." }
            ]
        },
        {
            pageTitle: "Page 3 — Panique générale 😱",
            blocks: [
                { type: "chips", tone: "danger", items: [
                    { icon: "😱", label: "HP", sublabel: "Hurle" },
                    { icon: "😡", label: "MSI", sublabel: "Se braque" },
                    { icon: "😳", label: "ASUS", sublabel: "Bug visuel" },
                    { icon: "🤯", label: "Lenovo", sublabel: "Lag mental" }
                ] },
                { type: "quote", tone: "life", who: "Gigabyte", text: "Je l'avais dit... ils volent tout ce qui brille." },
                { type: "card", tone: "system", icon: "🛰️", title: "Signal viral", text: "Les notifications explosent, les forums s'enflamment, tout le monde a un avis." }
            ]
        },
        {
            pageTitle: "Page 4 — Verdict ⚖️",
            blocks: [
                { type: "card", tone: "life", icon: "🛠️", title: "Restauration express", text: "Dell récupère son OS grâce à une sauvegarde obscure." },
                { type: "quote", tone: "danger", who: "Acer", text: "Ok... c'était un test. Vous êtes tous trop sérieux." },
                { type: "banner", tone: "system", title: "Acer se fait afficher", subtitle: "Le mur des honteux s'agrandit", icons: ["🪧", "😂", "📣"], labels: ["Public", "Mèmes", "Live"] },
                { type: "divider", text: "FIN DU CHAPITRE — MAIS LA GUERRE CONTINUE" }
            ]
        }
    ]
};
