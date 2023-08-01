<script setup>
import { computed, ref, watch } from "vue"
import ProductItem from "./ProductItem.vue"
const props = defineProps({
	products: Array,
	title: String
})

const emit = defineEmits('addToCart')

const inStockItems = computed(() => props.products.filter((item) => item.inStock))
const outOfStockItems = computed(() => props.products.filter((item) => !item.inStock))

const itemsToIterate = ref(props.products)

function addToCart(name, amount) {
	emit('addToCart', name, amount)
}

</script>

<template>
	<slot name="title"></slot>
	<slot></slot>
	<button @click="itemsToIterate = inStockItems">In stock</button>
	<button @click="itemsToIterate = outOfStockItems">Out  stock</button>
	<button @click="itemsToIterate = products">All</button>
	<ProductItem 
	  v-for="product in itemsToIterate" 
		:key="product.id"
		:name="product.name"
		:category="product.category"
		:startImage="product?.startImage || product.image"
		:hoverImage="product?.hoverImage || product.image"
		:inStock="Boolean(product.inStock)"
		v-on:itemClicked="addToCart"
	>

	</ProductItem>
</template>

<style scoped>

</style>