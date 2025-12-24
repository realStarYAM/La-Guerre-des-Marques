/**
 * ⚔️ WAR — Guerre des Marques
 * Mini-jeu de combat entre marques tech
 * 
 * Gameplay simple mais fun avec attaques, défense et super attaque
 */

// ==========================================
// 🎮 CONFIGURATION DU JEU
// ==========================================

const CONFIG = {
    maxHP: 100,
    attackDamage: { min: 10, max: 25 },
    superDamage: { min: 30, max: 50 },
    defendReduction: 0.5,  // Réduit les dégâts de 50%
    superCooldown: 3,      // Tours avant réutilisation
    enemyAttackDelay: 1000 // ms avant attaque ennemie
};

// Liste des marques avec leurs émojis
const BRANDS = {
    'Acer': '🖥️',
    'Asus': '💻',
    'HP': '🖨️',
    'Dell': '📺',
    'Lenovo': '🔴',
    'MSI': '🐉',
    'Apple': '🍎',
    'Samsung': '🌌',
    'Razer': '🐍',
    'Microsoft': '🪟'
};

// Phrases d'attaque amusantes
const ATTACK_PHRASES = [
    "lance un benchmark sauvage !",
    "envoie un driver corrompu !",
    "déploie un BSOD critique !",
    "balance son ventilateur à fond !",
    "exécute un overclock mortel !",
    "lance une mise à jour forcée !",
    "spam des notifications !",
    "active le mode turbo !"
];

// Phrases de défense
const DEFEND_PHRASES = [
    "active son pare-feu !",
    "déploie un bouclier antivirus !",
    "passe en mode économie d'énergie !",
    "lance un scan complet !",
    "active le mode sans échec !"
];

// Phrases de super attaque
const SUPER_PHRASES = [
    "DÉCHAÎNE SA PUISSANCE ULTIME !!!",
    "ACTIVE LE MODE DESTRUCTION !!!",
    "LANCE L'ATTAQUE FATALE !!!",
    "EXÉCUTE LE COMBO LÉGENDAIRE !!!",
    "INVOQUE LA TEMPÊTE DE FPS !!!"
];

// ==========================================
// 🎯 ÉTAT DU JEU
// ==========================================

const GameState = {
    playerBrand: null,
    enemyBrand: null,
    playerHP: CONFIG.maxHP,
    enemyHP: CONFIG.maxHP,
    playerDefending: false,
    superCooldown: 0,
    isPlayerTurn: true,
    gameOver: false,
    totalDamageDealt: 0,
    totalDamageTaken: 0
};

// ==========================================
// 🖥️ ÉLÉMENTS DOM
// ==========================================

const DOM = {};

function initDOM() {
    // Écrans
    DOM.setupScreen = document.getElementById('setup-screen');
    DOM.battleScreen = document.getElementById('battle-screen');
    DOM.endScreen = document.getElementById('end-screen');

    // Setup
    DOM.brandSelect = document.getElementById('brand-select');
    DOM.startButton = document.getElementById('start-button');

    // Combat
    DOM.playerAvatar = document.getElementById('player-avatar');
    DOM.enemyAvatar = document.getElementById('enemy-avatar');
    DOM.playerName = document.getElementById('player-name');
    DOM.enemyName = document.getElementById('enemy-name');
    DOM.playerHpBar = document.getElementById('player-hp-bar');
    DOM.enemyHpBar = document.getElementById('enemy-hp-bar');
    DOM.playerHpText = document.getElementById('player-hp-text');
    DOM.enemyHpText = document.getElementById('enemy-hp-text');
    DOM.battleLog = document.getElementById('battle-log');
    DOM.actionButtons = document.getElementById('action-buttons');
    DOM.btnAttack = document.getElementById('btn-attack');
    DOM.btnDefend = document.getElementById('btn-defend');
    DOM.btnSuper = document.getElementById('btn-super');
    DOM.cooldownBadge = document.getElementById('cooldown-badge');
    DOM.turnIndicator = document.getElementById('turn-indicator');

    // Galerie
    DOM.brandGallery = document.getElementById('brand-gallery');
    DOM.resetButton = document.getElementById('reset-selection');
    DOM.statusP1 = document.getElementById('status-p1');
    DOM.statusP2 = document.getElementById('status-p2');

    // Fin
    DOM.endCard = document.getElementById('end-card');
    DOM.endIcon = document.getElementById('end-icon');
    DOM.endTitle = document.getElementById('end-title');
    DOM.endDescription = document.getElementById('end-description');
    DOM.damageDealt = document.getElementById('damage-dealt');
    DOM.damageTaken = document.getElementById('damage-taken');
    DOM.replayButton = document.getElementById('replay-button');
    DOM.returnButton = document.getElementById('return-button');

    // Particules
    DOM.particles = document.getElementById('particles');
}

// ==========================================
// ✨ PARTICULES
// ==========================================

function createParticles() {
    const symbols = ['⚔️', '💥', '🔥', '⚡', '💀', '☠️', '🎮', '💣'];
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 12 + 's';
        particle.style.animationDuration = (10 + Math.random() * 8) + 's';
        DOM.particles.appendChild(particle);
    }
}

// ==========================================
// 🔧 FONCTIONS UTILITAIRES
// ==========================================

/**
 * Génère un nombre aléatoire entre min et max (inclus)
 */
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Retourne un élément aléatoire d'un tableau
 */
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Choisit un ennemi aléatoire différent du joueur
 */
function getRandomEnemy(playerBrand) {
    const enemies = Object.keys(BRANDS).filter(b => b !== playerBrand);
    return enemies[Math.floor(Math.random() * enemies.length)];
}

// ==========================================
// 📊 MISE À JOUR UI
// ==========================================

function updateHP() {
    // Barres HP
    const playerPercent = Math.max(0, (GameState.playerHP / CONFIG.maxHP) * 100);
    const enemyPercent = Math.max(0, (GameState.enemyHP / CONFIG.maxHP) * 100);

    DOM.playerHpBar.style.width = playerPercent + '%';
    DOM.enemyHpBar.style.width = enemyPercent + '%';

    // Textes HP
    DOM.playerHpText.textContent = `${Math.max(0, GameState.playerHP)}/${CONFIG.maxHP}`;
    DOM.enemyHpText.textContent = `${Math.max(0, GameState.enemyHP)}/${CONFIG.maxHP}`;

    // Couleurs selon HP restant
    if (playerPercent < 25) {
        DOM.playerHpBar.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
    } else if (playerPercent < 50) {
        DOM.playerHpBar.style.background = 'linear-gradient(90deg, #fbbf24, #f59e0b)';
    }

    if (enemyPercent < 25) {
        DOM.enemyHpBar.style.background = 'linear-gradient(90deg, #22c55e, #16a34a)';
    }
}

function updateCooldown() {
    if (GameState.superCooldown > 0) {
        DOM.btnSuper.disabled = true;
        DOM.cooldownBadge.classList.remove('hidden');
        DOM.cooldownBadge.textContent = GameState.superCooldown;
    } else {
        DOM.btnSuper.disabled = false;
        DOM.cooldownBadge.classList.add('hidden');
    }
}

function updateTurnIndicator(isPlayer) {
    if (isPlayer) {
        DOM.turnIndicator.innerHTML = '<span>⚔️ Ton tour !</span>';
        DOM.turnIndicator.style.borderColor = 'rgba(74, 222, 128, 0.5)';
        DOM.turnIndicator.style.background = 'rgba(74, 222, 128, 0.1)';
        DOM.turnIndicator.style.color = '#4ade80';
    } else {
        DOM.turnIndicator.innerHTML = '<span>👊 Tour ennemi...</span>';
        DOM.turnIndicator.style.borderColor = 'rgba(239, 68, 68, 0.5)';
        DOM.turnIndicator.style.background = 'rgba(239, 68, 68, 0.1)';
        DOM.turnIndicator.style.color = '#ef4444';
    }
}

function setActionsEnabled(enabled) {
    DOM.btnAttack.disabled = !enabled;
    DOM.btnDefend.disabled = !enabled;
    if (enabled && GameState.superCooldown > 0) {
        DOM.btnSuper.disabled = true;
    } else {
        DOM.btnSuper.disabled = !enabled;
    }
}

// ==========================================
// 📝 LOG DES ÉVÉNEMENTS
// ==========================================

function addLog(message, type = 'system') {
    const entry = document.createElement('p');
    entry.className = `log-entry ${type}`;
    entry.innerHTML = message;
    DOM.battleLog.appendChild(entry);
    DOM.battleLog.scrollTop = DOM.battleLog.scrollHeight;
}

function clearLog() {
    DOM.battleLog.innerHTML = '';
}

// ==========================================
// ⚔️ ACTIONS DE COMBAT
// ==========================================

/**
 * Attaque normale du joueur
 */
function playerAttack() {
    if (!GameState.isPlayerTurn || GameState.gameOver) return;

    const damage = randomBetween(CONFIG.attackDamage.min, CONFIG.attackDamage.max);
    GameState.enemyHP -= damage;
    GameState.totalDamageDealt += damage;

    // Animation
    document.querySelector('.fighter-panel.enemy').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.fighter-panel.enemy').classList.remove('shake');
    }, 500);

    // Log
    const phrase = randomFrom(ATTACK_PHRASES);
    addLog(`⚔️ <strong>${GameState.playerBrand}</strong> ${phrase} <span style="color:#ef4444">-${damage} HP</span>`, 'player');

    updateHP();
    checkGameOver();

    if (!GameState.gameOver) {
        endPlayerTurn();
    }
}

/**
 * Défense du joueur
 */
function playerDefend() {
    if (!GameState.isPlayerTurn || GameState.gameOver) return;

    GameState.playerDefending = true;

    const phrase = randomFrom(DEFEND_PHRASES);
    addLog(`🛡️ <strong>${GameState.playerBrand}</strong> ${phrase} <span style="color:#3b82f6">(Dégâts -50%)</span>`, 'player');

    endPlayerTurn();
}

/**
 * Super attaque du joueur
 */
function playerSuper() {
    if (!GameState.isPlayerTurn || GameState.gameOver || GameState.superCooldown > 0) return;

    const damage = randomBetween(CONFIG.superDamage.min, CONFIG.superDamage.max);
    GameState.enemyHP -= damage;
    GameState.totalDamageDealt += damage;
    GameState.superCooldown = CONFIG.superCooldown;

    // Animation intense
    document.querySelector('.fighter-panel.enemy').classList.add('shake', 'damage');
    setTimeout(() => {
        document.querySelector('.fighter-panel.enemy').classList.remove('shake', 'damage');
    }, 500);

    // Log
    const phrase = randomFrom(SUPER_PHRASES);
    addLog(`💥 <strong>${GameState.playerBrand}</strong> ${phrase} <span style="color:#f59e0b; font-size:1.1rem">-${damage} HP !!!</span>`, 'critical');

    updateHP();
    updateCooldown();
    checkGameOver();

    if (!GameState.gameOver) {
        endPlayerTurn();
    }
}

/**
 * Fin du tour joueur → Tour ennemi
 */
function endPlayerTurn() {
    GameState.isPlayerTurn = false;
    setActionsEnabled(false);
    updateTurnIndicator(false);

    // L'ennemi attaque après un délai
    setTimeout(enemyTurn, CONFIG.enemyAttackDelay);
}

/**
 * Tour de l'ennemi
 */
function enemyTurn() {
    if (GameState.gameOver) return;

    // Dégâts de base
    let damage = randomBetween(CONFIG.attackDamage.min, CONFIG.attackDamage.max);

    // Réduction si le joueur défend
    if (GameState.playerDefending) {
        damage = Math.floor(damage * CONFIG.defendReduction);
        addLog(`🛡️ Défense activée ! Dégâts réduits.`, 'system');
        GameState.playerDefending = false;
    }

    GameState.playerHP -= damage;
    GameState.totalDamageTaken += damage;

    // Animation
    document.querySelector('.fighter-panel.player').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.fighter-panel.player').classList.remove('shake');
    }, 500);

    // Log
    const phrase = randomFrom(ATTACK_PHRASES);
    addLog(`👊 <strong>${GameState.enemyBrand}</strong> ${phrase} <span style="color:#ef4444">-${damage} HP</span>`, 'enemy');

    updateHP();
    checkGameOver();

    if (!GameState.gameOver) {
        startPlayerTurn();
    }
}

/**
 * Début du tour joueur
 */
function startPlayerTurn() {
    GameState.isPlayerTurn = true;

    // Réduire le cooldown
    if (GameState.superCooldown > 0) {
        GameState.superCooldown--;
    }

    updateCooldown();
    setActionsEnabled(true);
    updateTurnIndicator(true);
}

// ==========================================
// 🏆 FIN DE PARTIE
// ==========================================

function checkGameOver() {
    if (GameState.enemyHP <= 0) {
        GameState.gameOver = true;
        GameState.enemyHP = 0;
        updateHP();
        showEndScreen(true);
    } else if (GameState.playerHP <= 0) {
        GameState.gameOver = true;
        GameState.playerHP = 0;
        updateHP();
        showEndScreen(false);
    }
}

function showEndScreen(victory) {
    setActionsEnabled(false);

    setTimeout(() => {
        DOM.battleScreen.classList.add('hidden');
        DOM.endScreen.classList.remove('hidden');

        DOM.endCard.className = 'end-card ' + (victory ? 'victory' : 'defeat');
        DOM.endIcon.textContent = victory ? '🏆' : '💀';
        DOM.endTitle.textContent = victory ? 'VICTOIRE !' : 'DÉFAITE...';
        DOM.endDescription.textContent = victory
            ? `${GameState.playerBrand} a écrasé ${GameState.enemyBrand} !`
            : `${GameState.enemyBrand} a détruit ${GameState.playerBrand}...`;

        DOM.damageDealt.textContent = GameState.totalDamageDealt;
        DOM.damageTaken.textContent = GameState.totalDamageTaken;

        addLog(victory ? '🏆 VICTOIRE !' : '💀 DÉFAITE...', 'critical');
    }, 800);
}

// ==========================================
// 🎮 GESTION DU JEU
// ==========================================

function startGame() {
    const selectedBrand = DOM.brandSelect.value;
    if (!selectedBrand) return;

    // Reset state
    GameState.playerBrand = selectedBrand;
    // Si un joueur 2 a été sélectionné via la galerie, on l'utilise
    if (selectedP2) {
        GameState.enemyBrand = selectedP2;
    } else {
        GameState.enemyBrand = getRandomEnemy(selectedBrand);
    }

    GameState.playerHP = CONFIG.maxHP;
    GameState.enemyHP = CONFIG.maxHP;
    GameState.playerDefending = false;
    GameState.superCooldown = 0;
    GameState.isPlayerTurn = true;
    GameState.gameOver = false;
    GameState.totalDamageDealt = 0;
    GameState.totalDamageTaken = 0;

    // UI Setup
    DOM.playerAvatar.textContent = BRANDS[GameState.playerBrand];

    // Si on a une image pour le joueur
    const p1Img = document.querySelector(`.brand-card[data-brand="${GameState.playerBrand}"] img`);
    if (p1Img && p1Img.src) {
        DOM.playerAvatar.innerHTML = `<img src="${p1Img.src}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
    }

    DOM.enemyAvatar.textContent = BRANDS[GameState.enemyBrand];

    // Si on a une image pour l'ennemi (chercher dans la galerie même si pas sélectionné)
    // On doit recréer une card virtuelle ou chercher dans le DOM existant
    const p2Card = document.querySelector(`.brand-card[data-brand="${GameState.enemyBrand}"]`);
    if (p2Card) {
        const p2Img = p2Card.querySelector('img');
        if (p2Img && p2Img.src && p2Img.style.display !== 'none') {
            DOM.enemyAvatar.innerHTML = `<img src="${p2Img.src}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`;
        }
    }

    DOM.playerName.textContent = GameState.playerBrand;
    DOM.enemyName.textContent = GameState.enemyBrand;

    // Reset HP bars
    DOM.playerHpBar.style.background = 'linear-gradient(90deg, #4ade80, #22c55e)';
    DOM.enemyHpBar.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';

    updateHP();
    updateCooldown();
    updateTurnIndicator(true);
    setActionsEnabled(true);

    // Clear and init log
    clearLog();
    addLog(`⚔️ <strong>${GameState.playerBrand}</strong> VS <strong>${GameState.enemyBrand}</strong>`, 'system');
    addLog(`🎮 Que le combat commence !`, 'system');

    // Switch screens
    DOM.setupScreen.classList.add('hidden');
    DOM.endScreen.classList.add('hidden');
    DOM.battleScreen.classList.remove('hidden');
}

function resetGame() {
    DOM.endScreen.classList.add('hidden');
    DOM.battleScreen.classList.add('hidden');
    DOM.setupScreen.classList.remove('hidden');
    DOM.brandSelect.value = '';
    DOM.startButton.disabled = true;
}

function goHome() {
    window.location.href = 'index.html';
}

// ==========================================
// 🎧 EVENT LISTENERS
// ==========================================

function initEventListeners() {
    // Sélection de marque
    DOM.brandSelect.addEventListener('change', () => {
        DOM.startButton.disabled = !DOM.brandSelect.value;
    });

    // Bouton démarrer
    DOM.startButton.addEventListener('click', startGame);

    // Boutons d'action
    DOM.btnAttack.addEventListener('click', playerAttack);
    DOM.btnDefend.addEventListener('click', playerDefend);
    DOM.btnSuper.addEventListener('click', playerSuper);

    // Fin de partie
    DOM.replayButton.addEventListener('click', () => {
        resetGame();
        // Reset sélection visuelle aussi si on veut repartir de zéro, 
        // ou garder si on veut rejouer le même match.
        // Le user a demandé "Reset sélection" bouton, donc on garde la sélection par défaut
        // MAIS on doit réactiver le bouton start si une sélection existe
        if (DOM.brandSelect.value) {
            DOM.startButton.disabled = false;
        }
    });
    DOM.returnButton.addEventListener('click', goHome);

    // Reset Selection Button
    if (DOM.resetButton) {
        DOM.resetButton.addEventListener('click', resetSelection);
    }

    // Raccourcis clavier
    document.addEventListener('keydown', (e) => {
        if (GameState.gameOver || !GameState.isPlayerTurn) return;

        if (e.key === '1' || e.key.toLowerCase() === 'a') playerAttack();
        if (e.key === '2' || e.key.toLowerCase() === 'd') playerDefend();
        if (e.key === '3' || e.key.toLowerCase() === 's') playerSuper();
    });
}

// ==========================================
// 🖼️ GALERIE & SÉLECTION
// ==========================================

let selectionState = 0; // 0: Rien, 1: J1 sélectionné, 2: J1 & J2 sélectionnés
let selectedP1 = null;
let selectedP2 = null;

const BRAND_ROLES = ['Attaquant', 'Défenseur', 'Tank', 'Support', 'Neutre'];

function initGallery() {
    DOM.brandGallery.innerHTML = '';

    Object.keys(BRANDS).forEach(brand => {
        const card = document.createElement('div');
        card.className = 'brand-card';
        card.dataset.brand = brand;
        card.onclick = () => handleCardClick(brand);

        // Tentative de chargement image, fallback sur icône
        // Note: On assume que les images sont dans profil/nom.png (lower case)
        const brandKey = brand.toLowerCase();

        card.innerHTML = `
            <div class="card-avatar-container">
                <img src="profil/${brandKey}.png" 
                     alt="${brand}" 
                     class="brand-avatar-img" 
                     loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                <div class="brand-avatar-fallback" style="display:none">${BRANDS[brand]}</div>
            </div>
            <span class="brand-name">${brand}</span>
            <span class="brand-badge">${randomFrom(BRAND_ROLES)}</span>
        `;

        DOM.brandGallery.appendChild(card);
    });
}

function handleCardClick(brand) {
    if (selectionState === 0) {
        // Sélection J1
        selectedP1 = brand;
        selectionState = 1;
        DOM.brandSelect.value = brand; // Synchro sélecteur classique
        DOM.startButton.disabled = false;
    } else if (selectionState === 1) {
        // Sélection J2
        if (brand === selectedP1) return; // Pas le même
        selectedP2 = brand;
        selectionState = 2;
    }

    updateSelectionUI();
}

function updateSelectionUI() {
    // Reset classes
    document.querySelectorAll('.brand-card').forEach(card => {
        card.classList.remove('selected-p1', 'selected-p2');
        if (card.dataset.brand === selectedP1) card.classList.add('selected-p1');
        if (card.dataset.brand === selectedP2) card.classList.add('selected-p2');
    });

    // Update Status Box
    if (selectedP1) {
        DOM.statusP1.classList.remove('empty');
        DOM.statusP1.querySelector('.status-name').textContent = selectedP1;
    } else {
        DOM.statusP1.classList.add('empty');
        DOM.statusP1.querySelector('.status-name').textContent = '?';
    }

    if (selectedP2) {
        DOM.statusP2.classList.remove('empty');
        DOM.statusP2.querySelector('.status-name').textContent = selectedP2;
    } else {
        DOM.statusP2.classList.add('empty');
        DOM.statusP2.querySelector('.status-name').textContent = '?';
    }

    // Bouton Reset
    if (selectedP1) {
        DOM.resetButton.classList.remove('hidden');
    } else {
        DOM.resetButton.classList.add('hidden');
    }
}

function resetSelection() {
    selectedP1 = null;
    selectedP2 = null;
    selectionState = 0;
    DOM.brandSelect.value = "";
    DOM.startButton.disabled = true;
    updateSelectionUI();
}

// ==========================================
// 🚀 INITIALISATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initDOM();
    createParticles();
    initEventListeners();
    initGallery(); // Init la galerie

    console.log('⚔️ WAR — Guerre des Marques');
    console.log(`Marques disponibles: ${Object.keys(BRANDS).length}`);
    console.log('Prêt au combat !');
});
