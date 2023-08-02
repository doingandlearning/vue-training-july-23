<script setup>
const props = defineProps({
	options: Array,
	modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

function onChange($event) { 
  emit('update:modelValue', $event.target.value)
}
</script>

<template>
  <select @change="onChange" :value="modelValue">
    <!-- <option v-for="option in options" :key="option" :value="option">{{ option }}</option> -->
		<option value="" disabled></option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
  </select>
</template>
