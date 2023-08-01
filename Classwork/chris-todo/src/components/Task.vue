<script setup>
    const props = defineProps({
        item: Object
    })
</script>


<template>
    <li :class="item.completed ? 'complete' : ''" :key="item.id">{{ item.title }}</li>
</template>


<style>
    #assignment li {
        margin: 1rem 0;
        font-size: 1.25rem;
        font-weight: bold;
        background-color: #8ddba4;
        padding: 0.5rem;
        color: #1f1f1f;
        border-radius: 25px;
    }


    .complete {
        text-decoration: line-through;
    }
</style>