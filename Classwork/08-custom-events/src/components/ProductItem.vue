<script setup>
import { ref, defineEmits } from "vue"

const props = defineProps({
	name: String,
	category: String,
	startImage: String,
	hoverImage: String,
	inStock: Boolean
})

const emit = defineEmits(['itemClicked'])

const image = ref(props.startImage)
const amount = ref(0)

function addToCart() {
	emit('itemClicked', props.name, amount.value)
	amount.value = 0
}
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
		<input type="number" step="1" min="0" v-model="amount" />
		<button :disabled="!inStock" @click="addToCart">Add to cart</button>
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