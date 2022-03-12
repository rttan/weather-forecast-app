<template>
  <div id="app" class="px-4">
    <TopBar />
    <!-- <LoginPage /> -->
    <router-view />
  </div>
</template>

<script>
// import LoginPage from './components/LoginPage.vue'
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    // LoginPage,
    TopBar
  }
}
</script>