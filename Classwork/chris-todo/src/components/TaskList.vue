<script setup>
    import { ref, computed, watch } from "vue"
    import Task from "./Task.vue"


    const props = defineProps({
        tasks: Array,
        showhide: Boolean
    })
		let viewFilter = ref('all')

    const openItems = computed(() => props.tasks.filter((item) => !item.completed))
    const completedItems = computed(() => props.tasks.filter((item) => item.completed))
		const itemsToView = computed(() => {
  switch(viewFilter.value) {
    case 'all':
      return props.tasks
    case 'open':
      return openItems.value
    case 'completed':
      return completedItems.value
  }
})

const setViewFilter = (filter) => {
  viewFilter.value = filter
}
</script>


<template>
 <button @click="setViewFilter('open')">Open Items</button>
<button @click="setViewFilter('completed')">Completed Items</button>
<button @click="setViewFilter('all')">All Items</button>

    <ul v-show="props.showhide">
        <Task v-for="item in itemsToView" :item="item"></Task>
    </ul>
</template>


<style>
    #assignment ul {
        list-style: none;
        margin: 1rem 0;
        padding: 0;
    }
</style>
