export default {
    id: "ARC4_01-prologue",
    arc: "arc4",
    chapterNumber: 0,
    title: "Prologue — Aero Restart",
    subtitle: "Dans les fragments du temps numérique, une nouvelle ère s'illumine...",

    pages: [
        {
            pageTitle: "Page 1 — Initialisation Système 💿",
            blocks: [
                { type: "big", tone: "system", icon: "💿", text: "WINDOWS VISTA BOOT SEQUENCE" },
                { type: "card", tone: "mystery", icon: "🌊", title: "Aero Glass s'active", text: "Des particules de lumière turquoise flottent dans le vide. L'interface transparente se reconstruit, pixel par pixel." },
                { type: "quote", tone: "system", who: "Système", text: "Bienvenue. Reconstruction de l'index en cours..." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Revenants 👻",
            blocks: [
                { type: "banner", tone: "life", title: "Détection de périphériques", icons: ["💻", "🔵", "🐉", "💚", "🔴"], labels: ["Acer", "ASUS", "MSI", "HP", "Dell"] },
                { type: "card", tone: "system", icon: "✨", title: "Réinitialisation complète", text: "Après OMNIBRAND, l'univers numérique a reset. Les Marques réapparaissent, vierges de toute mémoire." },
                { type: "big", tone: "mystery", icon: "❓", text: "Mais quelque chose a changé..." }
            ]
        },
        {
            pageTitle: "Page 3 — Notification Système 🔔",
            blocks: [
                { type: "card", tone: "danger", icon: "🔔", title: "NOTIFICATION WINDOWS", text: "« Une mise à jour critique est disponible. Installation recommandée. »", shake: true },
                { type: "quote", tone: "danger", who: "Acer", text: "Attendez... Cette notification... Elle n'est pas normale. Elle pulse. Elle VIT." },
                { type: "card", tone: "mystery", icon: "👁️", title: "L'Observateur", text: "Une présence invisible surveille chaque processus. Chaque thread. Chaque bit." }
            ]
        },
        {
            pageTitle: "Page 4 — Gadgets Desktop 📊",
            blocks: [
                {
                    type: "stats", tone: "system", items: [
                        { icon: "🌡️", value: "37°C", label: "Température CPU" },
                        { icon: "⚡", value: "94%", label: "Performances" },
                        { icon: "🔋", value: "∞", label: "Énergie" },
                        { icon: "⚠️", value: "???", label: "Erreurs" }
                    ]
                },
                { type: "card", tone: "life", icon: "📊", title: "Les gadgets s'affichent", text: "ASUS active ses widgets transparents. Horloge, météo, CPU... Tout semble normal." },
                { type: "big", tone: "danger", icon: "❌", text: "Jusqu'à ce que le compteur d'erreurs affiche : ∞" }
            ]
        },
        {
            pageTitle: "Page 5 — La Prophétie Aero 🌌",
            blocks: [
                { type: "quote", tone: "mystery", who: "Windows Defender (voix mystérieuse)", text: "Menace détectée. Mais ce n'est pas un virus. C'est... une ÉVOLUTION." },
                { type: "card", tone: "life", icon: "🎨", title: "Aurora Theme", text: "Le ciel numérique change. Vert émeraude. Bleu cyan. Les couleurs de l'aube Vista." },
                { type: "big", tone: "mystery", icon: "🔮", text: "L'ARC 4 commence : L'ère de l'Aero Dream." },
                { type: "divider", text: "LOADING..." }
            ]
        }
    ]
};
