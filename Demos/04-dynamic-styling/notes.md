- Dynamic styling - we can change the styling on the page with dynamic styling
  - Say we want to highlight a box based on whether it is selected
	- We can set ourselves up with a way to track these:
```js
import {ref} from "vue"

const boxASelected = ref(false)
const boxBSelected = ref(false)
const boxCSelected = ref(false)

function boxSelected(box) {
  if (box === 'A') {
    boxASelected.value = true
  } else if (box === 'B') {
    boxBSelected.value = true
  } else if (box === 'C') {
    boxCSelected.value = true
  } 
}
```
  and then add click handlers to the divs.
  - but what about styling? 
	- we can use the style property
	- or we can the style `:style={borderColor: boxASelected ? 'red' : '#ccc'}


Starting component

```vue
<script setup>
</script>

<template>
   <header>
      <h1>Vue Dynamic Styling</h1>
    </header>
    <section id="styling">
      <div class="demo"></div>
      <div class="demo"></div>
      <div class="demo"></div>
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
</style>
```