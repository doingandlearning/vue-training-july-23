<script setup>
  import { computed, ref, onMounted, watch } from "vue"
  import TaskList from "./components/TaskList.vue"
  import axios from "axios"


  const taskList = ref([])
  const newTask = ref('')
  const showHide = ref(true);

  function addTask() {
    taskList.value.push({name: newTask.value, complete: false})
  }

  onMounted(async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      taskList.value = response.data
    } catch (error) {
      console.log(error)
      errorMessage.value = "Error cant get data!"
    }
  })

</script>


<template>
    <header>
      <h1>Task List</h1>
    </header>
    <section id="assignment">
      <h2>Current Items</h2>

      <input type="text" v-model="newTask" @keyup.enter="addTask(taskList)">
      <button @click="addTask()">Add Task</button>
   
      <!-- <transition> -->
        <TaskList :tasks="taskList" :showhide="showHide"></TaskList>
      <!-- </transition> -->


      <button @click="showHide = !showHide"><span v-show="showHide">Hide</span><span v-show="!showHide">Show</span> List</button>
    </section>
</template>


<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}


.v-enter-from,
.v-leave-to {
  opacity: 0;
}


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


#assignment {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}


#assignment h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}


#assignment input {
  font: inherit;
  border: 1px solid #ccc;
}


#assignment input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}


#assignment button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}


#assignment button:hover,
#assignment button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}


</style>
