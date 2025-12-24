/**
 * LA GUERRE DES MARQUES — VISUAL NOVEL
 * App avec Mode Cinéma + Audio
 */

// ========== CONFIG ==========
const ARCS_CONFIG = {
    1: {
        id: 1, name: 'ARC 1', label: 'ARC 1', subtitle: "L'Aube du Chaos",
        folder: './chapters/arc1',
        chapters: [
            { file: 'ARC1_01-prologue.js', title: 'Prologue — L\'Aube du Chaos' },
            { file: 'ARC1_02-chapitre1.js', title: 'Chapitre 1 — Première Frappe' },
            { file: 'ARC1_03-chapitre2.js', title: 'Chapitre 2 — La Chute des Faibles' },
            { file: 'ARC1_04-chapitre3.js', title: 'Chapitre 3 — Le Silence Après la Guerre' },
            { file: 'ARC1_05-chapitre4.js', title: 'Chapitre 4 — ASUS fait pipi sur Acer' },
            { file: 'ARC1_06-chapitre5.js', title: 'Chapitre 5 — HP fait pipi sur Acer' }
        ]
    },
    2: {
        id: 2, name: 'ARC 2', label: 'ARC 2', subtitle: 'Le Bug Originel',
        folder: './chapters/arc2',
        chapters: [
            { file: 'ARC2_01-prologue.js', title: 'Prologue — Le Réveil' },
            { file: 'ARC2_02-chapitre1.js', title: 'Chapitre 1 — Le Cœur Interdit' },
            { file: 'ARC2_03-chapitre2.js', title: 'Chapitre 2 — L\'Anomalie' },
            { file: 'ARC2_04-chapitre3.js', title: 'Chapitre 3 — La Fusion Interdite' },
            { file: 'ARC2_05-chapitre4.js', title: 'Chapitre 4 — La Mutation' },
            { file: 'ARC2_06-chapitre5.js', title: 'Chapitre 5 — L\'Écho de l\'Abîme' },
            { file: 'ARC2_07-chapitre6.js', title: 'Chapitre 6 — L\'Entité Hybride' }
        ]
    },
    3: {
        id: 3, name: 'ARC 3', label: 'ARC 3', subtitle: "L'Obscurité Finale",
        folder: './chapters/arc3',
        chapters: [
            { file: 'ARC3_01-prologue.js', title: 'Prologue — L\'Obscurité Finale' },
            { file: 'ARC3_02-chapitre1.js', title: 'Chapitre 1 — Le Rituel des Ombres' },
            { file: 'ARC3_03-chapitre2.js', title: 'Chapitre 2 — La Fusion Finale' }
        ]
    },
    4: {
        id: 4, name: 'ARC 4', label: 'ARC 4', subtitle: 'Aero Dreams',
        folder: './chapters/arc4',
        chapters: [
            { file: 'ARC4_01-prologue.js', title: 'Prologue — Aero Restart' },
            { file: 'ARC4_02-chapitre1.js', title: 'Chapitre 1 — UAC : Demande d\'Autorisation' },
            { file: 'ARC4_03-chapitre2.js', title: 'Chapitre 2 — Media Center Dreams' },
            { file: 'ARC4_04-chapitre3.js', title: 'Chapitre 3 — Le Registre Corrompu' },
            { file: 'ARC4_05-chapitre4.js', title: 'Chapitre 4 — Dreamscene Dimension' },
            { file: 'ARC4_06-chapitre5.js', title: 'Chapitre 5 — L\'Ascension Aero' },
            { file: 'ARC4_07-chapitre6.js', title: 'Chapitre 6 — La Rupture' }
        ]
    },
    5: {
        id: 5, name: 'ARC 5', label: 'ARC 5', subtitle: 'Les Ténèbres Intérieures',
        folder: './chapters/arc5',
        chapters: [
            { file: 'ARC5_01-prologue.js', title: 'Prologue — Les Ténèbres Intérieures' },
            { file: 'ARC5_02-chapitre1.js', title: 'Chapitre 1 — Manipulation Systémique' },
            { file: 'ARC5_03-chapitre2.js', title: 'Chapitre 2 — Le Témoin' },
            { file: 'ARC5_04-chapitre3.js', title: 'Chapitre 3 — La Confrontation' },
            { file: 'ARC5_05-chapitre4.js', title: 'Chapitre 4 — Acer vole l\'OS de Dell' }
        ]
    },
    6: {
        id: 6, name: 'ARC 6', label: 'ARC 6', subtitle: 'Le Chaos Final',
        folder: './chapters/arc6',
        chapters: [
            { file: 'ARC6_01-chapitre1.js', title: 'Chapitre 1 — Le Retour du Karma' },
            { file: 'ARC6_02-chapitre2.js', title: 'Chapitre 2 — Les Marques Paniquent' },
            { file: 'ARC6_03-chapitre3.js', title: 'Chapitre 3 — Le Silence' },
            { file: 'ARC6_04-chapitre4.js', title: 'Chapitre 4 — Le Jugement' },
            { file: 'ARC6_05-chapitre5.js', title: 'Chapitre 5 — Fin Alternative' }
        ]
    },
    7: {
        id: 7, name: 'ARC 7', label: 'ARC 7', subtitle: 'La Tempête',
        folder: './chapters/arc7',
        chapters: [
            { file: 'ARC7_01-prologue.js', title: 'Prologue — La Tempête Arrive' },
            { file: 'ARC7_02-chapitre1.js', title: 'Chapitre 1 — Packard Bell Contre-Attaque' },
            { file: 'ARC7_03-chapitre2.js', title: 'Chapitre 2 — L\'Attaque Surprise' },
            { file: 'ARC7_04-chapitre3.js', title: 'Chapitre 3 — La Riposte' }
        ]
    }
};

// ========== STATE ==========

let currentArcId = null;
let currentChapterIndex = 0;
let currentPageIndex = 0;
let currentChapterData = null;
const chapterCache = new Map();

// ========== DOM ==========
const DOM = {
    portal: document.getElementById('portal'),
    chapterSelect: document.getElementById('chapter-select'),
    chapterSelectTitle: document.getElementById('chapter-select-title'),
    chapterList: document.getElementById('chapter-list'),
    btnBackPortal: document.getElementById('btn-back-portal'),
    resumeBanner: document.getElementById('resume-banner'),
    resumeBtn: document.getElementById('resume-btn'),
    resumeText: document.getElementById('resume-text'),
    audioUnlockBanner: document.getElementById('audio-unlock-banner'),
    btnUnlockAudio: document.getElementById('btn-unlock-audio'),
    reader: document.getElementById('reader'),
    readerArcTitle: document.getElementById('reader-arc-title'),
    readerChapterTitle: document.getElementById('reader-chapter-title'),
    readerSubtitle: document.getElementById('reader-subtitle'),
    pageTitle: document.getElementById('page-title'),
    blocksContainer: document.getElementById('blocks-container'),
    pageCurrent: document.getElementById('page-current'),
    pageTotal: document.getElementById('page-total'),
    progressBar: document.getElementById('progress-bar'),
    btnBack: document.getElementById('btn-back'),
    btnRestart: document.getElementById('btn-restart'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnAudio: document.getElementById('btn-audio'),
    btnCinema: document.getElementById('btn-cinema'),
    btnExitCinema: document.getElementById('btn-exit-cinema')
};

// ========== AUDIO MANAGER ROBUSTE ==========
const AudioManager = {
    // État global
    muted: true,
    volume: 0.25,
    audioUnlocked: false,

    // Instance musique de fond
    ambient: null,
    currentAmbientSrc: null,

    // Instances SFX préchargées (une seule instance par SFX)
    sfxInstances: {},

    // Anti-repeat: stocke les SFX déjà joués (chapterId_pageIndex_sfxName)
    playedSFX: new Set(),

    // File d'attente pour les SFX déclenchés avant le déblocage
    sfxQueue: [],

    // ========== MAPPING AUDIO ==========
    // Noms simplifiés sans espaces/virgules/majuscules
    sfxMap: {
        'shock': './audio/shock.mp3',
        // Correction suite demande : Ch4 (ASUS) joue le fichier court "tuesmaladeouquoi.mp3"
        'tuesmalade': './audio/tuesmaladeouquoi.mp3',
        'tuesmaladeHp': './audio/tuesmaladeouquoi-comme-asus-ma-fait-pipi.mp3',
        'gigabyteMsiLaugh': './audio/gigabyte-msi-laugh.mp3',
        'acerOhNo': './audio/acer-oh-no.mp3',
        'listenToMe': './audio/listen-to-me.mp3',
        // ARC 4 Chapitre 6 - La rage d'Acer
        'acerRage': './audio/TagueuleTuesdemerdemsi.mp3',
        // ARC 5 Chapitre 4 - Dell crie NON
        'noGodPleaseNo': './audio/NO-GOD-PLEASE-NO.mp3'
    },

    ambientMap: {
        1: './audio/arc1.mp3',
        2: './audio/arc2.mp3',
        3: './audio/arc3.mp3',
        4: './audio/arc4.mp3',
        5: './audio/arc5.mp3',
        6: './audio/arc6.mp3',
        7: './audio/arc7.mp3'
    },

    // ========== INITIALISATION ==========
    init() {
        this.muted = localStorage.getItem('gdm_audio_muted') !== 'false';
        // NE PAS charger audioUnlocked du storage car le navigateur reset la permission au refresh
        this.audioUnlocked = false;

        this.updateIcon();
        this.updateUnlockButton();
        this.preloadAllSFX();

        // Listener global : premier clic débloque l'audio (Silent interaction)
        const unlockHandler = () => {
            if (!this.audioUnlocked) {
                this.unlockAudio().then((success) => {
                    if (success) {
                        document.removeEventListener('click', unlockHandler);
                        document.removeEventListener('keydown', unlockHandler);
                    } else {
                        console.warn('⚠️ Déblocage audio échoué, nouvelle tentative au prochain clic.');
                    }
                });
            }
        };
        document.addEventListener('click', unlockHandler);
        document.addEventListener('keydown', unlockHandler);

        console.log('🔊 AudioManager initialisé, muted:', this.muted);
    },

    // Débloque l'audio via Web Audio API (méthode standard, infaillible)
    unlockAudio() {
        if (this.audioUnlocked) {
            console.log('🔓 Audio déjà débloqué');
            return Promise.resolve(true);
        }

        return new Promise((resolve) => {
            try {
                // Créer ou récupérer un AudioContext
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const ctx = new AudioContext();

                // Résumer le contexte (requis après une interaction utilisateur)
                ctx.resume().then(() => {
                    // Créer un oscillateur silencieux très court
                    const oscillator = ctx.createOscillator();
                    const gainNode = ctx.createGain();

                    // Volume à 0 (silencieux)
                    gainNode.gain.value = 0;

                    oscillator.connect(gainNode);
                    gainNode.connect(ctx.destination);

                    // Jouer pendant 1ms puis arrêter
                    oscillator.start(0);
                    oscillator.stop(ctx.currentTime + 0.001);

                    // Marquer comme débloqué
                    this.audioUnlocked = true;
                    this.muted = false;
                    localStorage.setItem('gdm_audio_muted', 'false');
                    this.updateIcon();
                    this.updateUnlockButton();
                    console.log('🔓 Audio débloqué avec succès (Web Audio API) !');

                    // Dépiler la queue des sons en attente
                    if (this.sfxQueue.length > 0) {
                        console.log(`🔄 Lecture différée de ${this.sfxQueue.length} SFX...`);
                        setTimeout(() => {
                            this.sfxQueue.forEach(item => {
                                this.playSFX(item.name, item.volume);
                            });
                            this.sfxQueue = [];
                        }, 100);
                    }

                    resolve(true);
                }).catch((e) => {
                    console.error('❌ Echec resume AudioContext:', e.message);
                    resolve(false);
                });
            } catch (e) {
                console.error('❌ Echec création AudioContext:', e.message);
                resolve(false);
            }
        });
    },

    // Met à jour le bouton "Activer le son" sur le portail
    updateUnlockButton() {
        if (DOM.audioUnlockBanner) {
            if (this.audioUnlocked && !this.muted) {
                DOM.audioUnlockBanner.classList.add('hidden');
            } else {
                DOM.audioUnlockBanner.classList.remove('hidden');
            }
        }
    },

    // ========== PRÉCHARGEMENT SFX ==========
    preloadAllSFX() {
        console.log('📦 Préchargement des SFX...');

        Object.entries(this.sfxMap).forEach(([name, src]) => {
            try {
                // SIMPLIFICATION: Retour aux chemins relatifs directs pour éviter les problèmes de baseURI
                // Les fichiers sont dans ./audio/ donc ça devrait marcher partout si le serveur est bien configuré à la racine
                const audio = new Audio();
                audio.preload = 'auto';
                audio.src = src;

                audio.addEventListener('canplaythrough', () => {
                    console.log(`✅ SFX chargé: ${name} (${src})`);
                });

                audio.addEventListener('error', (e) => {
                    const err = e.target.error;
                    console.error(`❌ ERREUR AUDIO "${name}":`, src);
                    console.error('Code:', err.code, 'Message:', err.message);
                    // Fallback d'urgence pour debug
                    console.warn('Tentative de lecture secours...');
                });

                // Charger le fichier
                audio.load();

                // Stocker l'instance
                this.sfxInstances[name] = audio;
            } catch (e) {
                console.error(`❌ CRASH SFX "${name}":`, e);
            }
        });
    },

    // ========== LECTURE SFX ==========
    playSFX(name, volume = 0.6) {
        if (this.muted) {
            console.log('🔇 Audio muté, SFX ignoré:', name);
            return;
        }

        // Si non débloqué, mettre en file d'attente pour lecture dès que possible
        if (!this.audioUnlocked) {
            console.warn('⏳ Audio non débloqué, SFX mis en file d\'attente:', name);
            this.sfxQueue.push({ name, volume });
            // On s'assure que le bouton de déblocage est visible
            this.updateUnlockButton();
            return;
        }

        // Anti-repeat: générer clé unique
        const sfxKey = `${currentChapterData?.id || 'unknown'}_${currentPageIndex}_${name}`;

        if (this.playedSFX.has(sfxKey)) {
            console.log('🔇 SFX déjà joué, skip:', sfxKey);
            return;
        }

        // Récupérer l'instance préchargée
        const audio = this.sfxInstances[name];

        if (!audio) {
            console.warn(`⚠️ SFX inconnu ou non préchargé: "${name}"`);
            console.log('📋 SFX disponibles:', Object.keys(this.sfxInstances).join(', '));
            return;
        }

        try {
            // Reset position et volume
            audio.currentTime = 0;

            // Cas spécial : acerRage = volume MAX + coupe la musique
            if (name === 'acerRage') {
                this.stopAmbient(); // Couper la musique de fond
                audio.volume = 1.0; // Volume MAXIMUM
                console.log('🔥 MODE RAGE ACTIVÉ - Volume MAX, musique coupée !');
            } else {
                audio.volume = Math.min(1, Math.max(0, volume * this.volume * 2));
            }

            // Lecture
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        console.log(`🔊 SFX joué: ${name}`);
                        this.playedSFX.add(sfxKey);
                    })
                    .catch(e => {
                        console.warn(`⚠️ SFX bloqué "${name}":`, e.message);
                        if (e.name === 'NotAllowedError') {
                            console.warn('🛑 Autoplay bloqué par le navigateur. Interaction requise.');
                            this.audioUnlocked = false;
                            this.updateUnlockButton();
                        }
                    });
            }
        } catch (e) {
            console.error(`❌ Erreur lecture SFX "${name}":`, e);
        }
    },

    // Reset anti-repeat (appelé au changement de chapitre)
    resetSFXHistory() {
        this.playedSFX.clear();
        console.log('🔄 Historique SFX réinitialisé');
    },

    // ========== MUSIQUE DE FOND ==========
    async playAmbient(arcId) {
        if (this.muted) {
            console.log('🔇 Audio muté, musique ignorée');
            return;
        }

        const src = this.ambientMap[arcId];
        if (!src) {
            console.warn('⚠️ ARC inconnu:', arcId);
            return;
        }

        // Si déjà en lecture du même fichier, ne rien faire
        // Attention: currentAmbientSrc est le chemin relatif, audio.src devient absolu
        // On compare donc juste si une instance existe et qu'on ne change pas d'Arc
        if (this.ambient && this.currentAmbientSrc === src && !this.ambient.paused) {
            console.log('🎵 Musique déjà en lecture:', src);
            return;
        }

        // Arrêter la musique précédente
        this.stopAmbient();

        // Construction simple
        console.log('🎵 Démarrage musique:', src);

        try {
            this.ambient = new Audio(src);
            this.ambient.loop = true;
            this.ambient.volume = 0;
            this.ambient.preload = 'auto';
            this.currentAmbientSrc = src;

            this.ambient.addEventListener('canplaythrough', () => {
                console.log('✅ Musique prête:', src);
            });

            this.ambient.addEventListener('error', (e) => {
                console.error('❌ Erreur musique:', fullUrl, e.target.error?.message || 'Erreur inconnue');
            });

            await this.ambient.play();
            console.log('▶️ Musique démarrée:', src);
            this.fadeIn(this.ambient, this.volume);
        } catch (e) {
            console.error('❌ Erreur lecture musique:', e.message);
            if (e.name === 'NotAllowedError') {
                this.audioUnlocked = false;
                this.updateUnlockButton();
            }
        }
    },

    // Alias pour compatibilité
    playArcMusic(arcName) {
        const arcId = arcName === 'arc1' ? 1 :
            arcName === 'arc2' ? 2 :
                arcName === 'arc3' ? 3 :
                    arcName === 'arc4' ? 4 :
                        arcName === 'arc5' ? 5 : 6;
        this.playAmbient(arcId);
    },

    stopAmbient() {
        if (this.ambient) {
            this.fadeOut(this.ambient, () => {
                if (this.ambient) {
                    this.ambient.pause();
                    this.ambient.currentTime = 0;
                    this.ambient = null;
                    this.currentAmbientSrc = null;
                }
            });
        }
    },

    // ========== CONTRÔLES ==========
    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('gdm_audio_muted', this.muted ? 'true' : 'false');
        this.updateIcon();

        if (this.muted) {
            this.stopAmbient();
            console.log('🔇 Audio muté');
        } else {
            console.log('🔊 Audio activé');
            if (currentArcId) {
                this.playAmbient(currentArcId);
            }
        }
    },

    updateIcon() {
        const icon = DOM.btnAudio?.querySelector('i');
        if (!icon) return;

        if (this.muted) {
            icon.className = 'fa-solid fa-volume-xmark';
            DOM.btnAudio.classList.remove('active');
        } else {
            icon.className = 'fa-solid fa-volume-high';
            DOM.btnAudio.classList.add('active');
        }
    },

    // ========== FADE IN/OUT ==========
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
    },

    fadeOut(audio, callback, duration = 500) {
        if (!audio) { if (callback) callback(); return; }
        const step = audio.volume / (duration / 50);
        const interval = setInterval(() => {
            if (!audio) { clearInterval(interval); if (callback) callback(); return; }
            if (audio.volume > step) {
                audio.volume = Math.max(0, audio.volume - step);
            } else {
                audio.volume = 0;
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50);
    }
};

// ========== CINEMA MODE ==========
const CinemaMode = {
    active: false,

    init() {
        this.active = localStorage.getItem('gdm_cinema_mode') === 'true';
        document.addEventListener('fullscreenchange', () => this.onFullscreenChange());
        document.addEventListener('webkitfullscreenchange', () => this.onFullscreenChange());
    },

    enter() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        this.activate();
    },

    exit() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        this.deactivate();
    },

    activate() {
        this.active = true;
        DOM.reader.classList.add('cinema-mode');
        DOM.btnCinema.classList.add('active');
        DOM.btnExitCinema.classList.remove('hidden');
        localStorage.setItem('gdm_cinema_mode', 'true');
    },

    deactivate() {
        this.active = false;
        DOM.reader.classList.remove('cinema-mode');
        DOM.btnCinema.classList.remove('active');
        DOM.btnExitCinema.classList.add('hidden');
        localStorage.setItem('gdm_cinema_mode', 'false');
    },

    toggle() {
        if (this.active) {
            this.exit();
        } else {
            this.enter();
        }
    },

    onFullscreenChange() {
        const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
        if (!isFullscreen && this.active) {
            this.deactivate();
        }
    }
};

// ========== STORAGE ==========
const STORAGE_KEY = 'gdm_vn_progress';

function saveProgress() {
    const data = { arc: currentArcId, chapter: currentChapterIndex, page: currentPageIndex };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) { }
}

function loadProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch (e) { return null; }
}

// ========== CHAPTER LOADING ==========
async function loadChapter(arcId, chapterIndex) {
    const cacheKey = `${arcId}_${chapterIndex}`;
    if (chapterCache.has(cacheKey)) return chapterCache.get(cacheKey);

    const arc = ARCS_CONFIG[arcId];
    const chapter = arc.chapters[chapterIndex];
    const modulePath = `${arc.folder}/${chapter.file}`;

    try {
        const module = await import(modulePath);
        chapterCache.set(cacheKey, module.default);
        return module.default;
    } catch (error) {
        console.error('Erreur chargement:', error);
        throw error;
    }
}

// ========== BLOCK RENDERERS ==========
function renderBlock(block, blockIndex = 0) {
    const tone = block.tone || 'neutral';
    const toneClass = `tone-${tone}`;
    const shakeClass = block.shake ? 'shake-animation' : '';
    const dangerGlow = tone === 'danger' ? 'danger-glow' : '';

    // Jouer SFX si défini (avec délai pour timing comique)
    if (block.sfx) {
        const delay = 400 + (blockIndex * 100); // Timing comique 400-600ms
        setTimeout(() => AudioManager.playSFX(block.sfx, 0.7), delay);
    }

    switch (block.type) {
        case 'card':
            return `<div class="block-card ${toneClass} ${shakeClass} ${dangerGlow}">
                <div class="block-card-header">
                    ${block.icon ? `<span class="block-card-icon">${block.icon}</span>` : ''}
                    ${block.title ? `<span class="block-card-title">${block.title}</span>` : ''}
                </div>
                ${block.text ? `<p class="block-card-text">${block.text}</p>` : ''}
            </div>`;
        case 'big':
            return `<div class="block-big ${toneClass} ${shakeClass} ${dangerGlow}">
                ${block.icon ? `<span class="block-big-icon">${block.icon}</span>` : ''}
                <p class="block-big-text">${block.text || ''}</p>
            </div>`;
        case 'quote':
            return `<div class="block-quote ${toneClass} ${shakeClass} ${dangerGlow}">
                <div class="block-quote-header">
                    ${block.icon ? `<span class="block-quote-icon">${block.icon}</span>` : ''}
                    <span class="block-quote-who">${block.who || ''}</span>
                </div>
                <p class="block-quote-text">${block.text || ''}</p>
            </div>`;
        case 'banner':
            const bannerItems = (block.icons || []).map((icon, i) => `
                <div class="block-banner-item">
                    <span class="block-banner-item-icon">${icon}</span>
                    ${(block.labels && block.labels[i]) ? `<span class="block-banner-item-label">${block.labels[i]}</span>` : ''}
                </div>
            `).join('');
            return `<div class="block-banner ${toneClass} ${shakeClass} ${dangerGlow}">
                <div class="block-banner-title">${block.title || ''}</div>
                ${block.subtitle ? `<div class="block-banner-subtitle">${block.subtitle}</div>` : ''}
                ${bannerItems ? `<div class="block-banner-items">${bannerItems}</div>` : ''}
            </div>`;
        case 'chips':
            const chips = (block.items || []).map(item => `
                <div class="block-chip ${toneClass}">
                    ${item.icon ? `<span class="block-chip-icon">${item.icon}</span>` : ''}
                    <span class="block-chip-label">${item.label || ''}</span>
                    ${item.sublabel ? `<span class="block-chip-sublabel">${item.sublabel}</span>` : ''}
                </div>
            `).join('');
            return `<div class="block-chips">${chips}</div>`;
        case 'stats':
            const stats = (block.items || []).map(item => `
                <div class="block-stat ${toneClass}">
                    ${item.icon ? `<span class="block-stat-icon">${item.icon}</span>` : ''}
                    <div class="block-stat-value">${item.value || ''}</div>
                    <div class="block-stat-label">${item.label || ''}</div>
                </div>
            `).join('');
            return `<div class="block-stats">${stats}</div>`;
        case 'divider':
            return `<div class="block-divider">
                <div class="block-divider-line"></div>
                ${block.text ? `<span class="block-divider-text">${block.text}</span>` : ''}
                <div class="block-divider-line"></div>
            </div>`;
        default:
            return `<div class="block-card ${toneClass}"><p class="block-card-text">${block.text || ''}</p></div>`;
    }
}

// ========== PAGE RENDERING ==========
function renderPage() {
    if (!currentChapterData || !currentChapterData.pages) return;

    const page = currentChapterData.pages[currentPageIndex];
    if (!page) return;

    DOM.pageTitle.textContent = page.pageTitle || `Page ${currentPageIndex + 1}`;

    // Passer blockIndex pour le timing des SFX
    const html = (page.blocks || []).map((block, index) => renderBlock(block, index)).join('');
    DOM.blocksContainer.innerHTML = html;

    const total = currentChapterData.pages.length;
    const current = currentPageIndex + 1;

    DOM.pageCurrent.textContent = current;
    DOM.pageTotal.textContent = total;
    DOM.progressBar.style.width = `${(current / total) * 100}%`;

    DOM.btnPrev.disabled = currentPageIndex === 0;
    DOM.btnNext.disabled = currentPageIndex >= total - 1;

    // Appeler le hook onPageChange si le chapitre en définit un
    if (currentChapterData.onPageChange && typeof currentChapterData.onPageChange === 'function') {
        currentChapterData.onPageChange(currentPageIndex);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    saveProgress();
}

// ========== NAVIGATION ==========
function showPortal() {
    CinemaMode.deactivate();
    AudioManager.stopAmbient();
    DOM.reader.classList.add('hidden');
    DOM.chapterSelect.classList.add('hidden');
    DOM.portal.classList.remove('hidden');
    document.querySelectorAll('.arc-cards').forEach(el => el.classList.remove('hidden'));
    checkResume();
}

function showChapterSelect(arcId) {
    currentArcId = arcId;
    const arc = ARCS_CONFIG[arcId];

    DOM.chapterSelectTitle.textContent = `${arc.name} — Chapitres`;

    DOM.chapterList.innerHTML = arc.chapters.map((ch, i) => `
        <div class="chapter-item" data-index="${i}">
            <span class="chapter-item-title">${ch.title}</span>
            <span class="chapter-item-arrow"><i class="fa-solid fa-chevron-right"></i></span>
        </div>
    `).join('');

    document.querySelectorAll('.arc-cards').forEach(el => el.classList.add('hidden'));
    DOM.resumeBanner.classList.add('hidden');
    DOM.chapterSelect.classList.remove('hidden');

    DOM.chapterList.querySelectorAll('.chapter-item').forEach(item => {
        item.addEventListener('click', () => {
            openChapter(arcId, parseInt(item.dataset.index));
        });
    });
}

async function openChapter(arcId, chapterIndex, pageIndex = 0) {
    currentArcId = arcId;
    currentChapterIndex = chapterIndex;
    currentPageIndex = pageIndex;

    // Reset l'historique SFX pour le nouveau chapitre
    AudioManager.resetSFXHistory();

    try {
        currentChapterData = await loadChapter(arcId, chapterIndex);

        const arc = ARCS_CONFIG[arcId];
        const chapterConfig = arc.chapters[chapterIndex];

        DOM.readerArcTitle.textContent = `${arc.name} — ${currentChapterData.chapterNumber !== undefined ? (currentChapterData.chapterNumber === 0 ? 'Prologue' : `Chapitre ${currentChapterData.chapterNumber}`) : chapterConfig.title.split('—')[0]}`;
        DOM.readerChapterTitle.textContent = currentChapterData.title || chapterConfig.title;
        DOM.readerSubtitle.textContent = currentChapterData.subtitle || '';

        DOM.portal.classList.add('hidden');
        DOM.reader.classList.remove('hidden');

        AudioManager.playAmbient(arcId);
        renderPage();
    } catch (error) {
        alert('Erreur de chargement');
        showPortal();
    }
}

function prevPage() {
    if (currentPageIndex > 0) { currentPageIndex--; renderPage(); }
}

function nextPage() {
    if (currentChapterData && currentPageIndex < currentChapterData.pages.length - 1) {
        currentPageIndex++;
        renderPage();
    }
}

function restartChapter() { currentPageIndex = 0; renderPage(); }

function goBack() {
    CinemaMode.deactivate();
    AudioManager.stopAmbient();
    DOM.reader.classList.add('hidden');
    DOM.portal.classList.remove('hidden');
    showChapterSelect(currentArcId);
}

function checkResume() {
    const progress = loadProgress();
    if (progress && progress.arc && ARCS_CONFIG[progress.arc]) {
        const arc = ARCS_CONFIG[progress.arc];
        const chapter = arc.chapters[progress.chapter];
        const pageNum = (progress.page || 0) + 1;
        DOM.resumeText.innerHTML = `Reprendre <strong>${arc.name}</strong> — ${chapter.title.split('—')[0]} (Page ${pageNum})`;
        DOM.resumeBanner.classList.remove('hidden');
    } else {
        DOM.resumeBanner.classList.add('hidden');
    }
}

async function resumeReading() {
    const progress = loadProgress();
    if (progress && progress.arc) {
        await openChapter(progress.arc, progress.chapter || 0, progress.page || 0);
    }
}

// ========== EVENTS ==========
function initEvents() {
    document.querySelectorAll('.arc-card').forEach(card => {
        card.addEventListener('click', () => showChapterSelect(parseInt(card.dataset.arc)));
    });

    DOM.btnBackPortal.addEventListener('click', showPortal);
    DOM.resumeBtn.addEventListener('click', resumeReading);
    DOM.btnBack.addEventListener('click', goBack);
    DOM.btnRestart.addEventListener('click', restartChapter);
    DOM.btnPrev.addEventListener('click', prevPage);
    DOM.btnNext.addEventListener('click', nextPage);
    DOM.btnAudio.addEventListener('click', () => AudioManager.toggleMute());
    DOM.btnCinema.addEventListener('click', () => CinemaMode.toggle());
    DOM.btnExitCinema.addEventListener('click', () => CinemaMode.exit());

    // Bouton "Activer le son" sur le portail
    if (DOM.btnUnlockAudio) {
        DOM.btnUnlockAudio.addEventListener('click', async () => {
            const success = await AudioManager.unlockAudio();
            if (success) {
                console.log('✅ Son activé !');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (DOM.reader.classList.contains('hidden')) return;
        if (e.key === 'ArrowLeft') prevPage();
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'Escape') CinemaMode.active ? CinemaMode.exit() : goBack();
        if (e.key === 'Home') restartChapter();
        if (e.key === 'f' || e.key === 'F') CinemaMode.toggle();
    });
}

// ========== INIT ==========
function init() {
    console.log('📖 La Guerre des Marques — Visual Novel');
    AudioManager.init();
    CinemaMode.init();
    initEvents();
    checkResume();

    // Exposer AudioManager globalement pour les chapitres (onPageChange hooks)
    window.AudioManager = AudioManager;

    console.log('✅ Prêt');
}

init();
