/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  CATALOG_DATA,
  CATEGORIES_SUMMARY,
  WHATSAPP_NUMBER,
  WHATSAPP_DISPLAY,
  ASSET_BASE_URL,
  FALLBACK_REMOTE_URL,
  SceneItem,
} from './data/catalogData';

// Global cache for preloaded URLs
const preloadedUrls = new Set<string>();

const preloadImage = (url: string): Promise<void> => {
  if (!url || preloadedUrls.has(url)) return Promise.resolve();
  preloadedUrls.add(url);
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve();
    img.onerror = () => resolve(); // don't block on error
    img.src = url;
  });
};

export default function App() {
  // Current route: '' for home, or 'aniversario', 'corporativo', etc.
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    return CATALOG_DATA[path] ? path : '';
  });

  // Selected scenes per category: { [catId]: string[] }
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  // Sensual 18+ gate confirmation
  const [is18Confirmed, setIs18Confirmed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('maior18') === '1';
    } catch {
      return false;
    }
  });

  // Lightbox (Visor) state
  const [visorIndex, setVisorIndex] = useState<number | null>(null);
  const [isFullImageLoaded, setIsFullImageLoaded] = useState<boolean>(false);

  // Zoom & Pan state inside Visor
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showZoomHint, setShowZoomHint] = useState<boolean>(true);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);

  // Touch swipe support in visor when NOT zoomed
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  // Helper to resolve image URL with local priority and remote fallback
  const getFullImageUrl = useCallback((path: string) => {
    if (!path) return '';
    return path.startsWith('http') ? path : `${ASSET_BASE_URL}${path}`;
  }, []);

  // Synchronize route with browser History
  const navigateTo = useCallback((route: string) => {
    const cleanRoute = route.replace(/^\/+|\/+$/g, '');
    if (cleanRoute !== currentRoute) {
      const url = cleanRoute ? `/${cleanRoute}` : '/';
      window.history.pushState({ route: cleanRoute }, '', url);
      setCurrentRoute(cleanRoute);
      setVisorIndex(null);
      setIsZoomed(false);
      setPanOffset({ x: 0, y: 0 });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentRoute]);

  // Handle popstate (Back/Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      if (visorIndex !== null) {
        setVisorIndex(null);
        setIsZoomed(false);
        setPanOffset({ x: 0, y: 0 });
        return;
      }
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      setCurrentRoute(CATALOG_DATA[path] ? path : '');
      setVisorIndex(null);
      setIsZoomed(false);
      setPanOffset({ x: 0, y: 0 });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [visorIndex]);

  // Load selection from localStorage when route changes
  useEffect(() => {
    if (!currentRoute || !CATALOG_DATA[currentRoute]) return;
    try {
      const stored = localStorage.getItem(`escolhas:${currentRoute}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const categoryScenes = CATALOG_DATA[currentRoute].scenes;
          const validCodes = new Set(categoryScenes.filter(s => !s.unavailable).map(s => s.code));
          const filtered = parsed.filter(c => typeof c === 'string' && validCodes.has(c));
          setSelections(prev => ({ ...prev, [currentRoute]: filtered }));
        }
      }
    } catch {
      // ignore storage errors
    }
  }, [currentRoute]);

  // Save selection to localStorage
  const updateSelections = useCallback((route: string, newSelected: string[]) => {
    setSelections(prev => ({ ...prev, [route]: newSelected }));
    try {
      localStorage.setItem(`escolhas:${route}`, JSON.stringify(newSelected));
    } catch {
      // ignore
    }
  }, []);

  // ==================== PRELOADING HOOKS ====================

  // 1. Proactive Category Thumbnail Preloading
  useEffect(() => {
    if (!currentRoute || !CATALOG_DATA[currentRoute]) return;
    // Don't preload sensual until 18+ confirmed
    if (currentRoute === 'sensual' && !is18Confirmed) return;

    const scenes = CATALOG_DATA[currentRoute].scenes;
    let isCancelled = false;

    // Immediately preload first 12 images
    const initialBatch = scenes.slice(0, 12);
    initialBatch.forEach(s => {
      preloadImage(getFullImageUrl(s.thumbImg));
    });

    // Sequentially preload remaining in background chunks
    let currentIndex = 12;
    const loadNextChunk = () => {
      if (isCancelled || currentIndex >= scenes.length) return;
      const nextBatch = scenes.slice(currentIndex, currentIndex + 8);
      nextBatch.forEach(s => {
        preloadImage(getFullImageUrl(s.thumbImg));
      });
      currentIndex += 8;

      if ('requestIdleCallback' in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadNextChunk);
      } else {
        setTimeout(loadNextChunk, 80);
      }
    };

    const timer = setTimeout(loadNextChunk, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [currentRoute, is18Confirmed, getFullImageUrl]);

  // 2. Preload first category thumbnails on home page
  useEffect(() => {
    if (!currentRoute) {
      // Warm up first 8 thumbnails of 'aniversario' so clicking it opens instantly
      const anivScenes = CATALOG_DATA['aniversario']?.scenes.slice(0, 8) || [];
      anivScenes.forEach(s => preloadImage(getFullImageUrl(s.thumbImg)));
    }
  }, [currentRoute, getFullImageUrl]);

  // 3. Preload full-res photo for current visor and neighbors
  useEffect(() => {
    if (visorIndex === null || !currentRoute || !CATALOG_DATA[currentRoute]) return;
    const scenes = CATALOG_DATA[currentRoute].scenes;
    const currentScene = scenes[visorIndex];
    if (!currentScene) return;

    // Reset zoom & loading state on index change
    setIsZoomed(false);
    setPanOffset({ x: 0, y: 0 });
    setIsFullImageLoaded(false);
    setShowZoomHint(true);

    // Preload current full image immediately
    preloadImage(getFullImageUrl(currentScene.fullImg)).then(() => {
      setIsFullImageLoaded(true);
    });

    // Preload previous, next and next+1 full images
    const neighbors = [visorIndex - 1, visorIndex + 1, visorIndex + 2];
    neighbors.forEach(idx => {
      if (idx >= 0 && idx < scenes.length) {
        preloadImage(getFullImageUrl(scenes[idx].fullImg));
        preloadImage(getFullImageUrl(scenes[idx].thumbImg));
      }
    });

    // Auto-hide zoom hint after 3 seconds
    const hintTimer = setTimeout(() => {
      setShowZoomHint(false);
    }, 3200);

    return () => clearTimeout(hintTimer);
  }, [visorIndex, currentRoute, getFullImageUrl]);

  // Show Toast
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimeoutRef.current) {
      window.clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  }, []);

  // Format ordered choices string
  const getOrderedChoices = useCallback((route: string) => {
    const cat = CATALOG_DATA[route];
    if (!cat) return [];
    const chosen = selections[route] || [];
    const indexMap = new Map(cat.scenes.map((s, i) => [s.code, i]));
    return [...chosen].sort((a, b) => (indexMap.get(a) ?? 0) - (indexMap.get(b) ?? 0));
  }, [selections]);

  const formatChoicesPhrase = useCallback((items: string[], isInfantil = false) => {
    if (items.length === 0) return '';
    const prefix = isInfantil ? 'Escolhi os códigos ' : 'Escolhi as cenas ';
    if (items.length === 1) return `${prefix}${items[0]}`;
    if (items.length === 2) return `${prefix}${items[0]} e ${items[1]}`;
    const allButLast = items.slice(0, -1).join(', ');
    return `${prefix}${allButLast} e ${items[items.length - 1]}`;
  }, []);

  // Toggle scene selection
  const toggleScene = useCallback((code: string) => {
    if (!currentRoute) return;
    const currentList = selections[currentRoute] || [];
    const exists = currentList.includes(code);
    const updated = exists ? currentList.filter(c => c !== code) : [...currentList, code];
    updateSelections(currentRoute, updated);
  }, [currentRoute, selections, updateSelections]);

  // Copy numbers
  const handleCopy = useCallback(() => {
    const list = getOrderedChoices(currentRoute);
    if (list.length === 0) return;
    const text = formatChoicesPhrase(list, currentRoute === 'infantil');

    const onSuccess = () => {
      showToast('Copiado! Agora é só colar na conversa do WhatsApp.');
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
        fallbackCopy(text, onSuccess);
      });
    } else {
      fallbackCopy(text, onSuccess);
    }
  }, [currentRoute, getOrderedChoices, formatChoicesPhrase, showToast]);

  const fallbackCopy = (text: string, cb: () => void) => {
    const t = document.createElement('textarea');
    t.value = text;
    t.setAttribute('readonly', '');
    t.style.position = 'fixed';
    t.style.opacity = '0';
    document.body.appendChild(t);
    t.select();
    try {
      document.execCommand('copy');
      cb();
    } catch {
      showToast(`Envie no WhatsApp: ${text}`);
    }
    document.body.removeChild(t);
  };

  // Open WhatsApp directly with choices
  const handleSendWhatsApp = useCallback(() => {
    const list = getOrderedChoices(currentRoute);
    const text = list.length > 0
      ? formatChoicesPhrase(list, currentRoute === 'infantil')
      : 'Olá! Gostaria de saber mais sobre os ensaios do Premium Ensaio.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [currentRoute, getOrderedChoices, formatChoicesPhrase]);

  // Toggle Zoom on Photo inside Visor
  const handleToggleZoom = useCallback((e?: React.MouseEvent) => {
    if (!isZoomed) {
      // Calculate clicked position to center zoom on click
      if (e) {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const offsetX = (e.clientX - (rect.left + rect.width / 2)) * 0.8;
        const offsetY = (e.clientY - (rect.top + rect.height / 2)) * 0.8;
        setPanOffset({ x: -offsetX, y: -offsetY });
      } else {
        setPanOffset({ x: 0, y: 0 });
      }
      setIsZoomed(true);
      setShowZoomHint(false);
    } else {
      setIsZoomed(false);
      setPanOffset({ x: 0, y: 0 });
    }
  }, [isZoomed]);

  // Visor keyboard navigation
  useEffect(() => {
    if (visorIndex === null || !currentRoute || !CATALOG_DATA[currentRoute]) return;
    const scenes = CATALOG_DATA[currentRoute].scenes;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
          setPanOffset({ x: 0, y: 0 });
        } else {
          setVisorIndex(null);
        }
      } else if (e.key === 'ArrowLeft') {
        setVisorIndex(idx => (idx !== null && idx > 0 ? idx - 1 : idx));
      } else if (e.key === 'ArrowRight') {
        setVisorIndex(idx => (idx !== null && idx < scenes.length - 1 ? idx + 1 : idx));
      } else if (e.key === '+' || e.key === '=' || e.key.toLowerCase() === 'z') {
        handleToggleZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visorIndex, currentRoute, isZoomed, handleToggleZoom]);

  // Lock body scroll when visor or age gate is active
  useEffect(() => {
    const isLocked = visorIndex !== null || (currentRoute === 'sensual' && !is18Confirmed);
    if (isLocked) {
      document.body.classList.add('travado');
    } else {
      document.body.classList.remove('travado');
    }
  }, [visorIndex, currentRoute, is18Confirmed]);

  // Touch handlers for Visor: swipe when not zoomed, pan when zoomed
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
      if (isZoomed) {
        setIsDragging(true);
        dragStartRef.current = { x: touch.clientX - panOffset.x, y: touch.clientY - panOffset.y };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isZoomed && isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      const newX = touch.clientX - dragStartRef.current.x;
      const newY = touch.clientY - dragStartRef.current.y;
      // Constrain pan within reasonable boundaries
      setPanOffset({
        x: Math.max(-320, Math.min(320, newX)),
        y: Math.max(-360, Math.min(360, newY)),
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isZoomed) {
      setIsDragging(false);
      return;
    }

    if (!touchStartRef.current || !currentRoute || !CATALOG_DATA[currentRoute]) return;
    const scenes = CATALOG_DATA[currentRoute].scenes;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;
    const elapsed = Date.now() - touchStartRef.current.time;
    touchStartRef.current = null;

    // Detect tap to toggle zoom
    if (Math.abs(dx) < 10 && Math.abs(dy) < 10 && elapsed < 300) {
      handleToggleZoom();
      return;
    }

    // Swipe left/right when not zoomed
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0 && visorIndex !== null && visorIndex < scenes.length - 1) {
        setVisorIndex(visorIndex + 1);
      } else if (dx > 0 && visorIndex !== null && visorIndex > 0) {
        setVisorIndex(visorIndex - 1);
      }
    }
  };

  // Mouse drag handlers for desktop pan when zoomed
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isZoomed) {
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isZoomed && isDragging) {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      setPanOffset({
        x: Math.max(-400, Math.min(400, newX)),
        y: Math.max(-450, Math.min(450, newY)),
      });
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const activeCategory = currentRoute ? CATALOG_DATA[currentRoute] : null;
  const currentChoices = currentRoute ? getOrderedChoices(currentRoute) : [];
  const hasChoices = currentChoices.length > 0;

  // Sync com-escolhas class on body
  useEffect(() => {
    if (hasChoices) {
      document.body.classList.add('com-escolhas');
    } else {
      document.body.classList.remove('com-escolhas');
    }
  }, [hasChoices]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* 18+ Age Gate Modal for Sensual */}
      {currentRoute === 'sensual' && !is18Confirmed && (
        <div className="portao" role="dialog" aria-modal="true" aria-labelledby="portao-t">
          <div className="caixa">
            <img
              src="/logo.png"
              alt="Premium Ensaio"
              className="logo-marca-portao"
              width="100"
              height="100"
            />
            <h1 id="portao-t">Ensaio Sensual</h1>
            <p>Este catálogo é só para maiores de 18 anos.</p>
            <div className="acoes">
              <button
                type="button"
                className="btn-ouro"
                onClick={() => {
                  try {
                    sessionStorage.setItem('maior18', '1');
                  } catch {
                    // ignore
                  }
                  setIs18Confirmed(true);
                }}
              >
                Tenho 18 anos ou mais
              </button>
              <button
                type="button"
                className="btn-linha"
                onClick={() => navigateTo('')}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div>
        {!activeCategory ? (
          /* ==================== HOME / SUMÁRIO ==================== */
          <>
            <header className="capa">
              <img
                src="/logo.png"
                alt="Premium Ensaio"
                className="logo-marca"
                width="150"
                height="150"
                loading="eager"
              />
              <p className="marca">Premium Ensaio</p>
              <small>Estúdio Fotográfico</small>
              <hr className="fio" />
              <h1>Catálogos de ensaios</h1>
            </header>

            <main className="sumario">
              <p>Escolha o tema do seu ensaio e anote os números das cenas que você mais gostou.</p>
              <ol>
                {CATEGORIES_SUMMARY.map(item => (
                  <li key={item.id}>
                    <a
                      href={`/${item.id}`}
                      onMouseEnter={() => {
                        // Preload first 6 thumbnails of category on hover
                        const scenes = CATALOG_DATA[item.id]?.scenes.slice(0, 6) || [];
                        scenes.forEach(s => preloadImage(getFullImageUrl(s.thumbImg)));
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo(item.id);
                      }}
                    >
                      <span className="tit">
                        {item.title}
                        {item.is18Plus && <span className="maior">18+</span>}
                      </span>
                      <span className="qtd">{item.count}</span>
                      {item.subtitle && <span className="sub">{item.subtitle}</span>}
                    </a>
                  </li>
                ))}
              </ol>

              {/* Direct WhatsApp Callout */}
              <div className="whatsapp-destaque">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fale conosco no WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current text-[#25d366]" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.195 8.195 0 0 1-5.83 2.41c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Dúvidas ou agendamento? WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>
            </main>
          </>
        ) : (
          /* ==================== CATEGORY VIEW ==================== */
          <>
            <header className="capa">
              <a
                className="voltar"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('');
                }}
              >
                ← Todos os temas
              </a>
              <img
                src="/logo.png"
                alt="Premium Ensaio"
                className="logo-marca-cat"
                width="115"
                height="115"
                loading="eager"
              />
              <p className="marca">Premium Ensaio</p>
              <hr className="fio" />
              <h1>{activeCategory.title}</h1>
              <p className="contagem">{activeCategory.countLabel}</p>
            </header>

            {/* How to choose */}
            <section className="como" aria-label="Como escolher">
              <ol>
                {activeCategory.instructions.map((inst, i) => (
                  <li key={i}>
                    <span className="rn" aria-hidden="true">{inst.roman}</span>
                    <b>{inst.title}</b>
                    <span>
                      {i === 2
                        ? `${inst.desc} Envie para o WhatsApp ${WHATSAPP_DISPLAY}.`
                        : inst.desc}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Grid of Scenes */}
            <main className="grade-secao">
              <ul className="grade">
                {activeCategory.scenes.map((scene, idx) => {
                  const isSelected = (selections[currentRoute] || []).includes(scene.code);
                  const isSensualLocked = currentRoute === 'sensual' && !is18Confirmed;
                  const thumbSrc = isSensualLocked
                    ? 'data:image/gif;base64,R0lGODlhAQABAAAAACw='
                    : getFullImageUrl(scene.thumbImg);

                  const isEager = idx < 8; // Top images load immediately with high priority

                  return (
                    <li
                      key={scene.code}
                      className={`cena ${isSelected ? 'escolhida' : ''} ${
                        scene.unavailable ? 'indisponivel' : ''
                      }`}
                      data-cod={scene.code}
                      data-cheia={scene.fullImg}
                      onMouseEnter={() => {
                        // Preload full-res image when hovering over thumbnail
                        if (!scene.unavailable && !isSensualLocked) {
                          preloadImage(getFullImageUrl(scene.fullImg));
                        }
                      }}
                      onTouchStart={() => {
                        // Preload full-res image on touch
                        if (!scene.unavailable && !isSensualLocked) {
                          preloadImage(getFullImageUrl(scene.fullImg));
                        }
                      }}
                    >
                      <button
                        type="button"
                        className="foto group"
                        aria-label={`Ver a cena ${scene.code} ampliada`}
                        onClick={() => {
                          if (!scene.unavailable && !isSensualLocked) {
                            setVisorIndex(idx);
                          }
                        }}
                      >
                        <img
                          src={thumbSrc}
                          width={scene.width}
                          height={scene.height}
                          alt={scene.alt}
                          loading={isEager ? 'eager' : 'lazy'}
                          decoding="async"
                          fetchPriority={isEager ? 'high' : undefined}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Fallback to remote if local misses
                            const target = e.currentTarget;
                            if (!target.src.includes('ultreix.com')) {
                              target.src = `${FALLBACK_REMOTE_URL}${scene.thumbImg}`;
                            }
                          }}
                        />

                        {/* Subtle magnifying glass indicator on hover */}
                        {!scene.unavailable && !isSensualLocked && (
                          <div className="lupa-hover" title="Toque para ampliar e ver em detalhes">
                            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                              <circle cx="11" cy="11" r="7" strokeWidth="2" />
                              <path d="M16.5 16.5L21 21" strokeWidth="2" strokeLinecap="round" />
                              <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                          </div>
                        )}
                      </button>

                      {!scene.unavailable && (
                        <button
                          type="button"
                          className="marcar"
                          aria-pressed={isSelected ? 'true' : 'false'}
                          aria-label={`Escolher a cena ${scene.code}`}
                          onClick={() => toggleScene(scene.code)}
                        >
                          {/* Plus icon */}
                          <svg
                            className="mais"
                            style={{ display: isSelected ? 'none' : 'block' }}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 6v12M6 12h12" />
                          </svg>
                          {/* Checkmark icon */}
                          <svg
                            className="ok"
                            style={{ display: isSelected ? 'block' : 'none' }}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M5 12.5l4.5 4.5L19 7.5" />
                          </svg>
                        </button>
                      )}

                      <div className="rot">
                        <span className="num">{scene.num}</span>
                        {scene.note && (
                          <span className={`nota ${scene.unavailable ? 'indisp' : ''}`}>
                            {scene.note}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </main>
          </>
        )}
      </div>

      {/* Floating Bottom Selection Bar */}
      {hasChoices && (
        <div className="escolhas" role="region" aria-label="Cenas selecionadas">
          <div className="lista" aria-live="polite">
            <b>{currentChoices.length === 1 ? '1 escolhida' : `${currentChoices.length} escolhidas`}</b>
            <span>{currentChoices.join(' · ')}</span>
          </div>

          <button
            type="button"
            className="limpar"
            onClick={() => updateSelections(currentRoute, [])}
          >
            Limpar
          </button>

          <button
            type="button"
            className="btn-ouro"
            onClick={handleCopy}
            title="Copiar lista de números para enviar"
          >
            Copiar números
          </button>

          <button
            type="button"
            className="btn-whatsapp-barra"
            onClick={handleSendWhatsApp}
            title="Enviar escolhas diretamente pelo WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.195 8.195 0 0 1-5.83 2.41c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
            <span>WhatsApp</span>
          </button>
        </div>
      )}

      {/* Visor Lightbox Modal with Enhanced Zoom & Inspection */}
      {visorIndex !== null && activeCategory && (
        <div
          className="visor"
          role="dialog"
          aria-modal="true"
          aria-label="Foto da cena em alta definição"
        >
          {/* Header */}
          <div className="topo">
            <span className="num">
              {activeCategory.scenes[visorIndex].num}
            </span>

            {/* Quick Zoom Toggle button in Top Bar */}
            <div className="zoom-controles">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleZoom();
                }}
                title={isZoomed ? 'Reduzir zoom (100%)' : 'Ampliar foto (220%)'}
              >
                <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" strokeWidth="2" />
                  <path d="M16.5 16.5L21 21" strokeWidth="2" strokeLinecap="round" />
                  {isZoomed ? (
                    <path d="M8 11h6" strokeWidth="2" strokeLinecap="round" />
                  ) : (
                    <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round" />
                  )}
                </svg>
                <span>{isZoomed ? '220% Reduzir' : 'Ampliar Foto'}</span>
              </button>
            </div>

            <button
              type="button"
              className="fechar"
              aria-label="Fechar"
              onClick={() => {
                setVisorIndex(null);
                setIsZoomed(false);
                setPanOffset({ x: 0, y: 0 });
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* Interactive Stage with Instant Thumbnail and High-Res Layer */}
          <div
            className="palco"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`palco-zoom-wrap ${isZoomed ? 'zoomed' : ''} ${isDragging ? 'dragging' : ''}`}
              onClick={(e) => {
                // If dragged significantly, don't toggle zoom on click
                if (!isDragging) {
                  handleToggleZoom(e);
                }
              }}
            >
              <div
                className="foto-container"
                style={{
                  transform: isZoomed
                    ? `translate3d(${panOffset.x}px, ${panOffset.y}px, 0) scale(2.2)`
                    : 'translate3d(0, 0, 0) scale(1)',
                }}
              >
                {/* Instant Background Thumbnail (0ms wait, blurred backdrop) */}
                <img
                  alt=""
                  src={getFullImageUrl(activeCategory.scenes[visorIndex].thumbImg)}
                  className="foto-thumb-bg"
                  aria-hidden="true"
                />

                {/* High-Resolution Photo Layer */}
                <img
                  alt={`Cena ${activeCategory.scenes[visorIndex].code}`}
                  src={getFullImageUrl(activeCategory.scenes[visorIndex].fullImg)}
                  className="foto-cheia"
                  width={activeCategory.scenes[visorIndex].width}
                  height={activeCategory.scenes[visorIndex].height}
                  referrerPolicy="no-referrer"
                  style={{
                    opacity: isFullImageLoaded ? 1 : 0.85,
                  }}
                  onLoad={() => setIsFullImageLoaded(true)}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('ultreix.com')) {
                      target.src = `${FALLBACK_REMOTE_URL}${activeCategory.scenes[visorIndex].fullImg}`;
                    }
                  }}
                />
              </div>

              {/* Floating Helper Toast: Toque para ampliar */}
              {showZoomHint && !isZoomed && (
                <div className="zoom-dica">
                  <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" strokeWidth="2" />
                    <path d="M16.5 16.5L21 21" strokeWidth="2" strokeLinecap="round" />
                    <path d="M11 8v6M8 11h6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Toque na foto para ampliar</span>
                </div>
              )}
            </div>

            {/* Left / Right Navigation (only when not zoomed) */}
            {!isZoomed && (
              <>
                <button
                  type="button"
                  className="seta ant"
                  aria-label="Cena anterior"
                  disabled={visorIndex === 0}
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisorIndex(idx => (idx !== null && idx > 0 ? idx - 1 : idx));
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 5l-7 7 7 7" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="seta prox"
                  aria-label="Próxima cena"
                  disabled={visorIndex === activeCategory.scenes.length - 1}
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisorIndex(idx =>
                      idx !== null && idx < activeCategory.scenes.length - 1 ? idx + 1 : idx
                    );
                  }}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Bottom Bar with Note and Selection Button */}
          <div className="base">
            <span className="nota">
              {activeCategory.scenes[visorIndex].note}
            </span>
            <button
              type="button"
              className="btn-ouro escolher"
              disabled={activeCategory.scenes[visorIndex].unavailable}
              aria-pressed={
                (selections[currentRoute] || []).includes(
                  activeCategory.scenes[visorIndex].code
                )
                  ? 'true'
                  : 'false'
              }
              onClick={() => toggleScene(activeCategory.scenes[visorIndex].code)}
            >
              {activeCategory.scenes[visorIndex].unavailable
                ? 'Indisponível no momento'
                : (selections[currentRoute] || []).includes(
                    activeCategory.scenes[visorIndex].code
                  )
                ? 'Escolhida ✓'
                : 'Escolher esta cena'}
            </button>
          </div>
        </div>
      )}

      {/* Floating Toast Alert */}
      {toastMessage && (
        <div className="aviso" role="status">
          {toastMessage}
        </div>
      )}

      {/* Footer */}
      <footer>
        <p className="fim">
          Escolha os números.
          <br />
          Nós cuidamos do resto.
        </p>
        <hr className="fio" />
        <p className="romana">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir WhatsApp"
          >
            <svg className="w-4 h-4 fill-current text-[#25d366] inline-block" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.195 8.195 0 0 1-5.83 2.41c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
            </svg>
            <span>Envie suas escolhas pelo WhatsApp · {WHATSAPP_DISPLAY}</span>
          </a>
        </p>

        {activeCategory ? (
          <p className="rodape">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('');
              }}
            >
              Ver todos os temas
            </a>{' '}
            · Premium Ensaio
          </p>
        ) : (
          <p className="rodape">Premium Ensaio</p>
        )}
      </footer>
    </div>
  );
}
