export default {
    id: "ARC1_02-chapitre1",
    arc: "arc1",
    arcLabel: "ARC 1",
    chapterNumber: 1,
    title: "Première Frappe",
    subtitle: "L'attaque vient de nulle part. Et de partout.",
    theme: "arc1",
    pages: [
        {
            pageTitle: "Page 1 — L'Attaque ⚔️",
            blocks: [
                { type: "big", tone: "danger", icon: "💥", text: "L'attaque vient de nulle part." },
                { type: "big", tone: "danger", icon: "🌐", text: "Et de partout." },
                { type: "card", tone: "system", icon: "🔵", title: "ASUS déclenche ses défenses", text: "Trop tard. MSI est déjà en mouvement." }
            ]
        },
        {
            pageTitle: "Page 2 — Le Dragon Rouge 🐉",
            blocks: [
                { type: "card", tone: "danger", icon: "🐉", title: "MSI surgit des données", text: "Le dragon rouge surgit des données. Ses griffes numériques déchirent les pare-feux." },
                { type: "big", tone: "danger", icon: "🩸", text: "Le premier sang est versé." },
                { type: "card", tone: "system", icon: "🔷", title: "HP réplique", text: "Ses serveurs envoient une vague de contre-mesures. Précision chirurgicale." }
            ]
        },
        {
            pageTitle: "Page 3 — La Bataille 🔥",
            blocks: [
                { type: "card", tone: "life", icon: "🟠", title: "Gigabyte ne recule pas", text: "Elle absorbe les coups. Elle en redemande." },
                { type: "banner", tone: "danger", title: "Les réseaux s'embrasent", icons: ["🔴", "🔵", "🟡"], labels: ["Chaque nœud", "devient un", "champ de bataille"] },
                { type: "card", tone: "mystery", icon: "🟢", title: "Lenovo frappe par le flanc", text: "Silencieuse. Mortelle. Ses drones numériques s'infiltrent." }
            ]
        },
        {
            pageTitle: "Page 4 — L'Alliance ⚡",
            blocks: [
                { type: "card", tone: "system", icon: "🔵", title: "ASUS concentre son énergie", text: "Les circuits surchauffent. La riposte sera dévastatrice." },
                { type: "banner", tone: "danger", title: "MSI et Gigabyte avancent ensemble", icons: ["🐉", "🦅"], labels: ["Le Dragon", "L'Aigle"] },
                { type: "quote", tone: "danger", who: "Narrateur", text: "L'alliance du dragon et de l'aigle. Rien ne peut les arrêter." }
            ]
        },
        {
            pageTitle: "Page 5 — Le Chaos 💀",
            blocks: [
                { type: "card", tone: "system", icon: "🔷", title: "HP se replie", text: "Recalcule. Elle reviendra plus forte." },
                { type: "banner", tone: "mystery", title: "Les explosions de données", icons: ["🔴", "🔵", "🟡"], labels: ["Rouge", "Bleu", "Or"] },
                { type: "big", tone: "life", icon: "✨", text: "C'est magnifique." },
                { type: "big", tone: "danger", icon: "💀", text: "C'est terrible." }
            ]
        },
        {
            pageTitle: "Page 6 — FIN ⚔️",
            blocks: [
                { type: "big", tone: "danger", icon: "⚔️", text: "La guerre a officiellement commencé." },
                { type: "card", tone: "mystery", icon: "🌑", title: "FIN DU CHAPITRE 1", text: "Le champ de bataille numérique fume. Les premiers coups sont portés. Aucun retour en arrière." }
            ]
        }
    ]
};
