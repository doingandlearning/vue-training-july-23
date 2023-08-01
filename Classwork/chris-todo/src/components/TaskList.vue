<script setup>
    import { ref, computed, watch } from "vue"
    import Task from "./Task.vue"


    const props = defineProps({
        tasks: Array,
        showhide: Boolean
    })

    const openItems = computed(() => props.tasks.filter((item) => !item.completed))
    const completedItems = computed(() => props.tasks.filter((item) => item.completed))
		const itemsToView = ref(props.tasks)
</script>


<template>
    <button @click="itemsToView = openItems">Open Items</button>
    <button @click="itemsToView = completedItems">Completed Items</button>
    <button @click="itemsToView = tasks">All Items</button>


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
