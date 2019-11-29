<template>
  <div id="app" class="antialiased text-gray-900 bg-gray-100 bg-auto">
    <header>
      <NavigationBar />
    </header>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
  name: 'app',
  components: { NavigationBar }
}

</script>

<style src="./assets/tailwind.css"></style>
<style>
body {
  @apply bg-white; 
}
</style>
