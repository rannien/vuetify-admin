<template>
  <div class="about">
    <h1>This is a wine list</h1>

    <v-data-table
      :headers="headers"
      :items="wines"
      :items-per-page="15"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

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
const wines = ref([]);

const getItems = async () => {
  const response = await fetch('http://localhost/api/v1/wines').then((r) => r.json());
  wines.value = response.data;
};

onMounted(getItems);
</script>
