import elysiumAlps from "@/assets/audio/Elysium Alps.wav";
import liveMcp from "@/assets/audio/MCPLive.wav";
import prometheus from "@/assets/audio/Prometheus.wav";
import stompMeOutAlt from "@/assets/audio/Stomp Me Out - Alt.wav";
import WrenDemo from "@/assets/audio/Killing of the Carolina Wren.m4a";

export interface SecretTrack {
  title: string;
  url: string;
}

export const secretTracks: SecretTrack[] = [
  { title: "Killing of the Carolina Wren - day 1 demo 1/28/2025", url: WrenDemo },
  { title: "Stomp Me Out - Alt Demo", url: stompMeOutAlt },
  { title: "Cut from Year of the Dragon 3 - 'Prometheus Demo'", url: prometheus },
  { title: "Unreleased beat we made in one night in like 2019 - 'Elysium Alps'", url: elysiumAlps },
  { title: 'Mushroom Cloud Parade - Live from "The Garden Room" Oct 19 2025', url: liveMcp },
];
