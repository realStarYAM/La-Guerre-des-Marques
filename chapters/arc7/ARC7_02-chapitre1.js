export default {
    id: "ARC7_02-chapitre1",
    arc: "arc7",
    chapterNumber: 1,
    title: "Chapitre 1 — Packard Bell Contre-Attaque",
    subtitle: "Il n'a jamais pardonné...",

    pages: [
        {
            pageTitle: "Page 1 — Le Retour 👻",
            blocks: [
                { type: "big", tone: "danger", icon: "👻", text: "« JE SUIS DE RETOUR »" },
                { type: "card", tone: "mystery", icon: "💾", title: "Packard Bell", text: "Une silhouette émerge des serveurs abandonnés. C'est LUI." },
                { type: "quote", tone: "danger", who: "Packard Bell", text: "Vous m'avez oublié. TOUS. Et maintenant... c'est l'heure de payer.", sfx: "listenToMe" },
                { type: "quote", tone: "neutral", who: "Dell", text: "Oh non... pas lui..." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Accusations 📢",
            blocks: [
                { type: "banner", tone: "danger", title: "PROCÈS PUBLIC", subtitle: "Packard Bell accuse tout le monde", icons: ["🔵", "💚", "🖥️", "🐉"], labels: ["ASUS", "HP", "Dell", "MSI"] },
                { type: "quote", tone: "danger", who: "Packard Bell", text: "Vous m'avez laissé MOURIR ! J'étais une LÉGENDE !" },
                { type: "quote", tone: "neutral", who: "ASUS", text: "Mec, t'avais des specs de 1998 en 2010. C'est pas notre faute.", sfx: "tuesmalade" },
                { type: "quote", tone: "danger", who: "Packard Bell", text: "COMMENT OSES-TU ?!", shake: true }
            ]
        },
        {
            pageTitle: "Page 3 — L'Alliance Toxique ⚔️",
            blocks: [
                { type: "big", tone: "mystery", icon: "🤝", text: "ALLIANCE IMPROBABLE" },
                { type: "card", tone: "danger", icon: "💀", title: "Acer rejoint Packard Bell", text: "Acer, humilié depuis des ARCs, voit une opportunité." },
                { type: "quote", tone: "danger", who: "Acer", text: "Je t'aide à les détruire. En échange... je veux ASUS.", sfx: "acerOhNo" },
                { type: "quote", tone: "mystery", who: "Packard Bell", text: "Marché conclu. ASUS sera à toi." },
                {
                    type: "stats", tone: "danger", items: [
                        { icon: "👥", value: "2", label: "Alliés" },
                        { icon: "🎯", value: "4", label: "Cibles" },
                        { icon: "💢", value: "∞", label: "Rancune" }
                    ]
                }
            ]
        }
    ]
};
