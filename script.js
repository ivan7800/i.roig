(() => {
  'use strict';

  const storage = {
    get(key, fallback = null) {
      try {
        const value = window.localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        // La web sigue funcionando aunque el navegador bloquee localStorage.
      }
    }
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  const closeMenu = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = nav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || navToggle.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const backToTop = document.querySelector('#backToTop');
  if (backToTop) {
    const toggleVisibility = () => backToTop.classList.toggle('visible', window.scrollY > 480);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('visible'));
  }

  const bgMusic = document.querySelector('#bgMusic');
  const musicToggle = document.querySelector('#musicToggle');
  const musicVolume = document.querySelector('#musicVolume');

  if (bgMusic && musicToggle && musicVolume) {
    const savedVolume = Number(storage.get('iroig_music_volume', '0.25'));
    const safeVolume = Number.isFinite(savedVolume) ? clamp(savedVolume, 0, 1) : 0.25;
    const savedEnabled = storage.get('iroig_music_enabled', 'false') === 'true';

    bgMusic.volume = safeVolume;
    musicVolume.value = String(safeVolume);

    const updateMusicButton = () => {
      const playing = !bgMusic.paused && !bgMusic.ended;
      const label = musicToggle.querySelector('.music-label');
      musicToggle.classList.toggle('playing', playing);
      musicToggle.setAttribute('aria-pressed', String(playing));
      musicToggle.setAttribute('title', playing ? 'Pausar música ambiental' : 'Activar música ambiental');
      if (label) label.textContent = playing ? 'Pausar atmósfera' : 'Activar atmósfera';
    };

    const playMusic = async () => {
      try {
        await bgMusic.play();
        storage.set('iroig_music_enabled', 'true');
      } catch {
        storage.set('iroig_music_enabled', 'false');
      } finally {
        updateMusicButton();
      }
    };

    musicToggle.addEventListener('click', () => {
      if (bgMusic.paused) {
        playMusic();
      } else {
        bgMusic.pause();
        storage.set('iroig_music_enabled', 'false');
        updateMusicButton();
      }
    });

    musicVolume.addEventListener('input', () => {
      const nextVolume = clamp(Number(musicVolume.value), 0, 1);
      bgMusic.volume = nextVolume;
      musicVolume.value = String(nextVolume);
      storage.set('iroig_music_volume', String(nextVolume));
    });

    bgMusic.addEventListener('play', updateMusicButton);
    bgMusic.addEventListener('pause', updateMusicButton);
    bgMusic.addEventListener('error', () => {
      storage.set('iroig_music_enabled', 'false');
      updateMusicButton();
    });

    document.addEventListener('pointerdown', () => {
      if (savedEnabled && bgMusic.paused) playMusic();
    }, { once: true });

    updateMusicButton();
  }
})();
