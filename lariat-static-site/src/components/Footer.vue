<template>
  <footer>
    <div class="footer-section footer-socials">
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
    <div class="footer-section footer-streams">
      <a href="https://open.spotify.com/artist/5BIlBjorSOpyXndhZfBUKM" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
        <i class="fab fa-spotify"></i>
        <span class="link-text">Spotify</span>
      </a>
      <span class="separator">|</span>
      <a href="https://music.apple.com/us/album/persephone/1752880397?i=1752880398" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
        <i class="fab fa-apple"></i>
        <span class="link-text">Apple Music</span>
      </a>
      <span class="separator">|</span>
      <a href="https://tidal.com/artist/43715934?u" target="_blank" rel="noopener noreferrer" aria-label="Tidal">
        <i class="fas fa-music"></i>
        <span class="link-text">Tidal</span>
      </a>
      <span class="separator">|</span>
      <a href="https://music.amazon.com/artists/B07QBDWMPP/lariat" target="_blank" rel="noopener noreferrer" aria-label="Amazon Music">
        <i class="fab fa-amazon"></i>
        <span class="link-text">Amazon Music</span>
      </a>
      <span class="separator">|</span>
      <a href="https://www.deezer.com/us/artist/1130595" target="_blank" rel="noopener noreferrer" aria-label="Deezer">
        <i class="fab fa-deezer"></i>
        <span class="link-text">Deezer</span>
      </a>
      <span class="separator">|</span>
      <a href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2" target="_blank" rel="noopener noreferrer" aria-label="All Platforms">
        <i class="fas fa-link"></i>
        <span class="link-text">All</span>
      </a>
    </div>
    <div class="footer-section footer-contact">
      <a href="mailto:lariatmusic@proton.me" aria-label="Email">
        <i class="fas fa-envelope"></i>
        <span class="link-text">Email</span>
      </a>
    </div>
    <div class="footer-section footer-bookings">
      <a href="/epk" target="_blank" aria-label="Booking / EPK">
        <i class="fas fa-file-alt"></i>
        <span class="link-text">Booking / EPK</span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
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

footer a {
  color: #fafafa;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'New Rocker', sans-serif;
  letter-spacing: 1px;
}

footer a:hover {
  color: rgb(99, 151, 101);
  transform: translateY(-2px);
  text-decoration: none;
}

.footer-contact a,
.footer-bookings a {
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: normal;
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

.footer-socials a i {
    display: inline-block;
}

@media (max-width: 768px) {
  .footer-socials .link-text,
  .footer-streams .link-text {
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
</style>