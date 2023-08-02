<script setup>
// npm install axios
import { ref, onMounted } from "vue"
import axios from "axios"
import {useExerciseStore} from "@/stores/exercise.js"

const store = useExerciseStore()

const type = ref("")
const length = ref(0)
const date = ref(null)
const feeling = ref(null)
const numericfeel = ref(0)
const showForm = ref(true)

async function submitForm() {
	try {
		const formResponse = {
			type: type.value,
			length: length.value,
			date: date.value,
			feeling: feeling.value,
			numericfeel: numericfeel.value
		}
		const response = await axios.post(
			"https://crudcrud.com/api/e0c82d7157f64ecfb90e51606d07a8d1/exercises",
			formResponse
		)

		// I want to be able commit this data to the store!
		store.updateExercise(formResponse)

		localStorage.removeItem("formdata")

		type.value = ""
		length.value = 0
		date.value = ""
		feeling.value = ""
		numericfeel.value = 5
		showForm.value = false
	} catch (error) {
		console.log("Whoops! Something went wrong!")
		if (error) {
			// length .value.toExponential. 
		}
	}
}

function saveToLocalStorage() {
	localStorage.setItem("formdata", JSON.stringify({
		type: type.value,
		length: length.value,
		date: date.value,
		feeling: feeling.value,
		numericfeel: numericfeel.value
	}))
}

function getFromLocalStorage() {
	const data = localStorage.getItem("formdata")
	if (data) {
		const parsedData = JSON.parse(data)
		type.value = parsedData.type
		length.value = parsedData.length
		date.value = parsedData.data
		feeling.value = parsedData.feeling
		numericfeel.value = parsedData.numericfeel
	}
}

onMounted(() => getFromLocalStorage())

const sportOptions = [
	{ value: 'Football', label: 'Football' },
	{ value: 'Rugby', label: 'Rugby' },
	{ value: 'Boxing', label: 'Boxing' }
]
</script>

<template>
	<h1>Exercise</h1>
	<button @click="saveToLocalStorage">Save</button>
	<button @click="getFromLocalStorage">Load</button>
	<form @submit.prevent="submitForm" v-if="showForm">
		<div class="formgroup">
			<label for="type">What type of exercise?</label>
			<textarea rows="6" cols="50" id="type" v-model="type"></textarea>

			<label for="length">How long did you exercise for?</label>
			<input type="number" id="length" v-model="length" />

			<label for="when">When did you exercise?</label>
			<input type="date" id="when" v-model="date" />
			<label for="feeling">How did you feel after?</label>
			<select v-model="feeling">
				<option value="awesome">Awesome</option>
				<option value="OK">OK</option>
				<option value="Meh">Meh</option>
			</select>
			<label for="numericfeel">Out of 10, how are you doing?</label>
			<input type="range" min="0" max="10" step="1" id="numericfeel" v-model="numericfeel" />
			<button>Submit</button>
		</div>

	</form>
	<div v-else>
		<p>Thanks for submitting your exercise!</p>
		<button @click="showForm = true">Submit another</button>

	</div>

	{{  store.formData }}
</template>

<style scoped>
.formgroup {
	border: 1px #ccc solid;
	padding: 8px;
}

input,
textarea,
select {
	display: block;
}
</style>
