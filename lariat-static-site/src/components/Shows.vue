<template>
  <div class="page-content shows-container">
    <h1 class="shows-title">Upcoming Shows</h1>
    <div v-if="shows.length === 0">
      <p>No upcoming shows at the moment. Check back soon!</p>
    </div>
    <div v-for="show in shows" :key="show.date" class="show-entry">
      <div class="main-line">
        <div class="show-date">{{ show.date }}</div>
        <div class="show-venue">
          <a
  :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    show.coords
  )}`"
  target="_blank"
  class="venue-link"
  rel="noopener noreferrer"
>
            {{ show.venue }}
            <svg
              class="waypoint-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
              />
            </svg>
          </a>
        </div>
        <div class="show-city">{{ show.city }}</div>
        <div class="ticket-info">
          <a
            v-if="show.tickets && show.tickets !== 'FREE'"
            :href="show.tickets"
            target="_blank"
            rel="noopener noreferrer"
            class="ticket-btn"
            >Tickets</a
          >
          <div v-if="show.price && show.price !== 'FREE'" class="price">
            {{ show.price }}
          </div>
          <div
            v-if="!show.tickets || show.tickets === 'FREE'"
            class="free-show"
          >
            FREE
          </div>
        </div>
      </div>
      <div class="secondary-line">
        <div v-if="show.with" class="with-text">
          With......... {{ show.with }}
        </div>
        <div class="show-times">
          Show: {{ show.showTime }} | Doors: {{ show.doors }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Show {
  date: string;
  doors: string;
  showTime: string;
  venue: string;
  city: string;
  tickets: string;
  coords: string;
  price: string;
  with: string;
}

const shows = ref<Show[]>([]);
const sheetURL =
  "https://docs.google.com/spreadsheets/d/1ZBKK2wc7HDZ2y7QtMg6OZ4rVJaHKNpAyy1V8hPc7QoQ/gviz/tq?tqx=out:json";

const formatDate = (raw: string) => {
  const match = raw.match(/Date\((\d+),(\d+),(\d+)\)/);
  if (!match) return raw;
  const year = parseInt(match[1]);
  const month = parseInt(match[2]) + 1;
  const day = parseInt(match[3]);
  return `${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}/${year}`;
};

const formatTime = (raw: string) => {
  const match = raw.match(/Date\(1899,11,30,(\d+),(\d+)/);
  if (!match) return raw;
  let hours = parseInt(match[1]);
  const minutes = match[2].padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
};

onMounted(() => {
  fetch(sheetURL)
    .then((res) => res.text())
    .then((text) => {
      const json = JSON.parse(text.substring(47).slice(0, -2));
      shows.value = json.table.rows.map((row: any) => {
        const cells = row.c.map((cell: any) => (cell ? cell.v : ""));
        return {
          date: formatDate(cells[0]),
          doors: formatTime(cells[1]),
          showTime: formatTime(cells[2]),
          venue: cells[3],
          city: cells[4],
          tickets: cells[5],
          coords: cells[6],
          price: cells[7],
          with: cells[8],
        };
      });
    });
});
</script>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
}
.shows-title {
  font-family: "New Rocker", sans-serif;
  text-align: center;
}
.show-entry {
  padding: 1.5rem 0 2rem 0;
  border-bottom: 4px solid rgb(99, 151, 101);
}
.main-line {
  display: grid;
  grid-template-columns: 1fr 2fr 1.5fr 1fr;
  gap: 1.4rem;
  font-size: 1.75rem;
  font-weight: 600;
  align-items: center;
}
.secondary-line {
  display: flex;
  justify-content: space-evenly;
  margin-top: 0.5rem;
  font-size: 1.5rem;
}
.show-venue {
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 3rem;
}
.venue-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s ease;
  color: inherit;
}
.venue-link:hover {
  border-bottom-color: rgb(99, 151, 101);
}
.waypoint-icon {
  width: 24px;
  height: 24px;
  margin-left: 0.5rem;
}
.ticket-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-end;
}
.ticket-btn {
  background: none;
  border: 2px solid rgb(99, 151, 101);
  color: rgb(99, 151, 101);
  padding: 0.25rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}
.price {
  font-family: "Arial", sans-serif;
  font-size: 0.9rem;
}
.free-show {
  font-weight: bold;
}
.with-text {
  font-size: 1.25rem;
  text-align: left;
  padding-left: 4.5rem;
}
.show-times {
  font-size: 1rem;
  text-align: center;
  font-family: "Arial", sans-serif;
}

@media (max-width: 820px) {
  .main-line {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
  }
  .secondary-line,
  .show-venue,
  .with-text,
  .ticket-info {
    justify-content: center;
    text-align: center;
    padding-left: 0;
  }
  .secondary-line {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
  }
}
</style>