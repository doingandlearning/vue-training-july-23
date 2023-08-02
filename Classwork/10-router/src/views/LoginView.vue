<script setup>
import {ref} from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const username = ref("")
const password = ref("")

function onSubmit(){
	if(password.value === "password") {
		router.push("/")
	}
}
</script>

<template>
	<form @submit.prevent="onSubmit">
		<input type="text" v-model="username" placeholder="username" />
		<input type="password" v-model="password" placeholder="password" />
		<button>Login</button>
	</form>
</template>

<style scoped>
form {
	margin: auto;
	width: 200px;
	height: 200px;
}
</style>