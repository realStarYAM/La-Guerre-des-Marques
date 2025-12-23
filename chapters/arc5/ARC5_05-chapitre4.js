export default {
    id: "ARC5_05-chapitre4",
    arc: "arc5",
    chapterNumber: 4,
    title: "Chapitre 4 — Acer a volé l'OS de Dell",
    subtitle: "Quand le crime numérique frappe en pleine nuit...",

    pages: [
        {
            pageTitle: "Page 1 — Le Vol 💾",
            blocks: [
                { type: "big", tone: "mystery", icon: "🌙", text: "Minuit. Tout le monde dort." },
                { type: "card", tone: "danger", icon: "💻", title: "Acer se faufile", text: "Profitant du bannissement levé, Acer s'infiltre dans les serveurs de Dell. Silencieux. Méthodique." },
                { type: "quote", tone: "danger", who: "Acer", text: "Dell m'a humilié. Maintenant... je prends ce qui lui est cher." },
                { type: "card", tone: "danger", icon: "💾", title: "COPIE EN COURS...", text: "L'OS propriétaire de Dell. Son joyau. Sa fierté. Acer le copie bit par bit." },
                {
                    type: "stats", tone: "danger", items: [
                        { icon: "📁", value: "100%", label: "Copié" },
                        { icon: "⏱️", value: "3min", label: "Durée" },
                        { icon: "🔓", value: "0", label: "Alertes" }
                    ]
                }
            ]
        },
        {
            pageTitle: "Page 2 — Dell débarque 🚨",
            blocks: [
                { type: "big", tone: "danger", icon: "🚨", text: "ALERTE INTRUSION" },
                { type: "card", tone: "system", icon: "🔴", title: "Les capteurs s'activent", text: "Dell reçoit une notification. Son OS a été accédé. De l'EXTÉRIEUR." },
                { type: "quote", tone: "mystery", who: "Dell", text: "Qu'est-ce que... Mon OS ? QUI A TOUCHÉ À MON OS ?!" },
                { type: "card", tone: "danger", icon: "👁️", title: "Dell trace la connexion", text: "L'adresse IP remonte à... ACER." },
                { type: "big", tone: "danger", icon: "😱", text: "« NON !!! »", shake: true, sfx: "noGodPleaseNo" }
            ]
        },
        {
            pageTitle: "Page 3 — Panique générale 😱",
            blocks: [
                { type: "banner", tone: "danger", title: "RÉUNION D'URGENCE", subtitle: "Toutes les Marques sont convoquées", icons: ["🔵", "🐉", "💚", "🖥️"], labels: ["ASUS", "MSI", "HP", "Gigabyte"] },
                { type: "quote", tone: "danger", who: "Dell", text: "ACER A VOLÉ MON OS ! IL A TOUT PRIS !" },
                { type: "quote", tone: "mystery", who: "ASUS", text: "Attends... Il vient de sortir de bannissement et il fait DÉJÀ ça ?!" },
                { type: "quote", tone: "neutral", who: "MSI", text: "Mec, t'as vraiment aucune limite..." },
                { type: "quote", tone: "danger", who: "HP", text: "C'est du vol de propriété intellectuelle ! C'est CRIMINEL !" },
                { type: "card", tone: "danger", icon: "💻", title: "Acer ricane", text: "« C'est juste du code. Faut pas être si possessif. »" }
            ]
        },
        {
            pageTitle: "Page 4 — Le Verdict ⚖️",
            blocks: [
                { type: "big", tone: "system", icon: "⚖️", text: "TRIBUNAL EXPRESS" },
                { type: "card", tone: "life", icon: "🔒", title: "Récupération forcée", text: "Gigabyte force la suppression de la copie volée des serveurs d'Acer. L'OS original est restauré chez Dell." },
                { type: "quote", tone: "life", who: "Dell", text: "MON BÉBÉ EST REVENU ! *câline son serveur*" },
                { type: "card", tone: "danger", icon: "📢", title: "Punition pour Acer", text: "Affichage public. Acer doit porter un badge \"VOLEUR D'OS\" pendant 30 cycles." },
                { type: "quote", tone: "neutral", who: "Acer", text: "...C'est vraiment nécessaire ?" },
                { type: "quote", tone: "danger", who: "Tout le monde", text: "OUI." },
                { type: "big", tone: "mystery", icon: "🏷️", text: "VOLEUR D'OS - 30 CYCLES" },
                { type: "divider", text: "JUSTICE RENDUE" }
            ]
        }
    ]
};
