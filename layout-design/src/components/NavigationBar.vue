<template>
  <nav class="flex items-center w-full h-16 px-4 py-6 bg-white border-b border-gray-200">
      <a href="#" class="block text-gray-700">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
      </a>
      <Search :suggestions="suggestions" class="flex-grow ml-4" />
      <div class="ml-4 text-gray-500">test | <span class="text-sm">CZ</span></div>
      <Menu :items="menuItems" class="ml-4"/>
  </nav>
</template>

<script>
import Search from '@/components/Search.vue';
import Menu from '@/components/Menu.vue';

export default {
  data() {
    return {
      menuItems: [
        {
          label: 'Services',
          url: '#',
        },
        {
          label: 'About',
          url: '#',
        },
        {
          label: 'Logout',
          url: '#',
        },
      ],
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
  components: { Search, Menu },
};
</script>

<style></style>
