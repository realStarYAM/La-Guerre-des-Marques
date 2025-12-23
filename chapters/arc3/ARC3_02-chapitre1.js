/**
 * ARC 3 — CHAPITRE 1
 * "Le Rituel des Ombres"
 * Ton: Sombre & Épique
 */

export default {
    id: "ARC3_02-chapitre1",
    arc: "arc3",
    chapterNumber: 1,
    title: "Chapitre 1 — Le Rituel des Ombres",
    subtitle: "Les Marques se rassemblent pour la dernière bataille.",

    pages: [
        {
            pageTitle: "Page 1 — L'Appel 📡",
            blocks: [
                { type: "card", tone: "mystery", icon: "📡", title: "Huawei émet un signal", text: "Un signal unique. Une fréquence que seules les Marques peuvent entendre. L'appel au rassemblement final." },
                { type: "big", tone: "danger", icon: "⚡", text: "« VENEZ À MOI, GUERRIERS. »" },
                { type: "quote", tone: "mystery", who: "Narrateur", text: "À travers les ruines du réseau, le signal résonne comme un cri de guerre..." }
            ]
        },
        {
            pageTitle: "Page 2 — Les Réponses 🛡️",
            blocks: [
                { type: "banner", tone: "life", title: "Ils répondent", subtitle: "Un par un, les survivants émergent des décombres", icons: ["🔵", "🐉", "💻", "🔔", "🖥️"], labels: ["ASUS", "MSI", "Acer", "PackardBell", "Gigabyte"] },
                { type: "card", tone: "danger", icon: "💀", title: "Certains manquent à l'appel", text: "HP. Dell. Lenovo. Absorbés par l'Entité. Perdus à jamais." },
                { type: "card", tone: "mystery", icon: "👤", title: "Un inconnu s'approche", text: "Une silhouette digitale. Une Marque oubliée. Effacée de l'histoire..." }
            ]
        },
        {
            pageTitle: "Page 3 — Le Revenant ⚰️",
            blocks: [
                { type: "big", tone: "mystery", icon: "⚰️", text: "« On m'a cru mort. »" },
                { type: "card", tone: "life", icon: "🔮", title: "COMPAQ", text: "La Marque ancestrale. Celle qui a existé avant même la Guerre. Son code est ancien. Pur. Incorruptible." },
                { type: "quote", tone: "mystery", who: "COMPAQ", text: "L'Entité ne peut me corrompre. Je suis un fossile vivant. Un vestige d'un temps où le code était sacré." },
                { type: "card", tone: "life", icon: "🌟", title: "L'espoir renaît", text: "COMPAQ détient la clé du Rituel. Une formule gravée dans ses circuits les plus profonds." }
            ]
        },
        {
            pageTitle: "Page 4 — Le Cercle ⭕",
            blocks: [
                { type: "big", tone: "danger", icon: "⭕", text: "Le Cercle des Marques se forme." },
                {
                    type: "chips", tone: "mystery", items: [
                        { icon: "📱", label: "Huawei", sublabel: "Catalyseur" },
                        { icon: "🔵", label: "ASUS", sublabel: "Intelligence" },
                        { icon: "🐉", label: "MSI", sublabel: "Puissance" },
                        { icon: "🔮", label: "COMPAQ", sublabel: "Ancienneté" },
                        { icon: "💻", label: "Acer", sublabel: "Résilience" }
                    ]
                },
                { type: "card", tone: "danger", icon: "🔗", title: "Le lien se crée", text: "Leurs énergies commencent à fusionner. La douleur est immense. Chaque Marque sent son identité se dissoudre." }
            ]
        },
        {
            pageTitle: "Page 5 — L'Interruption ⚠️",
            blocks: [
                { type: "big", tone: "danger", icon: "💥", text: "BOOM.", shake: true },
                { type: "card", tone: "danger", icon: "👁️", title: "L'Entité Primordiale frappe", text: "Elle a senti la menace. Elle ne laissera pas le Rituel s'accomplir." },
                { type: "quote", tone: "danger", who: "L'Entité", text: "VOUS PENSEZ POUVOIR ME VAINCRE ? JE SUIS LE NÉANT. JE SUIS L'ORIGINE ET LA FIN." },
                { type: "card", tone: "danger", icon: "⚠️", title: "FIN DU CHAPITRE 1", text: "Le Rituel est interrompu. Le Cercle est brisé. Les Marques sont dispersées dans le chaos." }
            ]
        }
    ]
};
