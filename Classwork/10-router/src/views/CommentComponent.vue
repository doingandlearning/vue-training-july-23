<script setup>
import { useRoute } from "vue-router"
import { ref, onMounted } from "vue"

const route = useRoute()
const comment = ref('')

onMounted(() => {
	// query the database
	// parse the data
	// get it ready

	comment.value =   `${route.params.postid} has a comment of ${route.params.commentid}`
})

</script>

<template>
	{{ comment }}
</template>