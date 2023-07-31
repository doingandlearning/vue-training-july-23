<script setup>

const name = "Kevin"
// Vue directives
// v-if
// v-bind
// {{ }}
const imgUrl = "https://http.cat/206"
</script>

<template>
  <img v-bind:src="imgUrl" />
  <p v-if="true">Good morning, it's {{ new Date() }}</p>
  <p v-else>Good evening, it's {{ new Date() }}</p>
</template>

<style scoped>

</style>
