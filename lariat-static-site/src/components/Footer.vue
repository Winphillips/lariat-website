<template>
  <footer role="contentinfo">
    <div class="footer-section footer-socials" aria-label="Social media">
      <a href="https://www.instagram.com/lariat.wav/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
        <span class="link-text">Instagram</span>
      </a>
      <a href="https://www.youtube.com/@lariat333" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
        <span class="link-text">YouTube</span>
      </a>
      <a href="https://www.tiktok.com/@lariatmusic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <i class="fab fa-tiktok"></i>
        <span class="link-text">TikTok</span>
      </a>
    </div>

    <div class="footer-section footer-streams" aria-label="Streaming platforms">
      <a
        href="#"
        @click.prevent="openDeepLink('spotify:artist:5BIlBjorSOpyXndhZfBUKM', 'https://open.spotify.com/artist/5BIlBjorSOpyXndhZfBUKM')"
        aria-label="Spotify"
      >
        <i class="fab fa-spotify"></i>
        <span class="link-text">Spotify</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        @click.prevent="openDeepLink('music://music.apple.com/us/artist/lariat/1582553734', 'https://music.apple.com/us/artist/lariat/1582553734')"
        aria-label="Apple Music"
      >
        <i class="fab fa-apple"></i>
        <span class="link-text">Apple Music</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        @click.prevent="openDeepLink('tidal://artist/43715934', 'https://tidal.com/browse/artist/43715934')"
        aria-label="Tidal"
      >
        <i class="fas fa-music"></i>
        <span class="link-text">Tidal</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        @click.prevent="openDeepLink('https://music.youtube.com/channel/UCPyc91HuXGGt_g_kV8KzG6A', 'https://music.youtube.com/channel/UCPyc91HuXGGt_g_k8zG6A')"
        aria-label="YouTube Music"
      >
        <i class="fab fa-youtube"></i>
        <span class="link-text">YouTube Music</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        @click.prevent="openDeepLink('amazonmusic://artists/B0B69J6LWR', 'https://music.amazon.com/artists/B0B69J6LWR/lariat')"
        aria-label="Amazon Music"
      >
        <i class="fab fa-amazon"></i>
        <span class="link-text">Amazon Music</span>
      </a>
      <span class="separator">|</span>

      <a
        href="#"
        @click.prevent="openDeepLink('deezer://www.deezer.com/artist/1130595', 'https://www.deezer.com/us/artist/1130595')"
        aria-label="Deezer"
      >
        <i class="fab fa-deezer"></i>
        <span class="link-text">Deezer</span>
      </a>

      <span class="separator">|</span>

      <a href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2" target="_blank" rel="noopener noreferrer" aria-label="All Platforms">
        <i class="fas fa-link"></i>
        <span class="link-text">All</span>
      </a>
    </div>

    <div class="footer-section footer-contact" aria-label="Contact">
      <a href="mailto:lariatmusic@proton.me" aria-label="Email">
        <i class="fas fa-envelope"></i>
        <span class="link-text">Email</span>
      </a>
    </div>

    <div class="footer-section footer-bookings" aria-label="Booking information">
      <a href="/epk" target="_blank" aria-label="Booking / EPK">
        <i class="fas fa-file-alt"></i>
        <span class="link-text">Booking / EPK</span>
      </a>
    </div>

    <!-- New: Legal / Policies -->
    <div class="footer-section footer-legal">
      <a href="/legal/privacy-policy.html" target="_blank" rel="noopener noreferrer" aria-label="Privacy Policy">Privacy Policy</a>
      <span class="separator">|</span>
      <a href="/legal/terms-of-service.html" target="_blank" rel="noopener noreferrer" aria-label="Terms of Service">Terms of Service</a>
      <span class="separator">|</span>
      <span class="copyright">© {{ new Date().getFullYear() }} LARIAT</span>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
  methods: {
    openDeepLink(deepLink: string, fallback: string) {
      const now = Date.now();
      // Try deep link
      window.location.href = deepLink;

      // Fallback after small delay
      setTimeout(() => {
        if (Date.now() - now < 1500) {
          window.open(fallback, "_blank");
        }
      }, 1200);
    },
  },
};
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
</style>
