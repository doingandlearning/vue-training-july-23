<script setup>
import ProductList from "./components/ProductList.vue"
import { ref, onMounted, watch } from "vue"
import axios from "axios"

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

const username = ref(null)
const confirmedUsername = ref(null)
const gitData = ref([])

watch(confirmedUsername, async () => {
  const response = await axios.get(`https://api.github.com/users/${username.value}`)
  gitData.value = response.data
} )




// Prop drilling!

const title = "Joe is getting married"
</script>

<template>
  <!-- <h1>Type in the username and press return</h1>
  <input type="text" v-model="username" @keydown.enter="confirmedUsername = username"/>
  <div>
    {{ gitData }}
  </div> -->
  <p v-if="isLoading">Loading ....</p>
  <ProductList 
     v-if="!isLoading" 
     :products="campingStoreItems" 
     :title="title">
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
