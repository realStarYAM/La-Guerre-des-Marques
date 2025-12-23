export default {
    id: "ARC5_03-chapitre2",
    arc: "arc5",
    chapterNumber: 2,
    title: "Chapitre 2 — Le Témoin",
    subtitle: "Gigabyte a tout vu...",

    pages: [
        {
            pageTitle: "Page 1 — L'Observation 👁️",
            blocks: [
                { type: "card", tone: "system", icon: "🖥️", title: "Gigabyte", text: "Silencieux. Discret. Toujours en arrière-plan. Mais ses capteurs ne ratent rien." },
                { type: "quote", tone: "system", who: "Gigabyte", text: "J'ai intercepté les messages. Les vrais expéditeurs. Les vraies IP. Je sais tout." },
                { type: "big", tone: "mystery", icon: "🔍", text: "Il décide de mener l'enquête." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Preuves 📁",
            blocks: [
                { type: "card", tone: "system", icon: "📁", title: "Logs récupérés", text: "Gigabyte compile tout. Chaque message. Chaque manipulation. Chaque mensonge." },
                {
                    type: "stats", tone: "danger", items: [
                        { icon: "📩", value: "47", label: "Faux messages" },
                        { icon: "🎭", value: "12", label: "Identités usurpées" },
                        { icon: "💔", value: "5", label: "Victimes ciblées" },
                        { icon: "😈", value: "3", label: "Coupables" }
                    ]
                },
                { type: "quote", tone: "danger", who: "Gigabyte", text: "Acer. Packard Bell. Huawei. Les trois orchestrent tout depuis le début." }
            ]
        },
        {
            pageTitle: "Page 3 — Le Dilemme 🤔",
            blocks: [
                { type: "card", tone: "mystery", icon: "🤔", title: "Que faire ?", text: "Gigabyte hésite. S'il révèle tout, le trio va le cibler. S'il se tait, le chaos continue." },
                { type: "quote", tone: "mystery", who: "Gigabyte", text: "Si je parle... je deviens la prochaine cible. Si je me tais... ils détruisent tout le monde." },
                { type: "divider", text: "..." },
                { type: "big", tone: "life", icon: "💪", text: "Il choisit de parler." }
            ]
        },
        {
            pageTitle: "Page 4 — La Révélation 📢",
            blocks: [
                { type: "card", tone: "life", icon: "📢", title: "Réunion d'urgence", text: "Gigabyte rassemble MSI, ASUS, HP, Dell et Lenovo. Il projette les preuves." },
                { type: "quote", tone: "system", who: "Gigabyte", text: "Regardez. Chaque message 'anonyme' que vous avez reçu... venait d'eux. Ils vous ont manipulés." },
                {
                    type: "chips", tone: "danger", items: [
                        { icon: "😱", label: "MSI", sublabel: "Choqué" },
                        { icon: "😡", label: "ASUS", sublabel: "Furieux" },
                        { icon: "😢", label: "HP", sublabel: "Dévastée" },
                        { icon: "😤", label: "Dell", sublabel: "En rage" }
                    ]
                }
            ]
        },
        {
            pageTitle: "Page 5 — La Colère 🔥",
            blocks: [
                { type: "big", tone: "danger", icon: "🔥", text: "La vérité éclate.", shake: true },
                { type: "quote", tone: "danger", who: "ASUS", text: "Ils nous ont monté les uns contre les autres ?! ILS VONT PAYER !" },
                { type: "quote", tone: "danger", who: "MSI", text: "J'ai failli détruire ma relation avec ASUS à cause de leurs mensonges !" },
                { type: "card", tone: "life", icon: "🤝", title: "L'alliance se forme", text: "Pour la première fois depuis longtemps, les victimes s'unissent. Contre un ennemi commun." },
                { type: "divider", text: "LA CONTRE-ATTAQUE SE PRÉPARE..." }
            ]
        }
    ]
};
