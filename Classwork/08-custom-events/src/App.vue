<script setup>

import { ref, onMounted, watch } from "vue"
import axios from "axios"
import ProductList from "./components/ProductList.vue";
const productList = ref(null)
const loadProducts = async () => productList.value = () => import('./components/ProductList.vue')

const campingStoreItems = ref([])
const isLoading = ref(true)
const errorMessage = ref("")
onMounted(async () => {
  try {
    const response = await axios.get("https://gist.githubusercontent.com/doingandlearning/b03d063608da691327356fd994f9d2b9/raw/4de984cd50b30d7b6b1bea42e854b64580f0b436/gistfile1.json")
    campingStoreItems.value = response.data
    isLoading.value = false
  } catch (error) {
    console.log(error)
    errorMessage.value = "Had trouble getting your products, please try again later."
  }
})

const cart = ref({})

const title = "Camping Shop"

function handleAddItemToCart(name, value) {
  if(cart.value[name]) {
    cart.value[name] += value
  } else {
    cart.value[name] = value
  }
}
</script>

<template>
  <p v-if="isLoading">Loading ....</p>
  <p>{{ cart }}</p>
  <button @click="loadProducts()">Load</button>
  <ProductList
     :is="productList"
     v-if="!isLoading" 
     :products="campingStoreItems" 
     :title="title"
     @addToCart="handleAddItemToCart"
     >
    
     <template #title>
      <h1>My cool camping shop</h1>
     </template>
     <template #default>

       <p>This is my camping shop.</p>
       <p>I like wild camping and camping in my van.</p>
      </template>

  </ProductList>
  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
