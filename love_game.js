/**
 * 💖 AMOUR DES MARQUES - Version 100 Marques
 * Un mini-jeu romantique entre marques tech
 * 
 * AUDIO: Utilise arc6.mp3 (Windows Vienna) comme musique de fond
 */

// ==========================================
// AUDIO MANAGER pour LOVE MODE (autonome)
// ==========================================

const LoveAudio = {
    bgm: null,
    muted: false,
    volume: 0.25,
    audioUnlocked: false,
    musicSrc: './audio/arc6.mp3',

    init() {
        this.muted = localStorage.getItem('gdm_audio_muted') === 'true';
        this.audioUnlocked = false;
        console.log('🎵 LoveAudio initialisé, muted:', this.muted);
    },

    async unlockAudio() {
        if (this.audioUnlocked) return true;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const ctx = new AudioContext();
            await ctx.resume();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            gain.gain.value = 0;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(0);
            osc.stop(ctx.currentTime + 0.001);
            this.audioUnlocked = true;
            this.muted = false;
            localStorage.setItem('gdm_audio_muted', 'false');
            console.log('🔓 Audio LOVE débloqué !');
            this.playBgm();
            return true;
        } catch (e) {
            console.error('❌ Echec déblocage audio:', e);
            return false;
        }
    },

    playBgm() {
        if (this.muted || !this.audioUnlocked) return;
        if (this.bgm && !this.bgm.paused) return;
        try {
            this.bgm = new Audio(this.musicSrc);
            this.bgm.loop = true;
            this.bgm.volume = 0;
            this.bgm.preload = 'auto';
            this.bgm.play().then(() => {
                console.log('▶️ Musique LOVE démarrée:', this.musicSrc);
                this.fadeIn(this.bgm, this.volume);
            }).catch(e => console.warn('⚠️ Lecture musique bloquée:', e.message));
        } catch (e) {
            console.error('❌ Erreur création audio:', e);
        }
    },

    stopBgm() {
        if (this.bgm) {
            this.bgm.pause();
            this.bgm.currentTime = 0;
            this.bgm = null;
        }
    },

    fadeIn(audio, targetVol, duration = 1000) {
        if (!audio) return;
        const step = targetVol / (duration / 50);
        const interval = setInterval(() => {
            if (!audio) { clearInterval(interval); return; }
            if (audio.volume < targetVol - step) {
                audio.volume = Math.min(audio.volume + step, targetVol);
            } else {
                audio.volume = targetVol;
                clearInterval(interval);
            }
        }, 50);
    }
};

// ==========================================
// 📊 SYSTÈME DE STATISTIQUES PERSISTANTES
// ==========================================

const LoveStats = {
    storageKey: 'loveStats',

    // Structure des stats par défaut
    defaultStats: {
        matchsTotal: 0,
        approcherCount: 0,
        ignorerCount: 0,
        rejeterCount: 0,
        couplesFormes: [],
        dramas: [],
        brandEncounters: {},
        bestScore: 0,
        gamesPlayed: 0
    },

    // Stats actuelles
    stats: null,

    /**
     * Charge les stats depuis localStorage
     */
    load() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            this.stats = saved ? { ...this.defaultStats, ...JSON.parse(saved) } : { ...this.defaultStats };
        } catch (e) {
            console.warn('⚠️ Erreur chargement stats:', e);
            this.stats = { ...this.defaultStats };
        }
        console.log('📊 Stats chargées:', this.stats);
    },

    /**
     * Sauvegarde les stats dans localStorage
     */
    save() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.stats));
        } catch (e) {
            console.warn('⚠️ Erreur sauvegarde stats:', e);
        }
    },

    /**
     * Enregistre un match
     */
    recordMatch(brand1, brand2) {
        this.stats.matchsTotal++;

        // Tracker les rencontres par marque
        this.stats.brandEncounters[brand1] = (this.stats.brandEncounters[brand1] || 0) + 1;
        this.stats.brandEncounters[brand2] = (this.stats.brandEncounters[brand2] || 0) + 1;

        this.save();
    },

    /**
     * Enregistre un choix
     */
    recordChoice(choice, brand1, brand2) {
        const coupleKey = `${brand1} 💕 ${brand2}`;

        switch (choice) {
            case 'approach':
                this.stats.approcherCount++;
                if (!this.stats.couplesFormes.includes(coupleKey)) {
                    this.stats.couplesFormes.push(coupleKey);
                }
                break;
            case 'ignore':
                this.stats.ignorerCount++;
                break;
            case 'reject':
                this.stats.rejeterCount++;
                const dramaKey = `${brand1} 💔 ${brand2}`;
                if (!this.stats.dramas.includes(dramaKey)) {
                    this.stats.dramas.push(dramaKey);
                }
                break;
        }

        this.save();
    },

    /**
     * Enregistre la fin d'une partie
     */
    recordGameEnd(finalScore) {
        this.stats.gamesPlayed++;
        if (finalScore > this.stats.bestScore) {
            this.stats.bestScore = finalScore;
        }
        this.save();
    },

    /**
     * Retourne la marque la plus rencontrée
     */
    getTopPartner() {
        const encounters = this.stats.brandEncounters;
        let topBrand = null;
        let topCount = 0;

        for (const [brand, count] of Object.entries(encounters)) {
            if (count > topCount) {
                topCount = count;
                topBrand = brand;
            }
        }

        return topBrand ? `${topBrand} (${topCount}x)` : 'Aucune';
    },

    /**
     * Reset toutes les stats
     */
    reset() {
        this.stats = { ...this.defaultStats };
        this.save();
        console.log('🧹 Stats réinitialisées');
    },

    /**
     * Met à jour l'affichage du panneau
     */
    updatePanel() {
        const panel = document.getElementById('stats-content');
        if (!panel) return;

        const topPartner = this.getTopPartner();
        const recentCouples = this.stats.couplesFormes.slice(-5).reverse().join('<br>');
        const recentDramas = this.stats.dramas.slice(-5).reverse().join('<br>');

        panel.innerHTML = `
            <div class="stat-row"><span>🎯 Matchs totaux</span><strong>${this.stats.matchsTotal}</strong></div>
            <div class="stat-row"><span>🎮 Parties jouées</span><strong>${this.stats.gamesPlayed}</strong></div>
            <div class="stat-row"><span>🏆 Meilleur score</span><strong>${this.stats.bestScore}</strong></div>
            <hr>
            <div class="stat-row"><span>💕 Approcher</span><strong>${this.stats.approcherCount}</strong></div>
            <div class="stat-row"><span>😳 Ignorer</span><strong>${this.stats.ignorerCount}</strong></div>
            <div class="stat-row"><span>💔 Rejeter</span><strong>${this.stats.rejeterCount}</strong></div>
            <hr>
            <div class="stat-row"><span>⭐ Top partenaire</span><strong>${topPartner}</strong></div>
            <div class="stat-row"><span>💑 Couples formés</span><strong>${this.stats.couplesFormes.length}</strong></div>
            <div class="stat-row"><span>💥 Dramas</span><strong>${this.stats.dramas.length}</strong></div>
            ${recentCouples ? `<hr><div class="stat-section"><small>Derniers couples:</small><br>${recentCouples}</div>` : ''}
            ${recentDramas ? `<div class="stat-section"><small>Derniers dramas:</small><br>${recentDramas}</div>` : ''}
        `;
    }
};

// ==========================================
// 🎮 100 MARQUES TECH UNIQUES
// ==========================================

const BRANDS = [
    // === GAMER (20) ===
    'ASUS ROG', 'MSI', 'Razer', 'Corsair', 'Logitech G',
    'SteelSeries', 'HyperX', 'NZXT', 'Alienware', 'Predator',
    'EVGA', 'Gigabyte Aorus', 'ASRock', 'XPG', 'Cooler Master',
    'Thermaltake', 'be quiet!', 'Phanteks', 'Lian Li', 'EKWB',

    // === BUSINESS (15) ===
    'Dell', 'HP', 'Lenovo', 'Fujitsu', 'Toshiba',
    'Dynabook', 'Panasonic', 'Getac', 'Cisco', 'IBM',
    'Oracle', 'SAP', 'VMware', 'Citrix', 'Salesforce',

    // === MOBILE (15) ===
    'Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi',
    'Huawei', 'Oppo', 'Vivo', 'Realme', 'Motorola',
    'Nokia', 'Sony Xperia', 'Nothing', 'Asus Zenfone', 'Honor',

    // === COMPONENTS (20) ===
    'Intel', 'AMD', 'NVIDIA', 'Qualcomm', 'MediaTek',
    'Micron', 'SK Hynix', 'Samsung Memory', 'Western Digital', 'Seagate',
    'Crucial', 'Kingston', 'G.Skill', 'TeamGroup', 'Sabrent',
    'Noctua', 'Arctic', 'Seasonic', 'Corsair PSU', 'ASUS TUF',

    // === SOFTWARE (15) ===
    'Microsoft', 'Adobe', 'Autodesk', 'JetBrains', 'Unity',
    'Epic Games', 'Valve', 'Blizzard', 'EA', 'Ubisoft',
    'Discord', 'Spotify', 'Netflix', 'Zoom', 'Slack',

    // === PERIPHERALS (15) ===
    'Logitech', 'Microsoft Surface', 'Wacom', 'Elgato', 'Blue Microphones',
    'Audio-Technica', 'Sennheiser', 'Bose', 'JBL', 'Sony Audio',
    'BenQ', 'LG Display', 'Samsung Display', 'ViewSonic', 'AOC'
];

// ==========================================
// 📦 GROUPES ET COMPATIBILITÉ
// ==========================================

const GROUPS = {
    gamer: ['ASUS ROG', 'MSI', 'Razer', 'Corsair', 'Logitech G', 'SteelSeries', 'HyperX', 'NZXT', 'Alienware', 'Predator', 'EVGA', 'Gigabyte Aorus', 'ASRock', 'XPG', 'Cooler Master', 'Thermaltake', 'be quiet!', 'Phanteks', 'Lian Li', 'EKWB'],
    business: ['Dell', 'HP', 'Lenovo', 'Fujitsu', 'Toshiba', 'Dynabook', 'Panasonic', 'Getac', 'Cisco', 'IBM', 'Oracle', 'SAP', 'VMware', 'Citrix', 'Salesforce'],
    mobile: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Huawei', 'Oppo', 'Vivo', 'Realme', 'Motorola', 'Nokia', 'Sony Xperia', 'Nothing', 'Asus Zenfone', 'Honor'],
    components: ['Intel', 'AMD', 'NVIDIA', 'Qualcomm', 'MediaTek', 'Micron', 'SK Hynix', 'Samsung Memory', 'Western Digital', 'Seagate', 'Crucial', 'Kingston', 'G.Skill', 'TeamGroup', 'Sabrent', 'Noctua', 'Arctic', 'Seasonic', 'Corsair PSU', 'ASUS TUF'],
    software: ['Microsoft', 'Adobe', 'Autodesk', 'JetBrains', 'Unity', 'Epic Games', 'Valve', 'Blizzard', 'EA', 'Ubisoft', 'Discord', 'Spotify', 'Netflix', 'Zoom', 'Slack'],
    peripherals: ['Logitech', 'Microsoft Surface', 'Wacom', 'Elgato', 'Blue Microphones', 'Audio-Technica', 'Sennheiser', 'Bose', 'JBL', 'Sony Audio', 'BenQ', 'LG Display', 'Samsung Display', 'ViewSonic', 'AOC']
};

// Rivalités légendaires (malus de compatibilité)
const RIVALRIES = [
    ['Intel', 'AMD'],
    ['NVIDIA', 'AMD'],
    ['Apple', 'Microsoft'],
    ['Apple', 'Samsung'],
    ['EA', 'Valve'],
    ['Epic Games', 'Valve'],
    ['Discord', 'Slack'],
    ['Spotify', 'Apple'],
    ['ASUS ROG', 'MSI'],
    ['Corsair', 'Razer'],
    ['Dell', 'HP'],
    ['Intel', 'Qualcomm'],
    ['Western Digital', 'Seagate']
];

// Phrases de rencontre amusantes
const MEET_PHRASES = [
    "se croisent à un salon tech...",
    "se retrouvent dans un benchmark...",
    "matchent sur TechTinder !",
    "se rencontrent dans un datacenter...",
    "partagent un stand au CES...",
    "se voient au Computex...",
    "chattent sur Discord dev...",
    "collaborent sur un driver...",
    "se retrouvent dans le même setup...",
    "font une collab inattendue...",
    "sont forcés de cohabiter dans un PC...",
    "se regardent dans un teardown iFixit..."
];

// Phrases de réaction selon le choix
const REACTIONS = {
    approach: [
        "C'est le début d'une belle collab ! 💕",
        "Ils fusionnent leurs drivers ! 💖",
        "Un nouveau bundle est né ! 🎁",
        "Compatibilité parfaite détectée ! ✨",
        "L'amour transcende les benchmarks ! 💘"
    ],
    ignore: [
        "Ils s'ignorent poliment au CES... 😐",
        "Chacun retourne à son booth. 🚶",
        "Le timing n'est pas encore bon. ⏰",
        "Peut-être à la prochaine génération ? 🤔",
        "Ils préfèrent rester en concurrence saine. 🤝"
    ],
    reject: [
        "GUERRE DES SPECS DÉCLARÉE ! ⚔️",
        "Un benchmark vengeur est lancé ! 💢",
        "Les drivers deviennent incompatibles ! 🔥",
        "Le FUD commence à circuler ! 📉",
        "Twitter explose de drama ! 💔"
    ]
};

// ==========================================
// 🎯 ÉTAT DU JEU
// ==========================================

const GameState = {
    loveScore: 0,
    matchCount: 0,
    maxMatches: 12,
    currentPair: null,
    usedPairs: [],
    isTyping: false,
    typingInterval: null
};

// ==========================================
// 🔧 FONCTIONS UTILITAIRES
// ==========================================

function getGroup(brand) {
    for (const [group, members] of Object.entries(GROUPS)) {
        if (members.includes(brand)) return group;
    }
    return 'unknown';
}

function areRivals(brand1, brand2) {
    return RIVALRIES.some(pair =>
        (pair[0] === brand1 && pair[1] === brand2) ||
        (pair[0] === brand2 && pair[1] === brand1)
    );
}

function calculateCompatibility(brand1, brand2) {
    const group1 = getGroup(brand1);
    const group2 = getGroup(brand2);

    // Rivalité = malus
    if (areRivals(brand1, brand2)) {
        return { score: -2, message: '⚡ RIVAUX LÉGENDAIRES !' };
    }

    // Même groupe = bonus
    if (group1 === group2) {
        return { score: 2, message: '💫 Même univers !' };
    }

    // Groupes neutres
    return { score: 0, message: '' };
}

function randomPair() {
    let attempts = 0;
    let brand1, brand2, pairKey;

    do {
        brand1 = BRANDS[Math.floor(Math.random() * BRANDS.length)];
        brand2 = BRANDS[Math.floor(Math.random() * BRANDS.length)];
        pairKey = [brand1, brand2].sort().join('|');
        attempts++;
    } while ((brand1 === brand2 || GameState.usedPairs.includes(pairKey)) && attempts < 100);

    GameState.usedPairs.push(pairKey);
    return { brand1, brand2 };
}

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// ==========================================
// 🖥️ ÉLÉMENTS DOM
// ==========================================

const DOM = {};

function initDOM() {
    DOM.particles = document.getElementById('particles');
    DOM.startScreen = document.getElementById('start-screen');
    DOM.startButton = document.getElementById('start-button');
    DOM.sceneContainer = document.getElementById('scene-container');
    DOM.progressFill = document.getElementById('progress-fill');
    DOM.scoreValue = document.getElementById('score-value');
    DOM.charLeft = document.getElementById('char-left');
    DOM.charRight = document.getElementById('char-right');
    DOM.avatarLeft = document.getElementById('avatar-left');
    DOM.avatarRight = document.getElementById('avatar-right');
    DOM.nameLeft = document.getElementById('name-left');
    DOM.nameRight = document.getElementById('name-right');
    DOM.loveIndicator = document.getElementById('love-indicator');
    DOM.dialogueBox = document.getElementById('dialogue-box');
    DOM.speakerName = document.getElementById('speaker-name');
    DOM.dialogueText = document.getElementById('dialogue-text');
    DOM.dialogueIndicator = document.getElementById('dialogue-indicator');
    DOM.choicesContainer = document.getElementById('choices-container');
    DOM.choiceApproach = document.getElementById('choice-approach');
    DOM.choiceIgnore = document.getElementById('choice-ignore');
    DOM.choiceReject = document.getElementById('choice-reject');
    DOM.endScreen = document.getElementById('end-screen');
    DOM.endCard = document.getElementById('end-card');
    DOM.endIcon = document.getElementById('end-icon');
    DOM.endTitle = document.getElementById('end-title');
    DOM.endDescription = document.getElementById('end-description');
    DOM.finalScore = document.getElementById('final-score');
    DOM.couplesFormed = document.getElementById('couples-formed');
    DOM.replayButton = document.getElementById('replay-button');
    DOM.returnButton = document.getElementById('return-button');
}

// ==========================================
// ✨ PARTICULES
// ==========================================

function createParticles() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '✨', '💫', '⭐'];
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        DOM.particles.appendChild(particle);
    }
}

// ==========================================
// 🎮 LOGIQUE DU JEU
// ==========================================

function startGame() {
    // Reset
    GameState.loveScore = 0;
    GameState.matchCount = 0;
    GameState.usedPairs = [];
    GameState.currentPair = null;

    updateUI();

    DOM.startScreen.classList.add('hidden');
    DOM.endScreen.classList.add('hidden');
    DOM.sceneContainer.classList.remove('hidden');

    nextMatch();
}

function nextMatch() {
    if (GameState.matchCount >= GameState.maxMatches) {
        endGame();
        return;
    }

    GameState.matchCount++;
    GameState.currentPair = randomPair();

    const { brand1, brand2 } = GameState.currentPair;
    const compat = calculateCompatibility(brand1, brand2);

    // 📊 Enregistrer le match dans les stats
    LoveStats.recordMatch(brand1, brand2);
    LoveStats.updatePanel();

    // Update UI
    DOM.avatarLeft.textContent = '🖥️';
    DOM.avatarRight.textContent = '💻';
    DOM.nameLeft.textContent = brand1;
    DOM.nameRight.textContent = brand2;

    // Show encounter
    const meetPhrase = randomFrom(MEET_PHRASES);
    DOM.speakerName.textContent = 'Narrateur';

    let text = `${brand1} et ${brand2} ${meetPhrase}`;
    if (compat.message) {
        text += `\n${compat.message}`;
    }

    typeText(text, () => {
        DOM.choicesContainer.classList.remove('hidden');
    });

    updateUI();
}

function handleChoice(choice) {
    const { brand1, brand2 } = GameState.currentPair;
    const compat = calculateCompatibility(brand1, brand2);

    let scoreChange = 0;

    switch (choice) {
        case 'approach':
            scoreChange = 1 + compat.score;
            break;
        case 'ignore':
            scoreChange = 0;
            break;
        case 'reject':
            scoreChange = -1 + compat.score;
            break;
    }

    GameState.loveScore += scoreChange;

    // 📊 ENREGISTRER LE CHOIX DANS LES STATS
    LoveStats.recordChoice(choice, brand1, brand2);
    LoveStats.updatePanel();

    // Show reaction
    const reaction = randomFrom(REACTIONS[choice]);
    DOM.speakerName.textContent = choice === 'approach' ? '💕 Cupidon' : choice === 'reject' ? '💔 Chaos' : '🤔 Destin';

    DOM.choicesContainer.classList.add('hidden');

    typeText(reaction + (scoreChange !== 0 ? ` (${scoreChange > 0 ? '+' : ''}${scoreChange})` : ''), () => {
        setTimeout(() => nextMatch(), 1500);
    });

    updateUI();
}

function typeText(text, callback) {
    GameState.isTyping = true;
    DOM.dialogueText.textContent = '';
    DOM.dialogueIndicator.style.opacity = '0';

    let charIndex = 0;
    const speed = 25;

    clearInterval(GameState.typingInterval);

    GameState.typingInterval = setInterval(() => {
        if (charIndex < text.length) {
            DOM.dialogueText.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(GameState.typingInterval);
            GameState.isTyping = false;
            DOM.dialogueIndicator.style.opacity = '1';
            if (callback) callback();
        }
    }, speed);
}

function updateUI() {
    DOM.scoreValue.textContent = GameState.loveScore;
    const progress = (GameState.matchCount / GameState.maxMatches) * 100;
    DOM.progressFill.style.width = progress + '%';
}

// ==========================================
// 🏆 FIN DU JEU
// ==========================================

function endGame() {
    DOM.sceneContainer.classList.add('hidden');
    DOM.endScreen.classList.remove('hidden');

    // 📊 Enregistrer la fin de partie
    LoveStats.recordGameEnd(GameState.loveScore);
    LoveStats.updatePanel();

    const ending = determineEnding();

    DOM.endCard.className = 'end-card ' + ending.type;
    DOM.endIcon.textContent = ending.icon;
    DOM.endTitle.textContent = ending.title;
    DOM.endDescription.textContent = ending.description;
    DOM.finalScore.textContent = GameState.loveScore;
    DOM.couplesFormed.textContent = Math.max(0, Math.floor(GameState.loveScore / 2));
}

function determineEnding() {
    const score = GameState.loveScore;

    if (score >= 8) {
        return {
            type: 'happy',
            icon: '💖',
            title: 'Fin Heureuse !',
            description: `L'amour règne sur le monde tech ! Score: ${score}. Les marques vivent en harmonie, les benchmarks ne sont plus que des souvenirs. Même Intel et AMD se font des câlins !`
        };
    } else if (score >= 3) {
        return {
            type: 'neutral',
            icon: '😐',
            title: 'Fin Neutre',
            description: `C'est... acceptable. Score: ${score}. Certaines marques ont trouvé l'amour, d'autres continuent leur guerre froide. Business as usual dans la tech.`
        };
    } else {
        return {
            type: 'drama',
            icon: '💔',
            title: 'Fin Drama !',
            description: `CATASTROPHE ! Score: ${score}. Vous avez déclenché la Troisième Guerre des Specs. Les drivers sont incompatibles, Twitter brûle, et les fanboys sont déchaînés !`
        };
    }
}

function resetGame() {
    DOM.endScreen.classList.add('hidden');
    DOM.startScreen.classList.remove('hidden');
}

function goToWar() {
    LoveAudio.stopBgm();
    window.location.href = 'index.html';
}

// ==========================================
// 🎧 EVENT LISTENERS
// ==========================================

function initEventListeners() {
    DOM.startButton.addEventListener('click', async () => {
        await LoveAudio.unlockAudio();
        startGame();
    });

    DOM.choiceApproach.addEventListener('click', () => handleChoice('approach'));
    DOM.choiceIgnore.addEventListener('click', () => handleChoice('ignore'));
    DOM.choiceReject.addEventListener('click', () => handleChoice('reject'));

    DOM.replayButton.addEventListener('click', () => {
        resetGame();
        startGame();
    });

    DOM.returnButton.addEventListener('click', goToWar);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === '1') handleChoice('approach');
        if (e.key === '2') handleChoice('ignore');
        if (e.key === '3') handleChoice('reject');
    });

    // 📊 Bouton Stats
    const statsBtn = document.getElementById('btn-stats');
    const statsPanel = document.getElementById('stats-panel');
    if (statsBtn && statsPanel) {
        statsBtn.addEventListener('click', () => {
            statsPanel.classList.toggle('hidden');
            LoveStats.updatePanel();
        });
    }

    // 🧹 Bouton Reset Stats
    const resetStatsBtn = document.getElementById('btn-reset-stats');
    if (resetStatsBtn) {
        resetStatsBtn.addEventListener('click', () => {
            if (confirm('Effacer toutes les statistiques ?')) {
                LoveStats.reset();
                LoveStats.updatePanel();
            }
        });
    }
}

// ==========================================
// 🚀 INITIALISATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initDOM();
    createParticles();
    initEventListeners();
    LoveAudio.init();

    // 📊 Charger les stats
    LoveStats.load();
    LoveStats.updatePanel();

    // Vérification des 100 marques
    console.log(`💖 Amour des Marques v2.1 - Stats Edition`);
    console.log(`Brands loaded: ${BRANDS.length}`);
    console.log(`Groups: ${Object.keys(GROUPS).length}`);
    console.log(`Rivalries: ${RIVALRIES.length}`);
    console.log(`📊 Stats:`, LoveStats.stats);

    if (BRANDS.length !== 100) {
        console.error(`⚠️ ATTENTION: ${BRANDS.length} marques au lieu de 100 !`);
    }
});
