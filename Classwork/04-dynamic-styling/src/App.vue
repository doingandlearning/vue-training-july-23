<script setup>
import {ref, computed} from "vue"

const boxASelected = ref(false)
const boxBSelected = ref(false)
const boxCSelected = ref(false)

// Inline bound styles :style
// Bound class with a ternary
// Statics and a bound class
// Bound class with an object
// Array syntax
// Computed value

const boxAClasses = computed(function() {
  return {
    active: boxASelected.value,
    demo: true
  }
})
</script>

<template>
   <header>
      <h1>Vue Dynamic Styling</h1>
    </header>
    <section id="styling">
      <div 
        :class="boxAClasses" 
        @click="boxASelected = !boxASelected"
      >{{ boxASelected }}</div>
      <div 
        class="demo"
        :class="boxBSelected ? 'active' : ''" 
        @click="boxBSelected = !boxBSelected"
        :style="{borderColor: boxBSelected ? 'red' : '#ccc'}"
      >{{ boxBSelected }}</div>
      <div 
        class="demo" 
        :class="{active: boxCSelected, selectedBackground: boxBSelected}"
        @click="boxCSelected = !boxCSelected"
        :style="{borderColor: boxCSelected ? 'red' : '#ccc'}"
      >{{ boxCSelected }}</div>
      <div 
        :class="['demo', {active: boxCSelected}]"
        @click="boxCSelected = !boxCSelected"
        :style="{borderColor: boxCSelected ? 'red' : '#ccc'}"
      >{{ boxCSelected }}</div>
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
  background-color: #4fc08d;
  color: white;
  text-align: center;
}

#styling {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.demo {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
}

.active {
  border-color: red;
}

.selectedBackground {
  background-color: red;
}
</style>