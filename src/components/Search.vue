<script setup>
import { ref } from 'vue';
import formatMetricName from '../helperFunctions/formatMetricName';

const VITE_API_KEY = import.meta.env.VITE_API_KEY;

const search = ref('');
const metricsData = ref({});
let loading = ref(true)

const apiKey = VITE_API_KEY;
const apiUrlBase = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=';

async function fetchPageSpeedData() {
    const apiUrl = `${apiUrlBase}${encodeURIComponent(search.value)}&key=${apiKey}`;

    try {
        loading.value = true;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        metricsData.value = data.loadingExperience.metrics;
        loading.value = false;
        console.log(metricsData.value);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}


</script>

<template>
    <form action="">
        <input type="text" v-model="search" placeholder="Enter a URL" />
        <button @click.prevent="fetchPageSpeedData()">Search</button>
    </form>
    <section>
        <h2>Metrics</h2>
        {{ formatMetricName('HELLO_WORLD__PAINT') }}
        <p v-if="loading">Loading...</p>
        <p v-else-if="loading != true">
            new results:
        <ul>
            <li v-for="(value, key) in metricsData" :key="key">
                {{ formatMetricName(key) }}: {{ value }}
            </li>
        </ul>
        </p>
    </section>
</template>