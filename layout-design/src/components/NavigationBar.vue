<template>
  <header class="flex bg-white border-b border-gray-200 h-16 items-center">
    <div class="w-full max-w-screen relative mx-auto px-6">
      <div class="flex items-center -mx-6">
        <div class="pl-6 pr-6">
          <div class="flex items-center">
            <a href="#" class="block">SIS</a>
          </div>
        </div>
        <nav class="relative flex flex-grow">
          <div class="px-4">
            <div class="relative">
              <span>
                <input
                  class="block w-full rounded-lg py-2 pr-4 pl-10 bg-gray-200 border border-transparent focus:outline-none focus:border-gray-300 focus:bg-white placeholder-gray-600 appearance-none leading-normal"
                  placeholder="Network..."
                  autocomplete="off"
                  spellcheck="false"
                />
              </span>
              <div
                class="absolute pointer-events-none inset-y-0 left-0 pl-4 flex items-center">
                <svg
                  class="fill-current pointer-events-none text-gray-600 w-4 h-4"
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
                  <li v-for="suggestion in suggestions"
                      v-bind:key="suggestion.id"
                      class="px-4 first:bg-gray-300 mt-1 hover:bg-gray-400"
                  >
                    {{ suggestion.label }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="px-4">
            <div class="flex justify-start items-center text-gray-500">
              <a
                href="#"
                class="block flex items-center py-2 w-16 mr-4 hover:text-gray-700"
              >user | cz</a>
            </div>
          </div>
          <div>
            <button @click="isMenuOpen = !isMenuOpen" type="button" class="block text-gray-500 focus:outline-none">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="isMenuOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                <path v-if="!isMenuOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              </svg>
            </button>
            <div :class="isMenuOpen ? 'block' : 'hidden'" class="px-2 pt-2 pb-4">
              <a href="#" class="block px-2 py-1 text-gray-600 rounded">Services</a>
              <a href="#" class="block px-2 py-1 text-gray-600 rounded">Services</a>
              <a href="#" class="block px-2 py-1 text-gray-600 rounded">Services</a>
              <a href="#" class="block px-2 py-1 text-gray-600 rounded">Services</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import Suggestion from './Suggestion';

  export default {
    data() {
      return {
        isMenuOpen: false,
        suggestions: [
          {
            id: 1,
            label: 'Suggestion 1',
            url: '#',
          },
          {
            id: 2,
            label: 'Suggestion 2',
            url: '#',
          },
          {
            id: 3,
            label: 'Suggestion 3',
            url: '#',
          },
          {
            id: 4,
            label: 'Suggestion 4',
            url: '#',
          },
          {
            id: 5,
            label: 'Suggestion 5',
            url: '#',
          },
          {
            id: 6,
            label: 'Suggestion 6',
            url: '#',
          },
          {
            id: 7,
            label: 'Suggestion 7',
            url: '#',
          },
        ],
      };
    },
    components: [Suggestion],
  };
</script>

<style>
</style>
