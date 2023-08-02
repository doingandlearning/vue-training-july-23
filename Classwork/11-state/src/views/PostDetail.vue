<script setup>
import { usePostStore } from "@/stores/post"
import {useRoute} from "vue-router"
const store = usePostStore()
const route = useRoute()
const id = route.params.id
const post = store.getPostById(parseInt(id))

</script>

<template>
	<h1>{{ post.title }}</h1>

	<div>{{ post.body }}</div>
</template>