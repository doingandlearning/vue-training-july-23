<script setup>
import { usePostStore } from "@/stores/post"
const store = usePostStore()
</script>

<template>
	<ul>
		<li v-for="post in store.titles" :key="post.id">
			<RouterLink :to="`/posts/${post.id}`">{{ post.title }}</RouterLink>
		</li>
	</ul>
</template>