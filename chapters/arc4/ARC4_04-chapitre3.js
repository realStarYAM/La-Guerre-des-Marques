export default {
    id: "ARC4_04-chapitre3",
    arc: "arc4",
    chapterNumber: 3,
    title: "Chapitre 3 — Le Registre Corrompu",
    subtitle: "Regedit.exe — Manipulation interdite...",

    pages: [
        {
            pageTitle: "Page 1 — REGEDIT.EXE 🔧",
            blocks: [
                { type: "big", tone: "danger", icon: "🔧", text: "ÉDITEUR DU REGISTRE" },
                { type: "card", tone: "system", icon: "⚠️", title: "Avertissement", text: "« Attention : La modification du Registre peut endommager votre système. Procéder avec précaution. »" },
                { type: "quote", tone: "system", who: "ASUS", text: "On a les droits admin maintenant. On peut modifier TOUT le Registre. Tous les paramètres cachés..." }
            ]
        },
        {
            pageTitle: "Page 2 — HKEY_LOCAL_MACHINE 🗝️",
            blocks: [
                { type: "card", tone: "mystery", icon: "📂", title: "Arborescence infinie", text: "Les Marques plongent dans les clés. HKEY_LOCAL_MACHINE. SOFTWARE. SYSTEM. SECURITY." },
                {
                    type: "chips", tone: "system", items: [
                        { icon: "🔑", label: "HKLM", sublabel: "Machine Locale" },
                        { icon: "👤", label: "HKCU", sublabel: "Utilisateur Actuel" },
                        { icon: "🌐", label: "HKCR", sublabel: "Classes Root" }
                    ]
                },
                { type: "big", tone: "mystery", icon: "🌀", text: "Mais une clé brille étrangement..." }
            ]
        },
        {
            pageTitle: "Page 3 — La Clé Interdite 🚫",
            blocks: [
                { type: "card", tone: "danger", icon: "🔐", title: "HKEY_FORBIDDEN_REALITY", text: "Une clé qui n'existe pas dans Windows normal. Elle pulse. Elle respire.", shake: true },
                { type: "quote", tone: "danger", who: "Dell", text: "C'est quoi CE truc ?! Cette clé n'est pas documentée !" },
                { type: "card", tone: "mystery", icon: "👁️", title: "Valeur : ???", text: "Type : REG_DIMENSIONAL_SZ. Données : [CORRUPTION DETECTED]" }
            ]
        },
        {
            pageTitle: "Page 4 — Troll : Modification Accidentelle 🎭",
            blocks: [
                { type: "card", tone: "neutral", icon: "🖱️", title: "Lenovo double-clique par erreur", text: "« Oups... J'ai appuyé sans faire exprès... »" },
                { type: "big", tone: "danger", icon: "💥", text: "BSOD ÉLÉGANT", shake: true },
                { type: "card", tone: "system", icon: "💙", title: "Écran Bleu de la Mort", text: "Mais version... stylée ? Police Segoe UI. Dégradé bleu. QR code esthétique. Un BSOD de designer." },
                { type: "quote", tone: "neutral", who: "Lenovo", text: "Même en crashant, ce système a du STYLE !" }
            ]
        },
        {
            pageTitle: "Page 5 — Restauration du Système ⏮️",
            blocks: [
                { type: "card", tone: "life", icon: "⏮️", title: "Point de restauration", text: "Heureusement, ASUS avait créé un point de restauration avant. Le système revient en arrière." },
                { type: "banner", tone: "system", title: "Restauration réussie", subtitle: "État du système restauré à : 23h42", icons: ["✅"], labels: ["System Restored"] },
                { type: "quote", tone: "mystery", who: "L'Admin", text: "Vous avez vu l'autre côté. Vous ne pourrez jamais l'oublier." },
                { type: "big", tone: "danger", icon: "🧠", text: "La mémoire de la clé interdite reste gravée..." },
                { type: "divider", text: "REGISTRE STABLE" }
            ]
        }
    ]
};
