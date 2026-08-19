'use strict';

(() => {
  const messages = {
    nl: {
      prompt: 'Nog {count} keer klikken voor een verrassing...',
      countdown: 'Nog {count}... blijf klikken!',
      success: 'Make it rain!',
      encore: 'Nog meer geldregen!',
    },
    en: {
      prompt: 'Tap {count} more times for a surprise...',
      countdown: '{count} to go... keep tapping!',
      success: 'Make it rain!',
      encore: 'More money rain!',
    },
    fr: {
      prompt: 'Cliquez encore {count} fois pour une surprise...',
      countdown: 'Encore {count}... continuez !',
      success: 'Make it rain!',
      encore: 'Encore une pluie d\'argent !',
    },
  };

  const resolveLang = () => {
    const lang = (document.documentElement.lang || 'nl').slice(0, 2).toLowerCase();
    return messages[lang] ? lang : 'nl';
  };

  const format = (template, replacements = {}) => Object.entries(replacements)
    .reduce((text, [name, value]) => text.replace(`{${name}}`, String(value)), template);

  const getText = (key, replacements = {}) => {
    const lang = resolveLang();
    return format(messages[lang][key] || messages.nl[key] || key, replacements);
  };

  const initHoneymoonEasterEgg = () => {
    const trigger = document.querySelector('[data-honeymoon-easter-egg]');
    if (!trigger) return;

    const unlockPresses = 3;
    const bonusPresses = 4;
    let totalPresses = 0;
    let bonusProgress = 0;
    let completed = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let toastTimer;
    const toast = document.createElement('div');
    toast.className = 'easter-egg-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);

    const showToast = (message) => {
      toast.textContent = message;
      toast.classList.add('is-visible');
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1800);
    };

    const rainLayer = document.createElement('div');
    rainLayer.className = 'money-rain-layer';
    rainLayer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(rainLayer);

    const moneySymbols = ['💸', '€', '$'];
    const triggerMoneyRain = (amount) => {
      if (reduceMotion) return;

      for (let index = 0; index < amount; index += 1) {
        const note = document.createElement('span');
        note.className = 'money-note';
        note.textContent = moneySymbols[Math.floor(Math.random() * moneySymbols.length)];
        note.style.left = `${Math.random() * 100}%`;
        note.style.animationDuration = `${4 + Math.random() * 2.2}s`;
        note.style.animationDelay = `${Math.random() * 0.45}s`;
        note.style.fontSize = `${1 + Math.random() * 1.1}rem`;
        note.style.opacity = `${0.55 + Math.random() * 0.45}`;
        rainLayer.appendChild(note);
        window.setTimeout(() => note.remove(), 7600);
      }
    };

    trigger.addEventListener('click', () => {
      totalPresses += 1;

      if (completed) {
        triggerMoneyRain(12);
        showToast(getText('encore'));
        return;
      }

      if (totalPresses === unlockPresses) {
        showToast(getText('prompt', { count: bonusPresses }));
        return;
      }

      if (totalPresses > unlockPresses) {
        bonusProgress += 1;
        const remaining = Math.max(0, bonusPresses - bonusProgress);
        const isFinalPress = remaining === 0;

        if (isFinalPress) {
          completed = true;
          showToast(getText('success'));
          window.setTimeout(() => triggerMoneyRain(30), 120);
        } else {
          showToast(getText('countdown', { count: remaining }));
        }
      }
    });
  };

  document.addEventListener('DOMContentLoaded', initHoneymoonEasterEgg);
})();
