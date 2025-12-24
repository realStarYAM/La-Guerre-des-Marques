export default {
    id: "ARC7_01-prologue",
    arc: "arc7",
    chapterNumber: 0,
    title: "Prologue — La Tempête Arrive",
    subtitle: "Le calme de l'ARC 7 était une illusion...",

    pages: [
        {
            pageTitle: "Page 1 — L'Alerte 🚨",
            blocks: [
                { type: "big", tone: "danger", icon: "⚠️", text: "ANOMALIE DÉTECTÉE" },
                { type: "card", tone: "mystery", icon: "📡", title: "Signal inconnu", text: "Les serveurs captent une fréquence jamais vue. Quelque chose approche." },
                { type: "quote", tone: "neutral", who: "Gigabyte", text: "C'est quoi ce truc ? Mon radar est en PLS." },
                { type: "quote", tone: "danger", who: "ASUS", text: "...J'ai un mauvais pressentiment.", sfx: "shock" }
            ]
        },
        {
            pageTitle: "Page 2 — Le Réveil 💀",
            blocks: [
                { type: "big", tone: "danger", icon: "💀", text: "ILS ARRIVENT" },
                { type: "card", tone: "danger", icon: "👻", title: "Les Anciens", text: "Des marques oubliées. Bannies. Mortes. Elles reviennent." },
                { type: "quote", tone: "mystery", who: "HP", text: "Attendez... c'est pas possible. ON LES A ENTERRÉES !" },
                { type: "quote", tone: "danger", who: "MSI", text: "Bah apparemment elles ont pas aimé la tombe.", sfx: "bruh" },
                { type: "divider", text: "LA GUERRE REPREND" }
            ]
        }
    ]
};
