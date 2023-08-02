import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const LOCAL_STORAGE_KEY = 'exercise'

export const useExerciseStore = defineStore('exercise', () => {
	const formData = ref({

	})

	function updateExercise(newValue) {
		formData.value = newValue
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue))
	}

	function loadData() {
		const data = localStorage.getItem(LOCAL_STORAGE_KEY)
		if (data) {
			formData.value = JSON.parse(data)
		}

	}

	return { formData, updateExercise, loadData }
})
