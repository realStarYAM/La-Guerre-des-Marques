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
            { file: 'ARC1_04-chapitre3.js', title: 'Chapitre 3 — Le Silence Après la Guerre' }
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

// ========== AUDIO MANAGER ==========
const AudioManager = {
    ambient: null,
    effect: null,
    muted: true,
    volume: 0.25,
    audioReady: false,

    init() {
        this.muted = localStorage.getItem('gdm_audio_muted') !== 'false';
        this.updateIcon();
        console.log('🔊 AudioManager initialisé, muted:', this.muted);
    },

    async playAmbient(arcId) {
        console.log('🎵 playAmbient appelé - arcId:', arcId, 'muted:', this.muted);
        if (this.muted) {
            console.log('🔇 Audio muté, pas de lecture');
            return;
        }
        this.stopAmbient();
        const src = arcId === 1 ? './audio/arc1.mp3' : './audio/arc2.mp3';
        console.log('🎵 Tentative de lecture:', src);
        try {
            this.ambient = new Audio(src);
            this.ambient.loop = true;
            this.ambient.volume = 0;

            // Ajouter des listeners pour le diagnostic
            this.ambient.addEventListener('canplaythrough', () => {
                console.log('✅ Audio prêt à jouer');
                this.audioReady = true;
            });
            this.ambient.addEventListener('error', (e) => {
                console.error('❌ Erreur audio:', e.target.error);
            });

            await this.ambient.play();
            console.log('▶️ Lecture audio démarrée');
            this.fadeIn(this.ambient, this.volume);
        } catch (e) {
            console.error('❌ Erreur lecture audio:', e.message, e);
        }
    },

    stopAmbient() {
        if (this.ambient) {
            this.fadeOut(this.ambient, () => {
                this.ambient.pause();
                this.ambient = null;
            });
        }
    },

    playEffect(tone) {
        if (this.muted) return;
        const effects = {
            danger: './audio/shock.mp3',
            mystery: './audio/glitch.mp3',
            life: './audio/heartbeat.mp3'
        };
        const src = effects[tone];
        if (!src) return;
        if (this.effect) { this.effect.pause(); this.effect = null; }
        try {
            this.effect = new Audio(src);
            this.effect.volume = this.volume * 0.6;
            this.effect.play();
        } catch (e) { }
    },

    toggleMute() {
        this.muted = !this.muted;
        localStorage.setItem('gdm_audio_muted', this.muted ? 'true' : 'false');
        this.updateIcon();
        if (this.muted) {
            this.stopAmbient();
        } else if (currentArcId) {
            this.playAmbient(currentArcId);
        }
    },

    updateIcon() {
        const icon = DOM.btnAudio.querySelector('i');
        if (this.muted) {
            icon.className = 'fa-solid fa-volume-xmark';
            DOM.btnAudio.classList.remove('active');
        } else {
            icon.className = 'fa-solid fa-volume-high';
            DOM.btnAudio.classList.add('active');
        }
    },

    fadeIn(audio, targetVol, duration = 1000) {
        const step = targetVol / (duration / 50);
        const interval = setInterval(() => {
            if (audio.volume < targetVol - step) {
                audio.volume = Math.min(audio.volume + step, targetVol);
            } else {
                audio.volume = targetVol;
                clearInterval(interval);
            }
        }, 50);
    },

    fadeOut(audio, callback, duration = 500) {
        const step = audio.volume / (duration / 50);
        const interval = setInterval(() => {
            if (audio.volume > step) {
                audio.volume -= step;
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
function renderBlock(block) {
    const tone = block.tone || 'neutral';
    const toneClass = `tone-${tone}`;

    // Jouer effet sonore selon le tone
    if (block.tone === 'danger' || block.tone === 'mystery' || block.tone === 'life') {
        setTimeout(() => AudioManager.playEffect(block.tone), 200);
    }

    switch (block.type) {
        case 'card':
            return `<div class="block-card ${toneClass}">
                <div class="block-card-header">
                    ${block.icon ? `<span class="block-card-icon">${block.icon}</span>` : ''}
                    ${block.title ? `<span class="block-card-title">${block.title}</span>` : ''}
                </div>
                ${block.text ? `<p class="block-card-text">${block.text}</p>` : ''}
            </div>`;
        case 'big':
            return `<div class="block-big ${toneClass}">
                ${block.icon ? `<span class="block-big-icon">${block.icon}</span>` : ''}
                <p class="block-big-text">${block.text || ''}</p>
            </div>`;
        case 'quote':
            return `<div class="block-quote ${toneClass}">
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
            return `<div class="block-banner ${toneClass}">
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

    const html = (page.blocks || []).map(renderBlock).join('');
    DOM.blocksContainer.innerHTML = html;

    const total = currentChapterData.pages.length;
    const current = currentPageIndex + 1;

    DOM.pageCurrent.textContent = current;
    DOM.pageTotal.textContent = total;
    DOM.progressBar.style.width = `${(current / total) * 100}%`;

    DOM.btnPrev.disabled = currentPageIndex === 0;
    DOM.btnNext.disabled = currentPageIndex >= total - 1;

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
    console.log('✅ Prêt');
}

init();
