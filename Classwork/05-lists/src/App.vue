<script setup>
import { computed, ref } from "vue"

const shoppingList = ref([
  {name:'Bread', cost: "1.99"}, 
  {name:'Milk', cost: "1.99"}, 
  {name:'Eggs', cost: "1.50"}, 
  {name:'Chicken breasts', cost: "5.00"}
])

const totalCost = computed(function() {
  let total = 0;
  for (let item of shoppingList.value) {
    total += parseFloat(item.cost)
  }
  return total
})


const pets = ref(["Dog", "Cat", "Fish", "Guinea pig"])

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
}

const foodPreferences = 'Milk'

const expensiveItems = computed(() => {
  return shoppingList.value.filter((item) => item.name.includes(foodPreferences) )
})

const numbers = [1,2,3,4,5]

const filteredNumbers = numbers.filter((number) => number > 2 )

console.log(filteredNumbers)

const mappedNumbers = numbers.map((number) => number * 2)

console.log(mappedNumbers)

const reducedNumbers = numbers.reduce((previous, current) => previous + current, 0)

console.log(reducedNumbers)


</script>

<template>

<ul>
  <li v-for="item in expensiveItems">{{ item.name }}</li>
</ul>


<button @click="shuffleArray(pets)">Shuffle</button>

<div v-for="(pet, index) in pets" :key="pet">
  <p @click="pets.splice(index, 1)">My pet is a {{ pet }}.</p>
  <input type="text" />
</div>

<hr />
<ul>
  <li v-for="(pet, index) in pets" @click="pets.splice(index, 1)">{{ pet }} - {{ index }}</li>
</ul>

<hr />

<ul>
  <li v-for="item in shoppingList">{{ item.name }} costs £{{  item.cost }}</li>
</ul>

<p>Your total cost is £{{  totalCost }}</p>
<button @click="shoppingList.push({name: 'More food', cost: '10.00'})">Add item</button>
</template>

<style scoped>

</style>
