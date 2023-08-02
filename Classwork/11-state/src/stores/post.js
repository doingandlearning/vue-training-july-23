import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const usePostStore = defineStore('posts', () => {
	const posts = ref([])

	async function getPosts() {
		const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
		posts.value = response.data
	}

	const titles = computed(() => posts.value.map((item) => {
		return { title: item.title, id: item.id }
	}))

	function getPostById(id) {
		const result = posts.value.find((value) => value.id === id)
		return result
	}

	return { posts, getPosts, getPostById, titles }
})
