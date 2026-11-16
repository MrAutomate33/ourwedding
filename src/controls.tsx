import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  AriaLiveAnnouncer, Button, Carousel, CarouselButton, CarouselCard, CarouselNav, CarouselNavButton,
  CarouselSlider, CarouselViewport, DrawerBody, DrawerHeader, DrawerHeaderTitle, FluentProvider,
  Menu, MenuButton, MenuItemLink, MenuItemRadio, MenuList, MenuPopover, MenuTrigger,
  OverlayDrawer, ProgressBar, Tab, TabList,
} from '@fluentui/react-components';
import {
  ArrowUpRegular, DismissRegular, MicRegular, NavigationRegular, PauseRegular, PlayRegular, WeatherSquallsRegular,
} from '@fluentui/react-icons';
import { weddingTheme } from './theme';
import './controls.css';

type Language = 'nl' | 'en' | 'fr';
type SiteBridge = {
  getLanguage: () => Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
};

declare global {
  interface Window { weddingSite?: SiteBridge }
}

const ui = {
  nl: {
    language: 'Taal kiezen', menu: 'Menu openen', close: 'Sluiten', top: 'Terug naar boven', wind: 'Windkracht',
    proposalPhotos: 'Foto’s van het aanzoek', previousPhoto: 'Vorige foto', nextPhoto: 'Volgende foto',
    pausePhotos: 'Diavoorstelling pauzeren', playPhotos: 'Diavoorstelling afspelen', showPhoto: 'Toon foto',
    photoNavigation: 'Kies een foto', photoCount: (index: number, total: number) => `Foto ${index} van ${total}`,
  },
  en: {
    language: 'Choose language', menu: 'Open menu', close: 'Close', top: 'Back to top', wind: 'Wind strength',
    proposalPhotos: 'Proposal photos', previousPhoto: 'Previous photo', nextPhoto: 'Next photo',
    pausePhotos: 'Pause slideshow', playPhotos: 'Play slideshow', showPhoto: 'Show photo',
    photoNavigation: 'Choose a photo', photoCount: (index: number, total: number) => `Photo ${index} of ${total}`,
  },
  fr: {
    language: 'Choisir la langue', menu: 'Ouvrir le menu', close: 'Fermer', top: 'Retour en haut', wind: 'Force du vent',
    proposalPhotos: 'Photos de la demande', previousPhoto: 'Photo précédente', nextPhoto: 'Photo suivante',
    pausePhotos: 'Mettre le diaporama en pause', playPhotos: 'Lire le diaporama', showPhoto: 'Afficher la photo',
    photoNavigation: 'Choisir une photo', photoCount: (index: number, total: number) => `Photo ${index} sur ${total}`,
  },
};

const proposalPhotoAlts: Record<Language, readonly string[]> = {
  nl: [
    'Mariëlle laat haar verlovingsring zien na het aanzoek',
    'Mariëlle en Jérémy tijdens het aanzoek bij Kerlingarfjöll',
    'Het kleurrijke landschap van Kerlingarfjöll, IJsland',
    'Het aanzoeklandschap bij Kerlingarfjöll, IJsland',
  ],
  en: [
    'Mariëlle shows her engagement ring after the proposal',
    'Mariëlle and Jérémy during the proposal at Kerlingarfjöll',
    'The colourful landscape of Kerlingarfjöll, Iceland',
    'The landscape where the proposal took place at Kerlingarfjöll, Iceland',
  ],
  fr: [
    'Mariëlle montre sa bague de fiançailles après la demande',
    'Mariëlle et Jérémy lors de la demande à Kerlingarfjöll',
    'Le paysage coloré de Kerlingarfjöll, en Islande',
    'Le paysage de la demande à Kerlingarfjöll, en Islande',
  ],
};

function IslandProvider({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <FluentProvider theme={weddingTheme} className={`fluent-provider ${className}`}
    style={{ backgroundColor: 'transparent', color: 'inherit', textAlign: 'inherit' }}>
    {children}
  </FluentProvider>;
}

function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => window.weddingSite?.getLanguage() ?? 'nl');
  useEffect(() => {
    const update = () => setLanguage(window.weddingSite?.getLanguage() ?? 'nl');
    document.addEventListener('language-changed', update);
    update();
    return () => document.removeEventListener('language-changed', update);
  }, []);
  const t = (key: string, fallback = key) => {
    const value = window.weddingSite?.translate(key);
    return value && value !== key ? value : fallback;
  };
  return { language, t, labels: ui[language] };
}

function LanguageMenu({ onDark = true }: { onDark?: boolean }) {
  const { language, labels } = useLanguage();
  return (
    <Menu checkedValues={{ language: [language] }} onCheckedValueChange={(_, data) => {
      const selected = data.checkedItems[0];
      if (selected === 'nl' || selected === 'en' || selected === 'fr') window.weddingSite?.setLanguage(selected);
    }}>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton className={`fluent-language-button${onDark ? '' : ' fluent-on-light'}`}
          appearance="secondary" aria-label={labels.language}>
          <span className={`lang-flag flag-${language === 'en' ? 'us' : language}`} aria-hidden="true" />
          {language.toUpperCase()}
        </MenuButton>
      </MenuTrigger>
      <MenuPopover className="fluent-menu-surface">
        <MenuList>
          <MenuItemRadio name="language" value="nl">Nederlands</MenuItemRadio>
          <MenuItemRadio name="language" value="en">English</MenuItemRadio>
          <MenuItemRadio name="language" value="fr">Français</MenuItemRadio>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

const primaryNavigation = [
  ['#home', 'nav.home', 'Home'], ['#our-story', 'nav.story', 'Ons verhaal'],
  ['#journey', 'nav.journey', 'Onze reis'], ['#proposal', 'nav.proposal', 'Het aanzoek'],
  ['#wedding-day', 'nav.wedding', 'Trouwdag'],
] as const;
const moreNavigation = [
  ['#location', 'nav.location', 'Locatie'], ['dresscode.html', 'nav.dresscode', 'Dresscode'],
  ['#gifts', 'nav.gifts', 'Cadeaus'], ['accommodation.html', 'nav.accommodation', 'Overnachting'],
  ['#ceremony-masters', 'nav.ceremony', 'Ceremoniemeesters'],
] as const;

function Navigation() {
  const { t, labels } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    const update = () => {
      let selected = '#home';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) selected = `#${section.id}`;
      }
      setActive(selected);
    };
    const close = () => setOpen(false);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('hashchange', close);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('hashchange', close);
    };
  }, []);
  const navLink = ([href, key, fallback]: readonly [string, string, string]) => (
    <Button as="a" key={href} href={href} appearance="secondary" className="fluent-nav-link"
      aria-current={active === href ? 'location' : undefined} onClick={() => setOpen(false)}>
      {t(key, fallback)}
    </Button>
  );
  return (
    <div className="container fluent-navigation">
      <a className="navbar-brand" href="#home">M &amp; J · 2027</a>
      <div className="fluent-desktop-navigation">
        {primaryNavigation.map(navLink)}
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton appearance="secondary" className="fluent-nav-link">{t('nav.more', 'Meer')}</MenuButton>
          </MenuTrigger>
          <MenuPopover className="fluent-menu-surface">
            <MenuList>{moreNavigation.map(([href, key, fallback]) => (
              <MenuItemLink href={href} key={href}>{t(key, fallback)}</MenuItemLink>
            ))}</MenuList>
          </MenuPopover>
        </Menu>
        <Button as="a" href="#rsvp" appearance="primary">{t('nav.rsvp', 'RSVP')}</Button>
        <LanguageMenu />
      </div>
      <Button className="fluent-mobile-menu-button" appearance="secondary" icon={<NavigationRegular />}
        aria-label={labels.menu} aria-expanded={open} onClick={() => setOpen(true)} />
      <OverlayDrawer open={open} onOpenChange={(_, data) => setOpen(data.open)}
        position="end" className="fluent-navigation-drawer">
        <DrawerHeader>
          <DrawerHeaderTitle action={<Button appearance="secondary" icon={<DismissRegular />}
            aria-label={labels.close} onClick={() => setOpen(false)} />}>M &amp; J · 2027</DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          <nav className="fluent-mobile-navigation" aria-label={labels.menu}>
            {primaryNavigation.map(navLink)}
            {navLink(['#rsvp', 'nav.rsvp', 'RSVP'])}
            {moreNavigation.map(navLink)}
          </nav>
          <LanguageMenu onDark={false} />
        </DrawerBody>
      </OverlayDrawer>
    </div>
  );
}

type AnchorSpec = {
  href: string; label: string; translationKey?: string; target?: string; rel?: string;
  appearance: 'primary' | 'secondary'; size: 'small' | 'medium' | 'large'; light: boolean;
};

function AnchorButton({ spec }: { spec: AnchorSpec }) {
  const { t } = useLanguage();
  return <Button as="a" href={spec.href} target={spec.target} rel={spec.rel}
    appearance={spec.appearance} size={spec.size} className={spec.light ? 'fluent-on-dark' : undefined}>
    {spec.translationKey ? t(spec.translationKey, spec.label) : spec.label}
  </Button>;
}

function RsvpButton({ iframe, container }: { iframe: HTMLIFrameElement; container: HTMLElement }) {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(Boolean(iframe.getAttribute('src')));
  if (loaded) return null;
  return <Button appearance="primary" onClick={() => {
    if (iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
      container.classList.add('is-loaded');
      setLoaded(true);
    }
  }}>{t('rsvp.load', 'Toon RSVP-formulier')}</Button>;
}

function DresscodeTabs({ panels }: { panels: HTMLElement[] }) {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(() => {
    try { return localStorage.getItem('wedding-dresscode-tab') === 'dresscode-tab-him' ? 'him' : 'her'; }
    catch { return 'her'; }
  });
  useEffect(() => {
    for (const panel of panels) {
      const visible = panel.id === `dresscode-pane-${selected}`;
      panel.hidden = !visible;
      panel.classList.toggle('show', visible);
      panel.classList.toggle('active', visible);
    }
  }, [selected, panels]);
  return <TabList appearance="transparent" size="medium" reserveSelectedTabSpace selectedValue={selected} onTabSelect={(_, data) => {
    const next = data.value === 'him' ? 'him' : 'her';
    setSelected(next);
    try { localStorage.setItem('wedding-dresscode-tab', `dresscode-tab-${next}`); } catch { /* Storage is optional. */ }
  }} aria-label={t('dresscode.selector.label', 'Bekijk dresscode voor')}>
    <Tab value="her" id="dresscode-tab-her" aria-controls="dresscode-pane-her">{t('dresscode.selector.her', 'Haar')}</Tab>
    <Tab value="him" id="dresscode-tab-him" aria-controls="dresscode-pane-him">{t('dresscode.selector.him', 'Hem')}</Tab>
  </TabList>;
}

function BackToTop() {
  const { labels } = useLanguage();
  const [visible, setVisible] = useState(window.scrollY > 300);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return visible ? <Button id="backToTop" className="fluent-back-to-top" appearance="primary"
    icon={<ArrowUpRegular />} aria-label={labels.top} onClick={() => window.scrollTo({
      top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })} /> : null;
}

type ProposalPhoto = {
  src: string; srcSet?: string; sizes?: string; alt: string; width: number; height: number;
  sources: { type?: string; srcSet: string; sizes?: string }[];
};

function ProposalCarousel({ photos }: { photos: ProposalPhoto[] }) {
  const { language, labels } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
  const [dimensions, setDimensions] = useState(() => photos.map(({ width, height }) => ({ width, height })));
  const imageRefs = useRef<Array<HTMLImageElement | null>>([]);
  const suspended = hovered || focused || hidden;
  const isPortrait = (index: number) => dimensions[index]?.height > dimensions[index]?.width;
  const recordDimensions = (index: number, image: HTMLImageElement) => {
    if (!image.naturalWidth || !image.naturalHeight) return;
    setDimensions((current) => {
      if (current[index]?.width === image.naturalWidth && current[index]?.height === image.naturalHeight) return current;
      return current.map((size, itemIndex) => itemIndex === index
        ? { width: image.naturalWidth, height: image.naturalHeight } : size);
    });
  };

  useEffect(() => {
    imageRefs.current.forEach((image, index) => {
      if (image?.complete) recordDimensions(index, image);
    });
  }, [photos]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      setReducedMotion(preference.matches);
      if (preference.matches) setPlaying(false);
    };
    const updateVisibility = () => setHidden(document.hidden);
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updatePreference);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!playing || suspended || photos.length < 2) return;
    const timer = window.setTimeout(() => setActiveIndex((index) => (index + 1) % photos.length), 5000);
    return () => window.clearTimeout(timer);
  }, [playing, suspended, activeIndex, photos.length]);

  return <AriaLiveAnnouncer><Carousel className="proposal-carousel" activeIndex={activeIndex}
    onActiveIndexChange={(_, data) => setActiveIndex(data.index)} circular groupSize={1} align="center" draggable
    announcement={(index, total) => playing && !suspended ? '' : labels.photoCount(index + 1, total)}
    motion={reducedMotion ? { kind: 'slide', duration: 0 } : 'slide'} aria-label={labels.proposalPhotos}
    data-active-slide={activeIndex + 1} data-portrait={isPortrait(activeIndex)}
    data-autoplay={playing ? suspended ? 'paused' : 'playing' : 'off'}
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
    }}>
    <CarouselViewport className="proposal-carousel-viewport">
      <CarouselSlider cardFocus>
        {photos.map((photo, index) => <CarouselCard key={photo.src} id={`proposal-photo-${index + 1}`}
          autoSize className="proposal-carousel-card" data-portrait={isPortrait(index)}
          style={{ width: `min(calc(100% - 0.75rem), calc(var(--proposal-photo-height) * ${
            dimensions[index]?.width && dimensions[index]?.height
              ? dimensions[index].width / dimensions[index].height : 1
          }))` }}
          aria-label={labels.photoCount(index + 1, photos.length)}>
          <div className="proposal-carousel-frame">
            <picture className="proposal-carousel-main">
              {photo.sources.map((source) => <source key={source.srcSet} type={source.type}
                srcSet={source.srcSet} sizes={source.sizes} />)}
              <img className="proposal-carousel-image" src={photo.src} srcSet={photo.srcSet} sizes={photo.sizes}
                width={photo.width || undefined} height={photo.height || undefined}
                ref={(image) => { imageRefs.current[index] = image; }}
                onLoad={(event) => recordDimensions(index, event.currentTarget)}
                alt={proposalPhotoAlts[language][index] ?? photo.alt} loading="lazy" decoding="async" draggable={false} />
            </picture>
          </div>
        </CarouselCard>)}
      </CarouselSlider>
    </CarouselViewport>
    <div className="proposal-carousel-controls">
      <CarouselButton navType="prev" appearance="secondary" shape="circular" size="large"
        aria-label={labels.previousPhoto} />
      <CarouselNav aria-label={labels.photoNavigation}>
        {(index) => <CarouselNavButton aria-label={`${labels.showPhoto} ${index + 1}`} />}
      </CarouselNav>
      <CarouselButton navType="next" appearance="secondary" shape="circular" size="large"
        aria-label={labels.nextPhoto} />
      <Button appearance="secondary" shape="circular" size="large" icon={playing ? <PauseRegular /> : <PlayRegular />}
        aria-label={playing ? labels.pausePhotos : labels.playPhotos} aria-pressed={playing}
        onClick={() => setPlaying((enabled) => !enabled)} />
    </div>
  </Carousel></AriaLiveAnnouncer>;
}

function WindControls({ game, meter, status }: { game: HTMLElement; meter: HTMLElement; status: HTMLElement }) {
  const { t, labels } = useLanguage();
  const [level, setLevel] = useState(0);
  const [listening, setListening] = useState(false);
  const [requesting, setRequesting] = useState(false);
  const [statusKey, setStatusKey] = useState('wind.status_ready');
  const resources = useRef<{
    stream?: MediaStream; audio?: AudioContext; frame?: number; fallback?: number; reset?: number;
    level: number; won: boolean; requesting: boolean; generation: number;
  }>({ level: 0, won: false, requesting: false, generation: 0 });

  const stopInput = () => {
    const state = resources.current;
    state.generation += 1;
    state.requesting = false;
    setRequesting(false);
    if (state.frame !== undefined) cancelAnimationFrame(state.frame);
    if (state.fallback !== undefined) clearInterval(state.fallback);
    state.stream?.getTracks().forEach((track) => track.stop());
    if (state.audio) void state.audio.close().catch(() => undefined);
    state.stream = undefined;
    state.audio = undefined;
    state.frame = undefined;
    state.fallback = undefined;
    setListening(false);
  };
  const update = (value: number) => {
    const state = resources.current;
    if (state.won) return;
    state.level = Math.max(0, Math.min(100, value));
    if (state.level >= 65) {
      state.level = 100;
      state.won = true;
      stopInput();
      setStatusKey('wind.status_success');
      state.reset = window.setTimeout(() => {
        state.won = false;
        state.level = 0;
        setLevel(0);
        setStatusKey('wind.status_ready');
      }, 4000);
    }
    setLevel(state.level);
  };
  const reset = () => {
    stopInput();
    const state = resources.current;
    clearTimeout(state.reset);
    state.won = false;
    state.level = 0;
    setLevel(0);
    setStatusKey('wind.status_ready');
  };
  useEffect(() => {
    game.classList.toggle('is-windy', level > 14);
    game.classList.toggle('is-won', resources.current.won);
    game.classList.toggle('is-listening', listening);
    game.style.setProperty('--wind-level', `${level}%`);
  }, [game, level, listening]);
  useEffect(() => {
    const onVisibility = () => { if (document.hidden) reset(); };
    window.addEventListener('pagehide', reset);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('pagehide', reset);
      document.removeEventListener('visibilitychange', onVisibility);
      stopInput();
      clearTimeout(resources.current.reset);
    };
  }, []);
  const startFallback = () => {
    const state = resources.current;
    if (state.won || state.fallback !== undefined) return;
    stopInput();
    setStatusKey('wind.status_ready');
    update(55);
    state.fallback = window.setInterval(() => update(85), 100);
  };
  const stopFallback = () => {
    const state = resources.current;
    if (state.fallback === undefined) return;
    clearInterval(state.fallback);
    state.fallback = undefined;
    if (!state.won) update(0);
  };
  const startMicrophone = async () => {
    const state = resources.current;
    if (state.won || state.requesting || state.stream) return;
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatusKey('wind.status_unavailable');
      return;
    }
    state.requesting = true;
    setRequesting(true);
    const generation = state.generation;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (state.generation !== generation) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      state.stream = stream;
      state.audio = new AudioContext();
      await state.audio.resume();
      if (state.generation !== generation) return;
      const analyser = state.audio.createAnalyser();
      analyser.fftSize = 512;
      state.audio.createMediaStreamSource(stream).connect(analyser);
      const samples = new Uint8Array(analyser.fftSize);
      setListening(true);
      setStatusKey('wind.status_listening');
      const sample = () => {
        if (state.won || state.generation !== generation) return;
        analyser.getByteTimeDomainData(samples);
        const average = samples.reduce((sum, value) => sum + Math.abs(value - 128), 0) / samples.length;
        const detected = Math.min(100, Math.max(0, (average - 12) * 7));
        update(state.level * 0.2 + detected * 0.8);
        if (!state.won) state.frame = requestAnimationFrame(sample);
      };
      sample();
    } catch {
      if (state.generation === generation) {
        stopInput();
        setStatusKey('wind.status_unavailable');
      }
    } finally {
      if (state.generation === generation) {
        state.requesting = false;
        setRequesting(false);
      }
    }
  };
  return <>
    {createPortal(<IslandProvider>
      <ProgressBar value={level} max={100} thickness="large" aria-label={labels.wind} />
    </IslandProvider>, meter)}
    {createPortal(t(statusKey), status)}
    <Button appearance="primary" icon={<MicRegular />} disabled={listening || requesting || resources.current.won}
      onClick={startMicrophone}>{t('wind.start', 'Gebruik microfoon')}</Button>
    <Button appearance="secondary" className="fluent-on-dark" icon={<WeatherSquallsRegular />}
      disabled={resources.current.won}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        startFallback();
      }}
      onPointerUp={stopFallback} onPointerCancel={stopFallback} onLostPointerCapture={stopFallback}
      onKeyDown={(event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          event.preventDefault();
          if (!event.repeat) startFallback();
        }
      }}
      onKeyUp={(event) => {
        if (event.key === ' ' || event.key === 'Enter') {
          event.preventDefault();
          stopFallback();
        }
      }} onBlur={stopFallback}>{t('wind.fallback', 'Houd vast voor wind')}</Button>
  </>;
}

function mount(element: HTMLElement, children: ReactNode, className = '') {
  if (element.dataset.fluentMounted) return;
  element.dataset.fluentMounted = 'true';
  element.classList.add('fluent-island');
  createRoot(element).render(<IslandProvider className={className}>
    {children}
  </IslandProvider>);
}

export function mountControls(): void {
  const navigation = document.querySelector<HTMLElement>('[data-fluent-navigation]');
  if (navigation) mount(navigation, <Navigation />, 'fluent-navigation-provider');

  document.querySelectorAll<HTMLElement>('[data-fluent-language]').forEach((element) => {
    mount(element, <LanguageMenu />);
  });

  document.querySelectorAll<HTMLAnchorElement>('a.btn').forEach((anchor) => {
    if (anchor.closest('[data-fluent-navigation], [data-fluent-mounted]')) return;
    const spec: AnchorSpec = {
      href: anchor.getAttribute('href') ?? '#', label: anchor.textContent?.trim() ?? '',
      translationKey: anchor.dataset.i18n, target: anchor.getAttribute('target') ?? undefined,
      rel: anchor.getAttribute('rel') ?? undefined,
      appearance: anchor.classList.contains('btn-rsvp') ? 'primary' : 'secondary',
      size: anchor.classList.contains('btn-lg') ? 'large' : anchor.classList.contains('btn-sm') ? 'small' : 'medium',
      light: anchor.classList.contains('btn-outline-light'),
    };
    const slot = document.createElement('div');
    const layoutClasses = ['me-2', 'mt-3', 'w-100'].filter((name) => anchor.classList.contains(name));
    slot.className = ['fluent-button-slot', ...layoutClasses].join(' ');
    anchor.replaceWith(slot);
    mount(slot, <AnchorButton spec={spec} />);
  });

  const rsvpButton = document.querySelector<HTMLButtonElement>('[data-rsvp-load]');
  const iframe = document.querySelector<HTMLIFrameElement>('.rsvp-iframe-container iframe[data-src]');
  if (rsvpButton && iframe) {
    const container = iframe.closest<HTMLElement>('.rsvp-iframe-container')!;
    const slot = document.createElement('div');
    slot.className = 'fluent-rsvp-load';
    rsvpButton.replaceWith(slot);
    mount(slot, <RsvpButton iframe={iframe} container={container} />);
  }

  const tabs = document.getElementById('dresscodeTabs');
  if (tabs) {
    tabs.removeAttribute('role');
    tabs.className = 'fluent-tabs-host';
    const panels = Array.from(document.querySelectorAll<HTMLElement>('#dresscodeTabContent > .tab-pane'));
    mount(tabs, <DresscodeTabs panels={panels} />);
  }

  const proposal = document.querySelector<HTMLElement>('[data-proposal-carousel]');
  if (proposal && !proposal.dataset.fluentMounted) {
    const photos = Array.from(proposal.querySelectorAll('img')).map((image): ProposalPhoto => ({
      src: image.getAttribute('src') ?? '',
      srcSet: image.getAttribute('srcset') ?? undefined,
      sizes: image.getAttribute('sizes') ?? undefined,
      alt: image.alt,
      width: Number(image.getAttribute('width')) || image.naturalWidth,
      height: Number(image.getAttribute('height')) || image.naturalHeight,
      sources: Array.from(image.closest('picture')?.querySelectorAll('source') ?? []).map((source) => ({
        type: source.getAttribute('type') ?? undefined,
        srcSet: source.getAttribute('srcset') ?? '',
        sizes: source.getAttribute('sizes') ?? undefined,
      })),
    }));
    if (photos.length) mount(proposal, <ProposalCarousel photos={photos} />);
  }

  const game = document.querySelector<HTMLElement>('[data-wind-game]');
  const actions = game?.querySelector<HTMLElement>('.wind-game__actions');
  const meter = game?.querySelector<HTMLElement>('.wind-game__meter');
  const status = game?.querySelector<HTMLElement>('[data-wind-status]');
  if (game && actions && meter && status && !actions.dataset.fluentMounted) {
    meter.replaceChildren();
    meter.removeAttribute('role');
    for (const attribute of ['aria-label', 'aria-valuemin', 'aria-valuemax', 'aria-valuenow']) meter.removeAttribute(attribute);
    status.replaceChildren();
    status.removeAttribute('data-i18n');
    mount(actions, <WindControls game={game} meter={meter} status={status} />, 'fluent-wind-actions');
  }

  const topButton = document.getElementById('backToTop');
  if (topButton && !topButton.closest('[data-fluent-mounted]')) {
    const slot = document.createElement('div');
    slot.className = 'fluent-back-to-top-slot';
    topButton.replaceWith(slot);
    mount(slot, <BackToTop />);
  }
}
