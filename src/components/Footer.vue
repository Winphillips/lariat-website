<template>
  <footer role="contentinfo">
    <div class="footer-section footer-socials" aria-label="Social media">
      <a href="https://www.instagram.com/lariat.wav/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" @click="trackOutboundClick('Instagram', 'https://www.instagram.com/lariat.wav/')">
        <i class="fab fa-instagram"></i>
        <span class="link-text">Instagram</span>
      </a>
      <a href="https://www.youtube.com/@lariat333" target="_blank" rel="noopener noreferrer" aria-label="YouTube" @click="trackOutboundClick('YouTube', 'https://www.youtube.com/@lariat333')">
        <i class="fab fa-youtube"></i>
        <span class="link-text">YouTube</span>
      </a>
      <a href="https://www.tiktok.com/@lariatmusic" target="_blank" rel="noopener noreferrer" aria-label="TikTok" @click="trackOutboundClick('TikTok', 'https://www.tiktok.com/@lariatmusic')">
        <i class="fab fa-tiktok"></i>
        <span class="link-text">TikTok</span>
      </a>
    </div>

    <div class="footer-section footer-streams" aria-label="Streaming platforms">
      <a
        href="#"
        class="stream-link"
        @click.prevent="openDeepLink('Spotify', 'spotify:artist:5BIlBjorSOpyXndhZfBUKM', 'https://open.spotify.com/artist/5BIlBjorSOpyXndhZfBUKM')"
        aria-label="Spotify"
      >
        <i class="fab fa-spotify"></i>
        <span class="link-text">Spotify</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        class="stream-link"
        @click.prevent="openDeepLink('Apple Music', 'music://music.apple.com/us/artist/lariat/1582553734', 'https://music.apple.com/us/artist/lariat/1582553734')"
        aria-label="Apple Music"
      >
        <i class="fab fa-apple"></i>
        <span class="link-text">Apple Music</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        class="stream-link"
        @click.prevent="openDeepLink('YouTube Music', 'https://music.youtube.com/channel/UCPyc91HuXGGt_g_kV8KzG6A', 'https://music.youtube.com/channel/UCPyc91HuXGGt_g_kV8KzG6A')"
        aria-label="YouTube Music"
      >
        <span class="fa-stack icon-stack" aria-hidden="true">
          <i class="fa-regular fa-circle fa-stack-2x" style="transform: translate(0px, 2px) scale(0.9);"></i>
          <i class="fa-solid fa-play fa-stack-1x fa-inverse" style="transform: translate(0.3px, 1.5px) scale(0.5);"></i>
        </span>
        <span class="link-text">YouTube Music</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        class="stream-link"
        @click.prevent="openDeepLink('Amazon Music', 'amazonmusic://artists/B0B69J6LWR', 'https://music.amazon.com/artists/B0B69J6LWR/lariat')"
        aria-label="Amazon Music"
      >
        <i class="fab fa-amazon"></i>
        <span class="link-text">Amazon Music</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        class="stream-link"
        @click.prevent="openDeepLink('Deezer', 'deezer://www.deezer.com/artist/1130595', 'https://www.deezer.com/us/artist/1130595')"
        aria-label="Deezer"
      >
        <i class="fab fa-deezer"></i>
        <span class="link-text">Deezer</span>
      </a>

      <span class="separator">|</span>

      <a href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2" target="_blank" rel="noopener noreferrer" aria-label="All Platforms" class="stream-link" @click="trackOutboundClick('All Platforms', 'https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2')">
        <i class="fas fa-link"></i>
        <span class="link-text">All</span>
      </a>
    </div>

    <div class="footer-section footer-contact" aria-label="Contact">
      <a href="mailto:lariatmusic@proton.me" aria-label="Email" @click="trackOutboundClick('Email', 'mailto:lariatmusic@proton.me')">
        <i class="fas fa-envelope"></i>
        <span class="link-text">Email</span>
      </a>
    </div>

    <div class="footer-section footer-bookings" aria-label="Booking information">
  <router-link to="/epk" aria-label="Booking / EPK">
    <i class="fas fa-file-alt"></i>
    <span class="link-text">Booking / EPK</span>
  </router-link>
</div>

    <section
      v-if="showNewsletter"
      ref="newsletterSectionRef"
      class="footer-section footer-newsletter"
      :class="{ 'is-open': isNewsletterOpen }"
      aria-label="Newsletter signup"
      @pointermove="handleNewsletterPointerMove"
      @pointerleave="handleNewsletterPointerLeave"
    >
      <button
        type="button"
        class="newsletter-toggle"
        :aria-expanded="isNewsletterOpen"
        aria-controls="footer-newsletter-drawer"
        @click="toggleNewsletter"
      >
        <span class="newsletter-toggle-main">
          <span class="newsletter-toggle-badge" aria-hidden="true">
            <i :class="isNewsletterLoading ? 'fas fa-recycle newsletter-loading-spin' : 'fas fa-envelope'"></i>
          </span>
          <span class="newsletter-toggle-copy">
            <span class="newsletter-toggle-title">{{ newsletterHeading }}</span>
            <span class="newsletter-toggle-text">{{ newsletterCopy }}</span>
          </span>
        </span>
        <span class="newsletter-toggle-icon" aria-hidden="true">
          <i class="fas fa-chevron-down"></i>
        </span>
      </button>

      <transition name="newsletter-drawer">
        <div
          v-show="isNewsletterOpen"
          id="footer-newsletter-drawer"
          class="newsletter-drawer"
          :aria-busy="isNewsletterLoading"
        >
          <div v-if="isNewsletterLoading" class="newsletter-loading">
            <i class="fas fa-recycle newsletter-loading-spin" aria-hidden="true"></i>
            <span>Loading signup...</span>
          </div>

          <div
            v-if="hasEmbeddedNewsletter"
            ref="newsletterEmbedRef"
            class="newsletter-form-shell"
            :class="{ 'is-ready': newsletterMounted }"
          ></div>
        </div>
      </transition>
    </section>

    <div class="footer-section footer-legal">
      <a href="/legal/privacy-policy.html" target="_blank" rel="noopener noreferrer" aria-label="Privacy Policy" @click="trackOutboundClick('Privacy Policy', '/legal/privacy-policy.html')">Privacy Policy</a>
      <span class="separator">|</span>
      <a href="/legal/terms-of-service.html" target="_blank" rel="noopener noreferrer" aria-label="Terms of Service" @click="trackOutboundClick('Terms of Service', '/legal/terms-of-service.html')">Terms of Service</a>
      <span class="separator">|</span>
      <span class="copyright">© {{ new Date().getFullYear() }} LARIAT</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { trackEvent, trackOutboundClick } from "@/services/analytics";

defineOptions({
  name: "SiteFooter",
});

type MailerLiteFunction = ((...args: unknown[]) => void) & {
  q?: unknown[][];
};

declare global {
  interface Window {
    ml?: MailerLiteFunction;
  }
}

const newsletterEmbedRef = ref<HTMLElement | null>(null);
const newsletterSectionRef = ref<HTMLElement | null>(null);
const isNewsletterOpen = ref(false);
const isNewsletterLoading = ref(false);

const mailerLiteAccountId = import.meta.env.VITE_MAILERLITE_ACCOUNT_ID?.trim() || "2155189";
const mailerLiteFormId = import.meta.env.VITE_MAILERLITE_FORM_ID?.trim() || "QsURou";
const newsletterHeading =
  import.meta.env.VITE_NEWSLETTER_HEADING?.trim() || "Click to join our email list!";
const newsletterCopy =
  import.meta.env.VITE_NEWSLETTER_COPY?.trim() ||
  "Updates, news, exclusives, and more probably.";

const hasEmbeddedNewsletter = Boolean(mailerLiteAccountId && mailerLiteFormId);
const showNewsletter = computed(() => hasEmbeddedNewsletter);
const NEWSLETTER_MIN_LOADING_MS = 900;

let newsletterSeen = false;
let mailerLiteReadyPromise: Promise<void> | null = null;
let newsletterMounted = false;

const setNewsletterPointerPosition = (x: string, y: string) => {
  const card = newsletterSectionRef.value;

  if (!card) {
    return;
  }

  card.style.setProperty("--newsletter-glow-x", x);
  card.style.setProperty("--newsletter-glow-y", y);
};

const handleNewsletterPointerMove = (event: PointerEvent) => {
  const card = newsletterSectionRef.value;

  if (!card) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  setNewsletterPointerPosition(`${x}%`, `${y}%`);
};

const handleNewsletterPointerLeave = () => {
  setNewsletterPointerPosition("50%", "0%");
};

const waitForMailerLiteContainerId = () =>
  new Promise<string | null>((resolve) => {
    let attempts = 0;

    const findContainer = () => {
      const container = newsletterEmbedRef.value?.querySelector<HTMLElement>(".ml-form-embedContainer");

      if (container?.id) {
        resolve(container.id);
        return;
      }

      attempts += 1;

      if (attempts >= 30) {
        resolve(null);
        return;
      }

      window.requestAnimationFrame(findContainer);
    };

    findContainer();
  });

const ensureMailerLiteThemeOverrides = (containerId: string) => {
  const existingStyle = document.querySelector<HTMLStyleElement>(
    `style[data-mailerlite-theme="${containerId}"]`,
  );

  if (existingStyle) {
    return;
  }

  const style = document.createElement("style");
  style.dataset.mailerliteTheme = containerId;
  style.textContent = `
    #${containerId}.ml-form-embedContainer,
    #${containerId}.ml-form-embedContainer .ml-form-embedWrapper,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody,
    #${containerId}.ml-form-embedContainer .ml-form-successBody {
      width: 100% !important;
      max-width: none !important;
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody,
    #${containerId}.ml-form-embedContainer .ml-form-successBody {
      padding: 0 !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedContent {
      display: none !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-formContent,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedPermissions,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedSubmit {
      margin: 0 0 0.9rem !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-horizontalRow input,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow textarea {
      min-height: 46px !important;
      border-radius: 12px !important;
      border: 1px solid rgba(99, 151, 101, 0.7) !important;
      background: rgba(245, 248, 246, 0.94) !important;
      color: #101010 !important;
      font-family: Arial, Helvetica, sans-serif !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-fieldRow input::placeholder,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-horizontalRow input::placeholder {
      color: rgba(16, 16, 16, 0.6) !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow .label-description,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow .label-description p,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow label,
    #${containerId}.ml-form-embedContainer .ml-form-successBody .ml-form-successContent p,
    #${containerId}.ml-form-embedContainer .ml-form-successBody .ml-form-successContent h4 {
      color: rgba(250, 250, 250, 0.9) !important;
      font-family: Arial, Helvetica, sans-serif !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent p a,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow label a {
      color: rgb(99, 151, 101) !important;
      text-decoration: underline !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedPermissions,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow {
      padding: 0.8rem 0.9rem !important;
      border-radius: 14px !important;
      background: rgba(8, 8, 8, 0.34) !important;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24) !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsContent,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow label {
      margin: 0 !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow .label-description::before {
      border-color: rgb(99, 151, 101) !important;
      background: rgba(10, 10, 10, 0.92) !important;
      border-radius: 4px !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked ~ .label-description::before {
      border-color: rgb(99, 151, 101) !important;
      background: rgb(99, 151, 101) !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedSubmit button,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-horizontalRow button {
      min-height: 46px !important;
      border-radius: 999px !important;
      border: 1px solid rgb(99, 151, 101) !important;
      background: rgb(99, 151, 101) !important;
      color: #111111 !important;
      font-family: "New Rocker", sans-serif !important;
      font-weight: 400 !important;
      letter-spacing: 0.05em !important;
      box-shadow: none !important;
    }

    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-embedSubmit button:hover,
    #${containerId}.ml-form-embedContainer .ml-form-embedBody .ml-form-horizontalRow button:hover {
      border-color: rgb(118, 174, 120) !important;
      background: rgb(118, 174, 120) !important;
    }
  `;

  (newsletterEmbedRef.value || document.body).appendChild(style);
};

const ensureMailerLiteReady = () => {
  if (typeof window === "undefined" || typeof document === "undefined" || !mailerLiteAccountId) {
    return Promise.resolve();
  }

  if (mailerLiteReadyPromise) {
    return mailerLiteReadyPromise;
  }

  mailerLiteReadyPromise = new Promise<void>((resolve, reject) => {
    if (!window.ml) {
      const queue: MailerLiteFunction = ((...args: unknown[]) => {
        queue.q = queue.q || [];
        queue.q.push(args);
      }) as MailerLiteFunction;

      window.ml = queue;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.dataset.mailerliteAccount = mailerLiteAccountId;
    script.onload = () => {
      window.ml?.("account", mailerLiteAccountId);
      resolve();
    };
    script.onerror = () => {
      mailerLiteReadyPromise = null;
      reject(new Error("Failed to load MailerLite"));
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-mailerlite-account="${mailerLiteAccountId}"]`,
    );

    if (existingScript) {
      window.ml?.("account", mailerLiteAccountId);
      resolve();
      return;
    }

    window.ml?.("account", mailerLiteAccountId);
    document.head.appendChild(script);
  });

  return mailerLiteReadyPromise;
};

const mountMailerLiteForm = async () => {
  if (!hasEmbeddedNewsletter || !newsletterEmbedRef.value || newsletterMounted) {
    return;
  }

  const loadingStartedAt = performance.now();
  isNewsletterLoading.value = true;
  newsletterEmbedRef.value.innerHTML = `<div class="ml-embedded" data-form="${mailerLiteFormId}"></div>`;

  try {
    await nextTick();
    await ensureMailerLiteReady();
    const containerId = await waitForMailerLiteContainerId();

    if (containerId) {
      ensureMailerLiteThemeOverrides(containerId);
    }

    newsletterMounted = true;

    trackEvent("newsletter_embed_loaded", {
      provider: "mailerlite",
    });
  } finally {
    const elapsedMs = performance.now() - loadingStartedAt;
    const remainingMs = Math.max(0, NEWSLETTER_MIN_LOADING_MS - elapsedMs);

    if (remainingMs > 0) {
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, remainingMs);
      });
    }

    isNewsletterLoading.value = false;
  }
};

const toggleNewsletter = async () => {
  isNewsletterOpen.value = !isNewsletterOpen.value;

  trackEvent(isNewsletterOpen.value ? "newsletter_drawer_open" : "newsletter_drawer_close", {
    provider: "mailerlite",
  });

  if (!isNewsletterOpen.value) {
    return;
  }

  try {
    await mountMailerLiteForm();
  } catch (error) {
    console.error("Failed to mount MailerLite form:", error);
  }
};

const observeNewsletter = () => {
  if (!newsletterSectionRef.value || newsletterSeen) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (newsletterSeen) {
        observer.disconnect();
        return;
      }

      const entry = entries[0];
      if (!entry?.isIntersecting) {
        return;
      }

      newsletterSeen = true;
      trackEvent("newsletter_footer_view", {
        provider: hasEmbeddedNewsletter ? "mailerlite" : "none",
      });
      observer.disconnect();
    },
    { threshold: 0.35 },
  );

  observer.observe(newsletterSectionRef.value);
};

const openDeepLink = (label: string, deepLink: string, fallback: string) => {
  trackOutboundClick(label, fallback);

  const now = Date.now();
  window.location.href = deepLink;

  setTimeout(() => {
    if (Date.now() - now < 1500) {
      window.open(fallback, "_blank", "noopener,noreferrer");
    }
  }, 1200);
};

onMounted(() => {
  handleNewsletterPointerLeave();
  observeNewsletter();
});
</script>

<style scoped>
footer {
  padding: 2rem 1rem;
  background: #222;
  color: #fafafa;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-newsletter {
  position: relative;
  width: min(100%, 780px);
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid rgba(99, 151, 101, 0.4);
  border-radius: 18px;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(
      circle at var(--newsletter-glow-x, 50%) var(--newsletter-glow-y, 0%),
      rgba(99, 151, 101, 0.18),
      transparent 34%
    ),
    linear-gradient(180deg, rgba(40, 40, 40, 0.97), rgba(26, 26, 26, 0.98));
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.24),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  transition: border-color 0.2s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}

.footer-newsletter::before,
.footer-newsletter::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.footer-newsletter::before {
  background:
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.018) 0,
      rgba(255, 255, 255, 0.018) 1px,
      transparent 1px,
      transparent 4px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.012) 0,
      rgba(255, 255, 255, 0.012) 1px,
      transparent 1px,
      transparent 5px
    );
  opacity: 0.24;
}

.footer-newsletter::after {
  background:
    radial-gradient(
      circle at var(--newsletter-glow-x, 50%) var(--newsletter-glow-y, 0%),
      rgba(255, 255, 255, 0.09),
      transparent 22%
    );
  opacity: 0.7;
}

.footer-newsletter:hover {
  border-color: rgba(99, 151, 101, 0.65);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(99, 151, 101, 0.08) inset;
}

.footer-newsletter > * {
  position: relative;
  z-index: 1;
}

.newsletter-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.95rem 1.05rem;
  border: 0;
  background: rgba(36, 36, 36, 0.55);
  color: #fafafa;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.newsletter-toggle:hover {
  background: rgba(41, 41, 41, 0.62);
}

.newsletter-toggle-main {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
}

.newsletter-toggle-badge {
  width: 2.5rem;
  height: 2.5rem;
  flex: 0 0 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: rgba(99, 151, 101, 0.14);
  border: 1px solid rgba(99, 151, 101, 0.45);
  color: rgb(99, 151, 101);
}

.newsletter-toggle-badge i {
  display: inline-block;
  width: auto;
  font-size: 0.95rem;
}

.newsletter-toggle-copy {
  display: grid;
  gap: 0.15rem;
  min-width: 0;
}

.newsletter-toggle-title {
  font-family: "New Rocker", sans-serif;
  color: rgb(99, 151, 101);
  font-size: clamp(0.98rem, 2vw, 1.18rem);
  letter-spacing: 0.04em;
}

.newsletter-toggle-text {
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(250, 250, 250, 0.84);
  font-size: 0.88rem;
}

.newsletter-toggle-icon {
  width: 2.3rem;
  height: 2.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid rgba(99, 151, 101, 0.35);
  background: rgba(99, 151, 101, 0.08);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.newsletter-toggle-icon i {
  display: inline-block;
  width: auto;
  font-size: 0.95rem;
}

.footer-newsletter.is-open .newsletter-toggle-icon {
  transform: rotate(180deg);
  border-color: rgba(99, 151, 101, 0.75);
}

.newsletter-drawer {
  width: 100%;
  box-sizing: border-box;
  padding: 0.95rem 1.05rem 0.9rem;
  border-top: 1px solid rgba(99, 151, 101, 0.22);
  background: rgba(0, 0, 0, 0.08);
}

.newsletter-drawer-enter-active,
.newsletter-drawer-leave-active {
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.28s ease, transform 0.28s ease;
}

.newsletter-drawer-enter-from,
.newsletter-drawer-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-4px);
}

.newsletter-drawer-enter-to,
.newsletter-drawer-leave-from {
  max-height: 900px;
  opacity: 1;
  transform: translateY(0);
}

.newsletter-loading {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.85rem;
  color: rgba(250, 250, 250, 0.76);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.98rem;
}

.newsletter-loading i {
  display: inline-block;
  width: auto;
  font-size: 1.45rem;
}

.newsletter-loading-spin {
  animation: newsletter-spin 1s linear infinite;
}

@keyframes newsletter-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.newsletter-form-shell {
  width: 100%;
  min-height: 0;
}

.newsletter-form-shell:not(.is-ready) {
  min-height: 5.2rem;
}

.newsletter-form-shell :deep(form) {
  width: 100%;
}

.footer-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 1.5rem;
}

.footer-streams a,
.footer-socials a,
.footer-contact a,
.footer-bookings a,
.footer-legal a {
  color: #fafafa;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'New Rocker', sans-serif;
  letter-spacing: 1px;
}

.footer-legal a {
  font-family: Arial, sans-serif;
  letter-spacing: normal;
}

footer a:hover,
.footer-legal a:hover {
  color: rgb(99, 151, 101);
  transform: translateY(-2px);
  text-decoration: none;
}

footer i {
  font-size: 1.8rem;
  width: 25px;
  text-align: center;
  display: none;
}

.footer-contact i,
.footer-bookings i {
  font-size: 1rem;
}

.link-text {
  font-size: 1rem;
}

.separator {
  font-family: Arial, Helvetica, sans-serif;
  color: #fafafa;
  margin: 0 -0.75rem;
}

.footer-socials a i,
.footer-contact a i,
.footer-bookings a i {
  display: inline-block;
}

@media (max-width: 768px) {
  .newsletter-toggle {
    padding: 0.9rem;
  }

  .newsletter-drawer {
    padding: 0.9rem 0.9rem 0.85rem;
  }

  .newsletter-toggle-main {
    gap: 0.7rem;
  }

  .newsletter-toggle-badge {
    width: 2.3rem;
    height: 2.3rem;
    flex-basis: 2.3rem;
  }

  .newsletter-toggle-copy {
    gap: 0.2rem;
  }

  .footer-socials .link-text,
  .footer-streams .link-text,
  .footer-legal a {
    display: none;
  }

  .separator {
    display: none;
  }

  footer i {
    display: inline-block;
  }

  .footer-socials a,
  .footer-streams a {
    gap: 0;
  }
}

.footer-section.footer-legal {
  font-size: 0.85rem;
  color: #999;
}

.footer-section.footer-streams .stream-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.08rem 0;
  line-height: 1;
  vertical-align: middle;
  text-decoration: none;
}

.footer-section.footer-streams .stream-link i,
.footer-section.footer-streams .stream-link .fa-stack {
  font-size: 22px;
  width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 22px;
  line-height: 1;
}

.icon-stack .fa-regular.fa-circle {
  transform: translateY(1px) scale(0.92);
  transform-origin: center;
}
.icon-stack .fa-solid.fa-play {
  transform: translate(1px, -2px) scale(0.68);
  transform-origin: center;
  color: currentColor;
}

.footer-section.footer-streams .stream-link:nth-of-type(-n+3) {
  gap: 0.45rem;
  padding-right: 0.12rem;
}

.footer-section.footer-streams .separator {
  margin: 0 0.5rem;
  display: inline-block;
}
</style>
