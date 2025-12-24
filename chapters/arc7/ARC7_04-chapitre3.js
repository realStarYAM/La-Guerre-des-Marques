export default {
    id: "ARC7_04-chapitre3",
    arc: "arc7",
    chapterNumber: 3,
    title: "Chapitre 3 — La Riposte",
    subtitle: "ASUS ne se laisse pas faire...",

    pages: [
        {
            pageTitle: "Page 1 — Mode Rage 🐉",
            blocks: [
                { type: "big", tone: "danger", icon: "🐉", text: "ASUS S'ÉNERVE", shake: true },
                { type: "card", tone: "danger", icon: "⚡", title: "Activation des protocoles", text: "ASUS active son mode défense ultime. ROG STRIX PROTOCOL." },
                { type: "quote", tone: "danger", who: "ASUS", text: "Tu veux la guerre, Acer ? TU VAS L'AVOIR.", sfx: "tuesmaladeHp" },
                { type: "quote", tone: "neutral", who: "Acer", text: "...Euh... on peut discuter ?" }
            ]
        },
        {
            pageTitle: "Page 2 — Combat Épique ⚔️",
            blocks: [
                { type: "banner", tone: "danger", title: "DUEL FINAL", subtitle: "ASUS vs Acer vs Packard Bell", icons: ["🔵", "💚", "👻"], labels: ["ASUS", "Acer", "P.Bell"] },
                {
                    type: "stats", tone: "danger", items: [
                        { icon: "⚔️", value: "3", label: "Combattants" },
                        { icon: "💥", value: "999", label: "Dégâts" },
                        { icon: "🔥", value: "MAX", label: "Intensité" }
                    ]
                },
                { type: "quote", tone: "danger", who: "Packard Bell", text: "VOUS ALLEZ TOUS TOMBER !" },
                { type: "quote", tone: "danger", who: "ASUS", text: "Ferme-la, dinosaure numérique.", sfx: "acerRage" }
            ]
        },
        {
            pageTitle: "Page 3 — L'Issue 💀",
            blocks: [
                { type: "big", tone: "mystery", icon: "💨", text: "FUMÉE..." },
                { type: "card", tone: "mystery", icon: "❓", title: "Qui a gagné ?", text: "La bataille s'achève. Mais le vainqueur n'est pas clair..." },
                { type: "quote", tone: "neutral", who: "MSI", text: "...C'est fini ? Qui est mort ?" },
                { type: "quote", tone: "mystery", who: "Gigabyte", text: "Je vois trois corps. Je sais pas qui c'est." },
                { type: "divider", text: "À SUIVRE..." },
                { type: "big", tone: "system", icon: "🎬", text: "FIN DE L'ARC 7" }
            ]
        }
    ]
};
