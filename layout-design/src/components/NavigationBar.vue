<template>
  <div class="flex items-center h-16 bg-white border-b border-gray-200">
    <div class="relative w-full px-6 mx-auto max-w-screen">
      <div class="flex items-center -mx-6">
        <div class="pl-6 pr-6">
          <div class="flex items-center">
            <a href="#" class="block">SIS</a>
          </div>
        </div>
        <nav class="relative flex flex-grow">
          <div class="px-4">
            <Search :suggestions="suggestions" />
          </div>
          <Menu :items="menuItems" />
        </nav>
      </div>
    </div>
  </div>
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
