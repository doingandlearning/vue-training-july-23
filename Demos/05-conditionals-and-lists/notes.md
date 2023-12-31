- rendering conditional
  - v-if and v-else (goals.length === 0)
	- they have to be right beside each other, we can't have another element in between
- make it functional - bind the value and then add it to the array
- v-for
	- goal in goals
	- (goal, index) in goals
	- can loop through objects and access keys
	- for num in 10
- remove list items
  - add a click listener and remove that goal
	- goals.splice(index, 1)
- lists and keys
	- we can add @click.stop inside of a nested item like an input
	- strange bug - type into the first box and then edelete
	- this is because there is no key - this can lead to performance problem
	- vue is trying to optimise performance
	- :key to goal - needs to be unique and be attached to the actual event so that Vue can tell the difference of the

Initial component
```vue
<script setup>
import {ref} from "vue"

const goals = ref([])
</script>

<template>
    <header>
      <h1>Vue Course Goals</h1>
    </header>
    <section id="user-goals">
      <h2>My course goals</h2>
      <input type="text" />
      <button>Add Goal</button>
      <p>No goals have been added yet - please start adding some!</p>
      <ul>
        <li>Goal</li>
      </ul>
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

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#user-goals {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#user-goals h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

#user-goals ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

#user-goals li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}

#user-goals input {
  font: inherit;
  border: 1px solid #ccc;
}

#user-goals input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#user-goals button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#user-goals button:hover,
#user-goals button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>
```