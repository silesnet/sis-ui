<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="relative block text-gray-500 focus:outline-none"
    >
      <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
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
    </button>
    <button
      v-if="isOpen"
      @click="isOpen = false"
      tabindex="-1"
      class="fixed inset-0 w-full h-full cursor-default"
    ></button>
    <div
      v-if="isOpen"
      class="absolute right-0 pt-1 pb-2 mt-1 mr-1 text-right w-32 bg-white shadow text-gray-700"
    >
      <a
        class="inline-block w-full px-4 mt-1 hover:bg-gray-200"
        v-for="item in items"
        :key="item.label"
        :href="item.url"
        @click="isOpen = false"
      >{{ item.label }}</a>
    </div>
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
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape') {
        this.isOpen = false;
      }
    };

    document.addEventListener('keydown', handleEscape);

    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', handleEscape);
    });
  },
};
</script>

<style></style>
