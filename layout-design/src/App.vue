<template>
  <body id="app" class="antialiased text-gray-900">
    <header>
      <NavigationBar />
    </header>
  </body>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
  name: 'app',
  components: { NavigationBar }
}

</script>

<style src="./assets/tailwind.css"></style>
