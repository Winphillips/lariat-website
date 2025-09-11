<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
/* Global Reset */
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevents any scrollbars on the body itself */
  background-color: #111;
  color: #fff;
}
</style>