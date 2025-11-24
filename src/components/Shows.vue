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
            :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(show.coords)}`"
            target="_blank"
            class="venue-link"
            rel="noopener noreferrer"
          >
            {{ show.venue }}
            <i class="fas fa-map-marker-alt waypoint-icon"></i>
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
          <span v-if="show.showTime">Show: {{ show.showTime }}</span>
          <span v-if="show.doors">
            <template v-if="show.showTime"> | </template>
            Doors: {{ show.doors }}
          </span>
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

// load and parse sheet data
const parseGviz = (text: string) => {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("gviz JSON not found");
  return JSON.parse(text.slice(start, end + 1));
};

const loadShows = async () => {
  try {
    const res = await fetch(sheetURL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const json = parseGviz(text);
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
      } as Show;
    });
  } catch (err) {
    console.error("Failed to load shows:", err);
    shows.value = [];
  }
};

onMounted(() => {
  loadShows();
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
  text-shadow: 0px 0px 4px rgba(0,0,0), -2px 2px 2px rgba(0,0,0);
}
.main-line {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1.5fr 1fr;
  gap: 1.4rem;
  font-size: 1.75rem;
  font-weight: 600;
  align-items: center;
  margin-bottom: 0.5rem;
}
.secondary-line {
  display: grid;
  grid-template-columns: 1fr 2.5fr 1.5fr 1fr;
  gap: 1.4rem;
  align-items: center;
}
.show-date {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  padding-right: 2rem;
}
.show-venue {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  font-size: 1em;
  margin-left: 0.4rem;
}
.show-city{
  font-family: "Arial", sans-serif;
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
  transition: all 0.2s ease;
}
.ticket-btn:hover {
  background: rgb(99, 151, 101);
  color: white;
}
.price {
  font-family: "Arial", sans-serif;
  font-size: 0.9rem;
}
.free-show {
  font-weight: bold;
}
.with-text {
  grid-column: 2;
  font-size: 1.25rem;
  padding-left: 3.5rem;
  text-align: left;
}
.show-times {
  grid-column: 4;
  font-size: 1.2rem;
  text-align: right;
  font-family: "Arial", sans-serif;
  white-space: nowrap;
}
@media (max-width: 820px) {
  .main-line {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 0;
  }
  .secondary-line {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    align-items: center;
    margin-top: 0.5rem;
  }
  .show-date {
  padding-right: 0;
}
  .show-venue,
  .with-text,
  .ticket-info {
    justify-content: center;
    text-align: center;
  }
  .with-text,
  .show-times {
    grid-column: auto;
    text-align: center;
  }
  .with-text {
    padding-left: 0;
  }
}
</style>