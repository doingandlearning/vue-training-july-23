<script setup>
import {ref} from "vue"

const text = ref("")
const confirmedText = ref("")

function showAlert() {
  alert("Hi! Hope you are enjoying Vue!")
}

function updateText(event) {
  text.value = event.target.value
}

function updateConfirmedText(event) {
  confirmedText.value = event.target.value
}
</script>

<template>
  <div>
    <header>
      <h1>Events</h1>
    </header>
    <section id="assignment">
      <h2>Event Practice</h2>
      <!-- 1) Show an alert (any text of your choice) when the button is pressed -->
      <button v-on:click="showAlert">Show Alert</button>
      <hr />
      <!-- 2) Register the user input on "keydown" and output it in the paragraph (hint: event.target.value helps) -->
      <input type="text" v-on:keydown="updateText" />
      <p>{{ text }}</p>
      <hr />
      <!-- 3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
      <input type="text" v-on:keydown.enter="updateConfirmedText"/>
      <p>{{ confirmedText }}</p>
    </section>
  </div>
</template>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #4fc08d;
  margin: 0 0 1rem 0;
}

#events p {
  font-size: 1.25rem;
  font-weight: bold;
  border: 1px solid #4fc08d;
  background-color: #4fc08d;
  color: white;
  padding: 0.5rem;
  border-radius: 25px;
  margin: 0.5rem;
}

#events input {
  font: inherit;
  border: 1px solid #ccc;
}

#events input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#events button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
  margin: 0 1rem;
}

#events button:hover,
#events button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
