<template>
  <div class="relative">
    <span>
      <input
        class="block w-full py-2 pl-10 pr-4 leading-normal placeholder-gray-600 bg-gray-200 border border-transparent rounded-lg appearance-none focus:outline-none focus:border-gray-300 focus:bg-white"
        placeholder="Network..."
        autocomplete="off"
        spellcheck="false"
      />
    </span>
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
    >
      <svg
        class="w-4 h-4 text-gray-600 pointer-events-none fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
        />
      </svg>
    </div>
    <div class="absolute w-64 mt-1 bg-red-100">
      <ul class="mt-1 text-gray-700k">
        <li
          v-for="suggestion in suggestions"
          v-bind:key="suggestion.id"
          class="px-4 mt-1 first:bg-gray-300 hover:bg-gray-400"
        >
          {{ suggestion.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['suggestions'],
};
</script>

<style lang="scss" scoped></style>
