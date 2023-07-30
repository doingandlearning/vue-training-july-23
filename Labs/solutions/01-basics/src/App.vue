<script setup>
const name = "Kevin"
const age = 40
</script>

<template>
 <section>
      <!-- 1) Output your name -->
      <h2>{{ name }}</h2>
      <!-- 2) Output your age -->
      <p>{{ age }}</p>
      <!-- 3) Output your age + 5 -->
      <p>{{  age + 5 }}</p>
      <!-- 4) Output a random number (0 to 1) -->
      <p>Favorite Number: {{ Math.random()}}</p>
      <div>
        <!-- 5) Display some image you found via Google -->
        <img src="https://images.ireland.com/thumbs/Images/Down/3e656c481c7a49a2b366d4f8696b17b2/iconheader-desktop.jpg" />
      </div>
      <!-- 6) Prepopulate the input field with your name via the "value" attribute -->
      <input :value="name" type="text" />
    </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #970076;
  margin: 0 0 1rem 0;
}

p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #970076;
  padding: 0.5rem;
  color: white;
  border-radius: 25px;
  margin: 4px;
}

input {
  font: inherit;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

img {
  width: 100%;
}

</style>
