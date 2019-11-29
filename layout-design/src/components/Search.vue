<template>
  <div class="relative">
    <span>
      <input
        id="search"
        ref="searchInput"
        class="block w-full py-2 pl-10 pr-4 text-sm leading-normal placeholder-gray-600 bg-gray-200 border border-transparent rounded-lg appearance-none focus:outline-none focus:border-gray-300 focus:bg-white focus:shadow-lg"
        placeholder="Vyhledat síťový prvek..."
        autocomplete="off"
        spellcheck="false"
        type="text"
        v-model="query"
        @input="input"
        @focusin="hasFocus = true"
        @focusout="hasFocus = false"
        @mouseover="isMouseOver = true"
        @mouseout="isMouseOver = false"
        @keydown.esc="reset"
      />
    </span>
    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <svg class="w-4 h-4 text-gray-600 pointer-events-none fill-current" viewBox="0 0 20 20">
        <path
          d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        />
      </svg>
    </div>
    <div
      class="absolute inset-y-0 right-0 flex items-center pl-4 pr-4"
      @click="reset"
      @mouseover="isMouseOver = true"
      @mouseout="isMouseOver = false"
    >
      <svg
        :class="(hasFocus && hasContent) || (isMouseOver && hasContent) ? 'block' : 'hidden'"
        class="w-5 h-5 text-gray-600 fill-current"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      </svg>
    </div>
    <!-- <div class="absolute w-64 mt-1 bg-red-100">
      <ul class="mt-1 text-gray-700k">
        <li
          v-for="suggestion in suggestions"
          v-bind:key="suggestion.id"
          class="px-4 mt-1 first:bg-gray-300 hover:bg-gray-400"
        >
          {{ suggestion.label }}
        </li>
      </ul>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ['suggestions'],
  data() {
    return {
      hasContent: false,
      hasFocus: false,
      isMouseOver: false,
      query: null,
    };
  },
  methods: {
    input(event) {
      this.hasContent = !!this.query;
    },
    reset(event) {
      this.query = null;
      this.hasContent = false;
      this.$refs.searchInput.focus();
    },
  },
};
</script>

<style scoped></style>
