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
/* !!!!!!!!!Global Reset!!!!!!!!!!!! */
html,
body {
  margin: 0;
  padding: 0;
  overflow-clip-box: hidden;
  background-color: #111;
  color: #fff;
}
</style>