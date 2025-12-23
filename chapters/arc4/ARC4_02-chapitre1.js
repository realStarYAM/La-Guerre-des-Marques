export default {
    id: "ARC4_02-chapitre1",
    arc: "arc4",
    chapterNumber: 1,
    title: "Chapitre 1 — UAC : Demande d'Autorisation",
    subtitle: "Le système demande la permission. Mais qui contrôle vraiment ?",

    pages: [
        {
            pageTitle: "Page 1 — Contrôle d'Accès Utilisateur 🛡️",
            blocks: [
                { type: "big", tone: "system", icon: "🛡️", text: "UAC : User Account Control" },
                { type: "card", tone: "danger", icon: "⚠️", title: "Alerte de sécurité", text: "« Un programme non identifié tente d'accéder aux privilèges administrateur. Autoriser ? »" },
                { type: "quote", tone: "system", who: "HP", text: "Je clique sur 'Oui' machinalement... mais l'écran freeze." }
            ]
        },
        {
            pageTitle: "Page 2 — Le Freeze Élégant ❄️",
            blocks: [
                { type: "card", tone: "mystery", icon: "❄️", title: "Écran gelé", text: "Pas un crash brutal. Un freeze... magnifique. Les fenêtres Aero se figent dans une danse de verre brisé." },
                { type: "big", tone: "danger", icon: "⏸️", text: "Temps : SUSPENDU", shake: true },
                { type: "quote", tone: "danger", who: "ASUS", text: "C'est... artistique ? On dirait un bug de sculpture numérique." }
            ]
        },
        {
            pageTitle: "Page 3 — L'Entité Administrative 👤",
            blocks: [
                { type: "card", tone: "mystery", icon: "👤", title: "Silhouette UAC", text: "Une figure translucide émerge de la fenêtre de contrôle. Ni virus, ni défenseur. Juste... L'ADMIN." },
                { type: "quote", tone: "mystery", who: "L'Admin", text: "Vous avez demandé l'autorisation. Je vous l'accorde. Mais tout a un prix." },
                {
                    type: "chips", tone: "danger", items: [
                        { icon: "⚠️", label: "Privilèges : MAXIMUM" },
                        { icon: "🔓", label: "Sécurité : DÉSACTIVÉE" },
                        { icon: "👁️", label: "Surveillance : TOTALE" }
                    ]
                }
            ]
        },
        {
            pageTitle: "Page 4 — Troll : Le Bouton 'Annuler' 🎭",
            blocks: [
                { type: "card", tone: "neutral", icon: "🖱️", title: "Dell tente d'annuler", text: "« Attendez, je clique sur ANNULER ! »" },
                { type: "big", tone: "danger", icon: "💥", text: "Le bouton explose.", shake: true },
                { type: "quote", tone: "mystery", who: "L'Admin", text: "Il n'y a pas de retour en arrière. Seulement en avant. Toujours en avant." },
                { type: "card", tone: "system", icon: "😅", title: "Dell recule lentement", text: "« Ok ok, message reçu. On garde les privilèges. »" }
            ]
        },
        {
            pageTitle: "Page 5 — Nouvelle Réalité 🌐",
            blocks: [
                { type: "banner", tone: "life", title: "Privilèges Administrateur Accordés", subtitle: "Les Marques peuvent maintenant modifier la réalité elle-même", icons: ["🔧", "🎨", "⚡"], labels: ["Modifier", "Créer", "Détruire"] },
                { type: "quote", tone: "system", who: "MSI", text: "On a les droits admin sur... TOUT ? C'est dangereux. Mais excitant." },
                { type: "big", tone: "mystery", icon: "🚪", text: "Une porte s'ouvre. Direction : le Registre Système." },
                { type: "divider", text: "SYSTÈME MODIFIÉ" }
            ]
        }
    ]
};
