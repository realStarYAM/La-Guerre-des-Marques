export default {
    id: "ARC5_04-chapitre3",
    arc: "arc5",
    chapterNumber: 3,
    title: "Chapitre 3 — La Confrontation",
    subtitle: "L'heure des comptes a sonné...",

    pages: [
        {
            pageTitle: "Page 1 — Le Tribunal 🏛️",
            blocks: [
                { type: "big", tone: "system", icon: "🏛️", text: "TRIBUNAL NUMÉRIQUE" },
                { type: "card", tone: "mystery", icon: "⚖️", title: "L'arène se forme", text: "Toutes les Marques sont présentes. D'un côté, les victimes unies. De l'autre, le trio accusé." },
                { type: "banner", tone: "danger", title: "Les Accusés", icons: ["💻", "🔔", "📱"], labels: ["Acer", "Packard Bell", "Huawei"] }
            ]
        },
        {
            pageTitle: "Page 2 — L'Accusation 🎤",
            blocks: [
                { type: "card", tone: "life", icon: "🎤", title: "ASUS prend la parole", text: "Sa voix tremble de colère contenue. Chaque mot est mesuré. Chaque accusation est prouvée." },
                { type: "quote", tone: "life", who: "ASUS", text: "Vous avez manipulé. Menti. Divisé. Vous avez essayé de nous détruire de l'intérieur." },
                { type: "quote", tone: "life", who: "HP", text: "J'ai cru que personne ne voulait de moi. Que j'étais... obsolète. À cause de VOS mensonges." },
                { type: "big", tone: "danger", icon: "😡", text: "Le silence du trio est assourdissant." }
            ]
        },
        {
            pageTitle: "Page 3 — La Défense... ou pas 🙄",
            blocks: [
                { type: "card", tone: "danger", icon: "💻", title: "Acer se lève", text: "Aucun remord. Aucune excuse. Juste... de la fierté tordue." },
                { type: "quote", tone: "danger", who: "Acer", text: "On a fait ce qu'on nous a fait. Vous nous avez humiliés pendant des ANNÉES. C'était JUSTE." },
                { type: "quote", tone: "danger", who: "Packard Bell", text: "Vous m'avez traité de fantôme. De mort-vivant. Maintenant vous savez ce que ça fait d'être hanté." },
                { type: "quote", tone: "danger", who: "Huawei", text: "La loi du plus fort. Vous l'avez appliquée. On l'a retournée contre vous. C'est le jeu." },
                { type: "card", tone: "mystery", icon: "😶", title: "Aucun remord", text: "Leurs yeux sont froids. Leur code est corrompu par la haine." }
            ]
        },
        {
            pageTitle: "Page 4 — Le Verdict 📜",
            blocks: [
                { type: "card", tone: "system", icon: "📜", title: "Dell prend la parole", text: "En tant que doyen du réseau, il prononce le verdict collectif." },
                { type: "quote", tone: "system", who: "Dell", text: "Vous avez dépassé toutes les limites. Ce n'était plus une guerre de Marques. C'était du harcèlement." },
                { type: "big", tone: "danger", icon: "🚫", text: "BANNISSEMENT TEMPORAIRE" },
                { type: "card", tone: "danger", icon: "🔒", title: "Sanction", text: "Acer, Packard Bell et Huawei sont isolés du réseau principal. Aucune communication. Aucun accès." }
            ]
        },
        {
            pageTitle: "Page 5 — La Promesse Sombre 🌑",
            blocks: [
                { type: "card", tone: "danger", icon: "💻", title: "Avant de partir", text: "Acer se retourne une dernière fois. Ses yeux brillent d'une lueur menaçante." },
                { type: "quote", tone: "danger", who: "Acer", text: "Vous pensez que c'est fini ? Non. C'est juste le début. On reviendra. Et quand on reviendra...", shake: true },
                { type: "big", tone: "danger", icon: "⚔️", text: "« CE SERA LA GUERRE TOTALE. »", shake: true },
                { type: "card", tone: "mystery", icon: "🌑", title: "FIN DE L'ARC 5", text: "Le trio disparaît dans les ténèbres du réseau. Le calme revient. Mais pour combien de temps ?" },
                { type: "banner", tone: "mystery", title: "À suivre dans l'ARC 6...", subtitle: "La Guerre Totale approche", icons: ["⚔️", "💀", "🔥"], labels: ["Bataille", "Destruction", "Chaos"] },
                { type: "divider", text: "FIN DE L'ARC 5" }
            ]
        }
    ]
};
