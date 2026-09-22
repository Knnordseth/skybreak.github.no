(() => {
  "use strict";

  // Every drawing on the page lives here. Shirt families are reused mirrored
  // (via the "flip" class) for their second piece; flash designs are one off.
  const artwork = {
    sigil: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.25">
        <circle cx="50" cy="50" r="36" />
        <circle cx="50" cy="50" r="20" />
        <path d="M50 6 L50 94 M6 50 L94 50 M20 20 L80 80 M80 20 L20 80" />
        <path d="M50 18 L60 50 L50 82 L40 50 Z" />
      </svg>`,
    mecha: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.25">
        <rect x="10" y="10" width="80" height="80" rx="2" />
        <path d="M10 30 L90 30 M10 55 L90 55 M35 10 L35 90 M65 10 L65 90" />
        <path d="M10 10 L28 28 M90 10 L72 28 M10 90 L28 72 M90 90 L72 72" />
      </svg>`,
    stand: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M8 92 L92 8 M8 70 L70 8 M30 92 L92 30 M8 50 L50 8" />
        <path d="M60 60 L92 40 L74 88 Z" />
      </svg>`,
    climber: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.25">
        <path d="M6 82 L34 34 L48 56 L64 24 L94 82 Z" />
        <path d="M18 78 Q40 60 40 42 Q40 30 56 22" stroke-dasharray="3 4" />
        <circle cx="56" cy="22" r="3" fill="currentColor" stroke="none" />
      </svg>`,

    wardStar: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="50" cy="50" r="38" />
        <path d="M50 12 L61 39 L88 50 L61 61 L50 88 L39 61 L12 50 L39 39 Z" />
        <circle cx="50" cy="50" r="7" />
      </svg>`,
    dagger: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M42 26 L58 26 L56 66 L50 84 L44 66 Z" />
        <path d="M26 26 L74 26" />
        <path d="M46 26 L46 12 L54 12 L54 26" />
        <circle cx="50" cy="8" r="4" />
      </svg>`,
    moth: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M50 32 C30 12 8 24 14 46 C18 64 38 68 50 76 C62 68 82 64 86 46 C92 24 70 12 50 32 Z" />
        <path d="M50 32 L50 76" />
        <path d="M50 32 L40 18 M50 32 L60 18" />
        <circle cx="30" cy="40" r="5" />
        <circle cx="70" cy="40" r="5" />
      </svg>`,
    serpent: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M28 88 C8 72 34 58 50 50 C66 42 84 34 70 20 C60 10 44 16 44 28" />
        <circle cx="42" cy="32" r="6" />
        <path d="M42 38 L42 46 M42 46 L37 51 M42 46 L47 51" />
      </svg>`,
    crescent: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M64 10 A40 40 0 1 0 64 90 A31 31 0 1 1 64 10 Z" />
        <path d="M22 50 C31 38 49 38 58 50 C49 62 31 62 22 50 Z" />
        <circle cx="40" cy="50" r="5" fill="currentColor" stroke="none" />
      </svg>`,
    thornHeart: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M50 86 C24 66 14 50 20 36 C26 22 44 24 50 38 C56 24 74 22 80 36 C86 50 76 66 50 86 Z" />
        <path d="M14 54 L86 54" />
        <path d="M28 54 L23 45 M44 54 L39 45 M60 54 L55 63 M76 54 L71 63" />
      </svg>`,
    chalice: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M26 22 L74 22 L66 52 C60 63 40 63 34 52 Z" />
        <path d="M50 63 L50 80" />
        <path d="M34 88 L66 88 M40 80 L60 80 L66 88 M40 80 L34 88" />
        <path d="M26 32 L74 32" />
      </svg>`,
    palm: () => `
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M34 90 L34 52 C34 45 42 45 42 52 L42 34 C42 27 50 27 50 34 L50 30 C50 23 58 23 58 30 L58 42 C58 35 66 35 66 42 L66 66 C66 80 58 90 50 90 Z" />
        <circle cx="50" cy="66" r="8" />
        <path d="M50 58 L50 74 M42 66 L58 66" />
      </svg>`,
  };

  const products = [
    { id: "ward-01", name: "Ward // 01", art: "sigil", flip: false, note: "Print concept, radial linework." },
    { id: "null-sigil", name: "Null Sigil", art: "sigil", flip: true, note: "Print concept, radial linework." },
    { id: "unit-directive", name: "Unit Directive", art: "mecha", flip: false, note: "Print concept, panel linework." },
    { id: "sync-ratio", name: "Sync Ratio", art: "mecha", flip: true, note: "Print concept, panel linework." },
    { id: "stand-proud", name: "Stand Proud", art: "stand", flip: false, note: "Print concept, dynamic linework." },
    { id: "golden-recoil", name: "Golden Recoil", art: "stand", flip: true, note: "Print concept, dynamic linework." },
    { id: "ascent-line", name: "Ascent Line", art: "climber", flip: false, note: "Print concept, route linework." },
    { id: "last-anchor", name: "Last Anchor", art: "climber", flip: true, note: "Print concept, route linework." },
  ];

  // Flash works like a parlour sheet: numbered designs, each sold once, so a
  // claimed number comes off the sheet for good.
  const flash = [
    { id: "f01", name: "Ward Star", art: "wardStar", size: "9 cm", claimed: false, note: "Tattoo 01, available once." },
    { id: "f02", name: "Quiet Dagger", art: "dagger", size: "12 cm", claimed: true, note: "Tattoo 02, claimed." },
    { id: "f03", name: "Lamp Moth", art: "moth", size: "11 cm", claimed: false, note: "Tattoo 03, available once." },
    { id: "f04", name: "Shed Skin", art: "serpent", size: "14 cm", claimed: false, note: "Tattoo 04, available once." },
    { id: "f05", name: "Night Eye", art: "crescent", size: "8 cm", claimed: true, note: "Tattoo 05, claimed." },
    { id: "f06", name: "Bound Heart", art: "thornHeart", size: "10 cm", claimed: false, note: "Tattoo 06, available once." },
    { id: "f07", name: "Last Cup", art: "chalice", size: "10 cm", claimed: false, note: "Tattoo 07, available once." },
    { id: "f08", name: "Open Palm", art: "palm", size: "13 cm", claimed: false, note: "Tattoo 08, available once." },
  ];

  const grid = document.getElementById("grid");
  const flashSheet = document.getElementById("flash-sheet");
  const lightbox = document.getElementById("lightbox");
  const lightboxArt = document.getElementById("lightbox-art");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxNote = document.getElementById("lightbox-note");

  let lastFocused = null;

  function renderArt(container, product) {
    container.innerHTML = artwork[product.art]();
    if (product.flip) {
      container.classList.add("tile__art--flip");
    } else {
      container.classList.remove("tile__art--flip");
    }
  }

  function buildTile(product, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tile";
    button.dataset.id = product.id;
    button.style.setProperty("--i", index);

    const art = document.createElement("div");
    art.className = "tile__art";
    renderArt(art, product);

    const name = document.createElement("p");
    name.className = "tile__name";
    name.textContent = product.name;

    const label = document.createElement("p");
    label.className = "tile__label";
    label.textContent = "Print concept";

    button.append(art, name, label);
    button.addEventListener("click", () => openLightbox(product, button));
    return button;
  }

  // Pinned-sheet look: each design gets its own slight rotation so the sheet
  // reads as paper pinned up rather than a tidy grid.
  const flashTilts = [-4, 3, -2, 5, -5, 2, 4, -3];

  function buildFlashPiece(piece, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "flash__piece";
    button.style.setProperty("--tilt", `${flashTilts[index % flashTilts.length]}deg`);
    if (piece.claimed) {
      button.classList.add("flash__piece--claimed");
    }

    const number = document.createElement("span");
    number.className = "flash__no";
    number.textContent = String(index + 1).padStart(2, "0");

    const art = document.createElement("div");
    art.className = "flash__art";
    renderArt(art, piece);

    const name = document.createElement("p");
    name.className = "flash__name";
    name.textContent = piece.name;

    const meta = document.createElement("p");
    meta.className = "flash__meta";
    meta.textContent = piece.claimed ? `${piece.size}, claimed` : `${piece.size}, open`;

    button.append(number, art, name, meta);
    button.addEventListener("click", () => openLightbox(piece, button));
    return button;
  }

  function openLightbox(piece, trigger) {
    lastFocused = trigger;
    renderArt(lightboxArt, piece);
    lightboxTitle.textContent = piece.name;
    lightboxNote.textContent = piece.note;
    lightbox.hidden = false;
    lightbox.querySelector(".lightbox__close").focus();
    document.addEventListener("keydown", onLightboxKeydown);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.removeEventListener("keydown", onLightboxKeydown);
    if (lastFocused) {
      lastFocused.focus();
    }
  }

  function onLightboxKeydown(event) {
    if (event.key === "Escape") {
      closeLightbox();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = lightbox.querySelectorAll("button, [href]");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  lightbox.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeLightbox);
  });

  grid.style.setProperty("--count", products.length);
  products.forEach((product, index) => grid.appendChild(buildTile(product, index)));

  if (flashSheet) {
    flash.forEach((piece, index) => flashSheet.appendChild(buildFlashPiece(piece, index)));
  }

  // Drives --scroll (0 at top, 1 at bottom of the whole page) so the hero's
  // light break can track how far into the site the visitor is, and
  // --hero-scroll (0 to 1 over a short scroll distance) for the jjba
  // parallax pop, short on purpose so it's visible while the hero is still
  // on screen instead of finishing right as the hero scrolls out of view.
  const root = document.documentElement;
  const catalogue = document.getElementById("catalogue");
  let scrollTicking = false;

  function updateScrollProgress() {
    const scrollable = root.scrollHeight - root.clientHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    root.style.setProperty("--scroll", progress.toFixed(3));

    const popTravel = window.innerHeight * 0.4;
    const heroProgress = Math.min(Math.max(window.scrollY / popTravel, 0), 1);
    root.style.setProperty("--hero-scroll", heroProgress.toFixed(3));

    // 0 as the catalogue enters from the bottom, 1 once it has passed the
    // top, so the ring turns across the whole time it is on screen
    if (catalogue) {
      const rect = catalogue.getBoundingClientRect();
      const span = window.innerHeight + rect.height;
      const wheel = span > 0 ? (window.innerHeight - rect.top) / span : 0;
      root.style.setProperty("--wheel", Math.min(Math.max(wheel, 0), 1).toFixed(4));
    }

    scrollTicking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollTicking) {
        requestAnimationFrame(updateScrollProgress);
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  updateScrollProgress();
})();
