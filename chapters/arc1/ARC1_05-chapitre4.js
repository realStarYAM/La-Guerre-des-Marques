/**
 * ARC 1 — CHAPITRE 4 : ASUS fait pipi sur Acer
 * Scène humoristique avec SFX synchronisés par block
 * 
 * Audio mapping:
 * - shock → choc initial
 * - tuesmalade → Acer en colère
 * - gigabyteMsiLaugh → rires MSI & Gigabyte
 */

export default {
    id: "ARC1_05-chapitre4",
    arc: "arc1",
    arcLabel: "ARC 1",
    chapterNumber: 4,
    title: "ASUS fait pipi sur Acer",
    subtitle: "L'humiliation ultime. Le chaos absolu.",
    theme: "arc1",

    pages: [
        // ========== PAGE 1 — L'INCIDENT ==========
        {
            pageTitle: "Page 1 — L'Incident 💦",
            blocks: [
                {
                    type: "big",
                    tone: "danger",
                    icon: "😱",
                    text: "Personne n'était prêt pour ça.",
                    sfx: "shock"
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "🔵",
                    title: "ASUS s'approche d'Acer",
                    text: "Lentement. Calculatriquement. Avec un sourire inquiétant."
                },
                {
                    type: "card",
                    tone: "danger",
                    icon: "💦",
                    title: "Et là...",
                    text: "ASUS fait pipi sur Acer. Devant tout le monde.",
                    shake: true
                },
                {
                    type: "banner",
                    tone: "danger",
                    title: "CHOC TOTAL",
                    subtitle: "Le réseau entier se fige",
                    icons: ["😱", "🤯", "💀"],
                    labels: ["HP", "Dell", "Lenovo"]
                }
            ]
        },

        // ========== PAGE 2 — LA RAGE D'ACER ==========
        {
            pageTitle: "Page 2 — La Rage d'Acer 🔥",
            blocks: [
                {
                    type: "big",
                    tone: "danger",
                    icon: "🤬",
                    text: "T'ES MALADE OU QUOI ?!",
                    sfx: "tuesmalade"
                },
                {
                    type: "quote",
                    tone: "danger",
                    icon: "💻",
                    who: "Acer",
                    text: "COMME ASUS M'A FAIT PIPI DESSUS ! DEVANT TOUT LE MONDE !"
                },
                {
                    type: "card",
                    tone: "danger",
                    icon: "🔥",
                    title: "Les circuits d'Acer surchauffent",
                    text: "La colère numérique atteint des niveaux critiques."
                },
                {
                    type: "chips",
                    tone: "danger",
                    items: [
                        { icon: "🌡️", label: "Température", sublabel: "CRITIQUE" },
                        { icon: "💢", label: "Rage", sublabel: "MAXIMALE" },
                        { icon: "😤", label: "Dignité", sublabel: "DÉTRUITE" }
                    ]
                }
            ]
        },

        // ========== PAGE 3 — LES RIRES ==========
        {
            pageTitle: "Page 3 — Les Rires 😂",
            blocks: [
                {
                    type: "banner",
                    tone: "life",
                    title: "MSI & Gigabyte explosent de rire",
                    icons: ["🐉", "🦅"],
                    labels: ["MSI", "Gigabyte"],
                    sfx: "gigabyteMsiLaugh"
                },
                {
                    type: "quote",
                    tone: "life",
                    icon: "🐉",
                    who: "MSI",
                    text: "IHIHIHIHI HAHAHAHA ! J'EN PEUX PLUS !"
                },
                {
                    type: "quote",
                    tone: "life",
                    icon: "🦅",
                    who: "Gigabyte",
                    text: "IL LUI A VRAIMENT FAIT PIPI DESSUS ! MDRRR !"
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "🔵",
                    title: "ASUS reste stoïque",
                    text: "Un léger sourire. Mission accomplie."
                }
            ]
        },

        // ========== PAGE 4 — LE DÉSESPOIR ==========
        {
            pageTitle: "Page 4 — Le Désespoir 💀",
            blocks: [
                {
                    type: "big",
                    tone: "danger",
                    icon: "😭",
                    text: "Oh no... Oh no... Oh no no no no no...",
                    sfx: "acerOhNo"
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "💻",
                    title: "Acer s'effondre",
                    text: "Son ego numérique ne s'en remettra jamais."
                },
                {
                    type: "quote",
                    tone: "danger",
                    icon: "💻",
                    who: "Acer",
                    text: "Pourquoi moi... Pourquoi toujours moi..."
                },
                {
                    type: "card",
                    tone: "system",
                    icon: "👁️",
                    title: "Les autres marques regardent",
                    text: "Certaines avec pitié. D'autres avec amusement."
                }
            ]
        },

        // ========== PAGE 5 — FIN DU CHAPITRE ==========
        {
            pageTitle: "Page 5 — Fin du Chapitre 4 🌀",
            blocks: [
                {
                    type: "big",
                    tone: "mystery",
                    icon: "🌀",
                    text: "L'humiliation est complète."
                },
                {
                    type: "quote",
                    tone: "mystery",
                    who: "Narrateur",
                    text: "Acer porte désormais une cicatrice invisible. Celle de l'humiliation publique."
                },
                {
                    type: "card",
                    tone: "danger",
                    icon: "⚠️",
                    title: "FIN DU CHAPITRE 4",
                    text: "Mais ce n'était que le début. Car quelqu'un d'autre allait bientôt suivre l'exemple d'ASUS..."
                },
                {
                    type: "stats",
                    tone: "danger",
                    items: [
                        { icon: "💧", value: "1", label: "Pipi" },
                        { icon: "😂", value: "∞", label: "Rires" },
                        { icon: "💔", value: "0", label: "Dignité" }
                    ]
                }
            ]
        }
    ]
};
