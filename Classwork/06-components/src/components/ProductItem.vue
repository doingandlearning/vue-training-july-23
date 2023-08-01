<script setup>
const props = defineProps({
	name: String,
	category: String,
	startImage: String,
	hoverImage: String
})

import { ref } from "vue"

const image = ref(props.startImage)

</script>

<template>
	<div>
		<h2>{{ name }}</h2>
		<h3>{{ category }}</h3>
		<Transition>
		 <img 
		   :src="image" 
			 @mouseenter="image = hoverImage" 
			 @mouseleave="image = startImage"/>

		</Transition>
		<input type="number" step="1" min="0" />
	</div>
</template>

<style scoped>
div {
	border: 1px #ccc solid;
	margin: 4px;
	padding: 4px;
	padding-bottom: 8px;
}

img {
	width: 100%;
}
</style>