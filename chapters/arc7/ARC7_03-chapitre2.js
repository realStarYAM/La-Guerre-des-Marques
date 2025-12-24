export default {
    id: "ARC7_03-chapitre2",
    arc: "arc7",
    chapterNumber: 2,
    title: "Chapitre 2 — L'Attaque Surprise",
    subtitle: "Personne ne s'y attendait...",

    pages: [
        {
            pageTitle: "Page 1 — L'Embuscade 💥",
            blocks: [
                { type: "big", tone: "danger", icon: "💥", text: "BOOM", shake: true, sfx: "shock" },
                { type: "card", tone: "danger", icon: "🔥", title: "Serveurs HP en feu", text: "L'attaque commence. HP est la première victime." },
                { type: "quote", tone: "danger", who: "HP", text: "MES SERVEURS ! QUI A FAIT ÇA ?!", sfx: "noGodPleaseNo" },
                { type: "quote", tone: "mystery", who: "Packard Bell", text: "*ricane dans l'ombre*" }
            ]
        },
        {
            pageTitle: "Page 2 — Chaos Général 🔥",
            blocks: [
                { type: "banner", tone: "danger", title: "ALERTE MAXIMALE", subtitle: "Tout le monde panique", icons: ["🔴", "🔴", "🔴", "🔴"], labels: ["CRISE", "CRISE", "CRISE", "CRISE"] },
                { type: "quote", tone: "danger", who: "Dell", text: "C'est une attaque coordonnée ! ON EST TOUS VISÉS !" },
                { type: "quote", tone: "danger", who: "Gigabyte", text: "Mon firewall tient mais POUR COMBIEN DE TEMPS ?!" },
                { type: "quote", tone: "neutral", who: "MSI", text: "Qui a INVITÉ Packard Bell ?! Il était MORT !", sfx: "gigabyteMsiLaugh" }
            ]
        },
        {
            pageTitle: "Page 3 — La Trahison 🗡️",
            blocks: [
                { type: "big", tone: "danger", icon: "🗡️", text: "COUP DE POIGNARD" },
                { type: "card", tone: "danger", icon: "😈", title: "Acer frappe", text: "Pendant le chaos, Acer attaque ASUS par derrière." },
                { type: "quote", tone: "danger", who: "Acer", text: "SURPRISE, ENFOIRÉ ! Tu te souviens du pipi ? MOI OUI.", sfx: "acerRage" },
                { type: "quote", tone: "danger", who: "ASUS", text: "ACER ?! TRAÎTRE !", shake: true },
                { type: "quote", tone: "neutral", who: "HP", text: "...Wow. C'est vraiment le chaos total." }
            ]
        }
    ]
};
