'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Countdown to the wedding
     ------------------------------------------------------------------ */
  const initCountdown = () => {
    const weddingDate = new Date('2027-07-15T14:30:00+02:00').getTime();
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');
    const messageEl = document.getElementById('countdown-message');
    const container = document.getElementById('countdown-container');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !container) {
      return;
    }

    let intervalId = null;

    const render = (days, hours, minutes, seconds) => {
      daysEl.textContent = String(Math.max(0, days));
      hoursEl.textContent = String(Math.max(0, hours)).padStart(2, '0');
      minutesEl.textContent = String(Math.max(0, minutes)).padStart(2, '0');
      secondsEl.textContent = String(Math.max(0, seconds)).padStart(2, '0');
    };

    const tick = () => {
      const now = Date.now();
      const distance = weddingDate - now;

      if (distance <= 0) {
        render(0, 0, 0, 0);
        if (messageEl) {
          messageEl.textContent = 'Today is the day!';
        }
        if (intervalId !== null) {
          window.clearInterval(intervalId);
          intervalId = null;
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      render(days, hours, minutes, seconds);
    };

    tick();
    intervalId = window.setInterval(tick, 1000);
  };

  /* ------------------------------------------------------------------
     Close offcanvas menu when a nav link is clicked
     ------------------------------------------------------------------ */
  const initOffcanvasClose = () => {
    const offcanvasEl = document.getElementById('offcanvasNav');
    if (!offcanvasEl || typeof bootstrap === 'undefined') {
      return;
    }

    const navLinks = offcanvasEl.querySelectorAll('a.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
        instance.hide();
      });
    });
  };

  /* ------------------------------------------------------------------
     Timeline reveal animation + progress illumination
     ------------------------------------------------------------------ */
  const initTimelineReveal = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const progressEl = document.querySelector('.timeline-progress');
    const timelineEl = document.querySelector('.timeline');

    if (timelineItems.length === 0) {
      return;
    }

    if (prefersReducedMotion) {
      timelineItems.forEach((item) => item.classList.add('is-visible'));
    } else if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.2 }
      );
      timelineItems.forEach((item) => observer.observe(item));
    } else {
      timelineItems.forEach((item) => item.classList.add('is-visible'));
    }

    if (progressEl && timelineEl) {
      const updateProgress = () => {
        const rect = timelineEl.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrolled = viewportHeight - rect.top;
        const total = rect.height;
        const ratio = Math.min(1, Math.max(0, scrolled / total));
        progressEl.style.height = `${ratio * 100}%`;
      };

      updateProgress();
      window.addEventListener('scroll', updateProgress, { passive: true });
      window.addEventListener('resize', updateProgress);
    }
  };

  /* ------------------------------------------------------------------
     Gallery filtering
     ------------------------------------------------------------------ */
  const initGalleryFilter = () => {
    const filterButtons = document.querySelectorAll('.gallery-filters [data-filter]');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length === 0 || galleryItems.length === 0) {
      return;
    }

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        galleryItems.forEach((item) => {
          const category = item.getAttribute('data-category');
          const shouldShow = filter === 'all' || category === filter;
          item.classList.toggle('d-none', !shouldShow);
        });
      });
    });
  };

  /* ------------------------------------------------------------------
     Gallery lightbox modal with prev/next navigation
     ------------------------------------------------------------------ */
  const initGalleryLightbox = () => {
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const modalEl = document.getElementById('galleryModal');

    if (galleryItems.length === 0 || !modalEl || typeof bootstrap === 'undefined') {
      return;
    }

    const modalImage = document.getElementById('galleryModalImage');
    const modalCaption = document.getElementById('galleryModalCaption');
    const prevBtn = document.getElementById('galleryModalPrev');
    const nextBtn = document.getElementById('galleryModalNext');
    const modalInstance = new bootstrap.Modal(modalEl);

    let currentIndex = 0;

    const getVisibleItems = () => galleryItems.filter(el => !el.classList.contains('d-none'));

    const showItem = (index) => {
      const visible = getVisibleItems();
      if (visible.length === 0) return;
      const total = visible.length;
      currentIndex = ((index % total) + total) % total;
      const item = visible[currentIndex];
      const img = item.querySelector('img');

      if (modalImage && img) {
        modalImage.src = img.getAttribute('src') || '';
        modalImage.alt = img.getAttribute('alt') || '';
      }
      if (modalCaption) {
        const captionEl = item.querySelector('.gallery-caption');
        modalCaption.textContent = captionEl ? captionEl.textContent.trim() : '';
      }
    };

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const visible = getVisibleItems();
        const idx = visible.indexOf(item);
        if (idx >= 0) {
          showItem(idx);
          modalInstance.show();
        }
      });
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const visible = getVisibleItems();
          const idx = visible.indexOf(item);
          if (idx >= 0) {
            showItem(idx);
            modalInstance.show();
          }
        }
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showItem(currentIndex + 1));
    }

    modalEl.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        showItem(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        showItem(currentIndex + 1);
      }
    });
  };

  /* ------------------------------------------------------------------
     Back-to-top button
     ------------------------------------------------------------------ */
  const initBackToTop = () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) {
      return;
    }

    const toggleVisibility = () => {
      backToTopBtn.classList.toggle('is-visible', window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  };

  /* ------------------------------------------------------------------
     Dynamic copyright year
     ------------------------------------------------------------------ */
  const initCopyrightYear = () => {
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  };

  /* ------------------------------------------------------------------
     Navbar scroll shadow toggle
     ------------------------------------------------------------------ */
  const initNavbarScrollState = () => {
    const navbar = document.querySelector('.navbar-wedding');
    if (!navbar) {
      return;
    }
    const toggleScrolled = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  };

  /* ------------------------------------------------------------------
     Init all
     ------------------------------------------------------------------ */
  initCountdown();
  initOffcanvasClose();
  initTimelineReveal();
  initGalleryFilter();
  initGalleryLightbox();
  initBackToTop();
  initCopyrightYear();
  initNavbarScrollState();
});
