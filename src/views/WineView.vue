<template>
  <div class="about">
    <h1>This is a wine list</h1>

    <v-data-table
      :headers="headers"
      :items="wineStore.wines"
      :items-per-page="15"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import useWineStore from '@/stores/WineStore';

const wineStore = useWineStore();

const headers = [
  {
    text: 'Name',
    align: 'start',
    sortable: false,
    value: 'name',
  },
  { text: 'Region', value: 'region' },
  { text: 'Year', value: 'year' },
];

// onMounted(getItems);
</script>
