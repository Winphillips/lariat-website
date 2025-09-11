<template>
  <footer>
    <div class="footer-socials">
      <a href="https://www.instagram.com/lariat.wav/" target="_blank">Instagram</a> |
      <a href="#" target="_blank">Facebook</a> |
      <a href="https://www.youtube.com/@lariat333" target="_blank">YouTube</a> |
      <a href="https://www.tiktok.com/@lariatmusic" target="_blank">TikTok</a>
    </div>
    <div class="footer-streams">
      <a href="https://open.spotify.com/embed/artist/5BIlBjorSOpyXndhZfBUKM" target="_blank">Spotfiy</a> |
      <a href="https://music.apple.com/us/album/persephone/1752880397?i=1752880398" target="_blank">Apple Music</a> |
      <a href="https://tidal.com/artist/43715934?u" target="_blank">Tidal</a> |
      <a href="music.amazon.com/artists/B07QBDWMPP/lariat" target="_blank">Amazon Music</a> |
      <a href="https://www.deezer.com/us/artist/1130595" target="_blank">Deezer</a> |
      <a href="https://distrokid.com/hyperfollow/lariat1/year-of-the-dragon-3-2" target="_blank">All</a>
    </div>
    <div class="footer-contact">
      <p>Email: <a href="mailto:lariatmusic@proton.me">lariatmusic@proton.me</a></p>
    </div>
    <div class="footer-bookings">
      <a href="/epk" target="_blank">Booking / EPK</a>
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
  padding: 1rem;
  background: #222;
  color: #fff;
  text-align: center;
  flex-shrink: 0; /* Prevents footer from shrinking */
}
footer a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
}
footer a:hover {
  text-decoration: underline;
}
.footer-socials, .footer-streams, .footer-contact, .footer-bookings {
    padding: 0.25rem 0;
}
</style>