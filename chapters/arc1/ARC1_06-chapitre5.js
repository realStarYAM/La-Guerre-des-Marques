/**
 * ARC 1 — CHAPITRE 5 : HP fait pipi sur Acer
 * La vengeance continue avec HP !
 * 
 * Audio mapping:
 * - shock → choc initial
 * - tuesmaladeHp → Acer en colère ("comme HP m'a fait pipi")
 * - gigabyteMsiLaugh → rires MSI & Gigabyte
 */

export default {
    id: "ARC1_06-chapitre5",
    arc: "arc1",
    arcLabel: "ARC 1",
    chapterNumber: 5,
    title: "HP fait pipi sur Acer",
    subtitle: "L'histoire se répète. Encore pire.",
    theme: "arc1",

    pages: [
        // ========== PAGE 1 — LA RÉPÉTITION ==========
        {
            pageTitle: "Page 1 — La Répétition 💦",
            blocks: [
                {
                    type: "big",
                    tone: "mystery",
                    icon: "🔮",
                    text: "Quelques jours plus tard..."
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "💻",
                    title: "Acer tente de se remettre",
                    text: "Les circuits cicatrisent lentement. L'humiliation s'estompe..."
                },
                {
                    type: "card",
                    tone: "danger",
                    icon: "🔷",
                    title: "Mais HP s'approche...",
                    text: "Avec le même sourire qu'ASUS quelques jours avant.",
                    sfx: "shock"
                },
                {
                    type: "big",
                    tone: "danger",
                    icon: "💦",
                    text: "HP FAIT PIPI SUR ACER.",
                    shake: true
                },
                {
                    type: "banner",
                    tone: "danger",
                    title: "IMPOSSIBLE.",
                    subtitle: "Pas deux fois. PAS DEUX FOIS.",
                    icons: ["😱", "💀", "🤯"],
                    labels: ["Choc", "Mort", "Stupeur"]
                }
            ]
        },

        // ========== PAGE 2 — L'EXPLOSION TOTALE ==========
        {
            pageTitle: "Page 2 — L'Explosion Totale 🔥",
            blocks: [
                {
                    type: "big",
                    tone: "danger",
                    icon: "💥",
                    text: "T'ES MALADE OU QUOI ?!?!",
                    sfx: "tuesmaladeHp"
                },
                {
                    type: "quote",
                    tone: "danger",
                    icon: "💻",
                    who: "Acer",
                    text: "COMME HP M'A FAIT PIPI !!! ENCORE UN ?! C'EST UNE BLAGUE ?!"
                },
                {
                    type: "card",
                    tone: "danger",
                    icon: "🔥",
                    title: "Acer entre en RAGE MODE",
                    text: "Ses ventilateurs hurlent. Ses LEDs clignotent rouge sang."
                },
                {
                    type: "quote",
                    tone: "danger",
                    icon: "💻",
                    who: "Acer",
                    text: "D'ABORD ASUS, MAINTENANT HP ?! VOUS VOUS ÊTES TOUS DONNÉ LE MOT ?!"
                },
                {
                    type: "chips",
                    tone: "danger",
                    items: [
                        { icon: "🌡️", label: "Rage", sublabel: "OVER 9000" },
                        { icon: "💢", label: "Patience", sublabel: "ÉPUISÉE" },
                        { icon: "🤡", label: "Statut", sublabel: "CLOWN OFFICIEL" }
                    ]
                }
            ]
        },

        // ========== PAGE 3 — LE FESTIVAL DU RIRE ==========
        {
            pageTitle: "Page 3 — Le Festival du Rire 😂",
            blocks: [
                {
                    type: "big",
                    tone: "life",
                    icon: "🎪",
                    text: "MSI et Gigabyte sont par terre.",
                    sfx: "gigabyteMsiLaugh"
                },
                {
                    type: "quote",
                    tone: "life",
                    icon: "🐉",
                    who: "MSI",
                    text: "IHIHIHIHI HAHAHAHA ! C'EST LA MEILLEURE ! DEUX FOIS !"
                },
                {
                    type: "quote",
                    tone: "life",
                    icon: "🦅",
                    who: "Gigabyte",
                    text: "J'EN PLEURE ! MES CIRCUITS VONT EXPLOSER DE RIRE !"
                },
                {
                    type: "banner",
                    tone: "life",
                    title: "HP rejoint le club des trolls",
                    icons: ["🔵", "🔷"],
                    labels: ["ASUS", "HP"]
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "🔷",
                    title: "HP sourit fièrement",
                    text: "\"Si ASUS peut le faire, moi aussi.\""
                }
            ]
        },

        // ========== PAGE 4 — LA DÉPRESSION NUMÉRIQUE ==========
        {
            pageTitle: "Page 4 — La Dépression Numérique 😭",
            blocks: [
                {
                    type: "big",
                    tone: "danger",
                    icon: "😭",
                    text: "Oh no... Oh no... Oh no no no no no..."
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "💻",
                    title: "Acer ne bouge plus",
                    text: "Ses écrans affichent un bleu de la mort... de l'âme."
                },
                {
                    type: "quote",
                    tone: "danger",
                    icon: "💻",
                    who: "Acer",
                    text: "Je... je vais me désinstaller de ce monde..."
                },
                {
                    type: "card",
                    tone: "system",
                    icon: "🎖️",
                    title: "Dell observe la scène",
                    text: "C'est presque trop. Presque."
                },
                {
                    type: "quote",
                    tone: "mystery",
                    icon: "🟢",
                    who: "Lenovo",
                    text: "...C'est qui le prochain ?"
                }
            ]
        },

        // ========== PAGE 5 — FIN DU CHAPITRE ==========
        {
            pageTitle: "Page 5 — Fin du Chapitre 5 🌀",
            blocks: [
                {
                    type: "big",
                    tone: "mystery",
                    icon: "🎭",
                    text: "Acer est devenu une légende."
                },
                {
                    type: "card",
                    tone: "mystery",
                    icon: "📖",
                    title: "Pas la légende qu'il voulait être",
                    text: "Mais la légende que le réseau méritait."
                },
                {
                    type: "quote",
                    tone: "mystery",
                    who: "Narrateur",
                    text: "Dans l'histoire des Marques, certains sont des héros. D'autres sont des victimes. Acer est devenu... un mème."
                },
                {
                    type: "card",
                    tone: "danger",
                    icon: "⚠️",
                    title: "FIN DU CHAPITRE 5",
                    text: "La guerre continue. Les humiliations aussi."
                },
                {
                    type: "stats",
                    tone: "danger",
                    items: [
                        { icon: "💧", value: "2", label: "Pipis total" },
                        { icon: "😂", value: "♾️", label: "Rires" },
                        { icon: "💔", value: "-100", label: "Dignité" },
                        { icon: "🏆", value: "#1", label: "Mème" }
                    ]
                }
            ]
        }
    ]
};
