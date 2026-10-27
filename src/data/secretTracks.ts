import elysiumAlps from "@/assets/audio/Elysium Alps.wav";
import everythingChanges from "@/assets/audio/Everything's Gonna Change Any Day Now.m4a";
import goingTooFar from "@/assets/audio/Going Too Far.m4a";
import hurtsALittle from "@/assets/audio/Hurts a Little.m4a";
import introP from "@/assets/audio/intro p.m4a";
import liveMcp from "@/assets/audio/MCPLive.wav";
import outroPp from "@/assets/audio/outro pp.m4a";
import prometheus from "@/assets/audio/Prometheus.wav";
import stompMeOutAlt from "@/assets/audio/Stomp Me Out - Alt.wav";
import WrenDemo from "@/assets/audio/Killing of the Carolina Wren.m4a";
import twentyFourHoursArtwork from "@/assets/24hr.JPG";

export interface SecretTrack {
  title: string;
  url: string;
}

export interface SecretRelease {
  title: string;
  description: string;
  artwork: string;
  tracks: SecretTrack[];
}

export const twentyFourHours: SecretRelease = {
  title: "24 Hours",
  description:
    "Live streamed EP made in 24 hours with our friend Tyler Glass. June 20 - 21, 2024",
  artwork: twentyFourHoursArtwork,
  tracks: [
    { title: "Intro PP", url: introP },
    { title: "Hurts a Little", url: hurtsALittle },
    { title: "Going Too Far", url: goingTooFar },
    { title: "Everything's Gonna Change Any Day Now", url: everythingChanges },
    { title: "Outro PP", url: outroPp },
  ],
};

export const secretTracks: SecretTrack[] = [
  { title: "Killing of the Carolina Wren - day 1 demo 1/28/2025", url: WrenDemo },
  { title: "Stomp Me Out - Alt Demo", url: stompMeOutAlt },
  { title: "Cut from Year of the Dragon 3 - 'Prometheus Demo'", url: prometheus },
  { title: "Unreleased beat we made in one night in like 2019 - 'Elysium Alps'", url: elysiumAlps },
  { title: 'Mushroom Cloud Parade - Live from "The Garden Room" Oct 19 2025', url: liveMcp },
];
