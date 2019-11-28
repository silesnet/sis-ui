<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="relative block text-gray-500 focus:outline-none"
    >
      <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path
          v-if="isOpen"
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
        <path
          v-if="!isOpen"
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        />
      </svg>
      <!-- <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed insert-0 h-full w-full bg-black opacity-50 cursor-default"></button> -->
      <div v-if="isOpen" class="absolute right-0 bg-gray-200">
        <a 
          v-for="item in items"
          :key="item.label"
          :href="item.url"
          class="px-4 mt-1 hover:bg-gray-400"
        >
          {{ item.label }}
        </a>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style></style>
