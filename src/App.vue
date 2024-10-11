<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <header class="main-header">
        <h1>PANCORAN SOCCER FIELD</h1>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; // Import the Navbar component

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column; /* Align items vertically */
  min-height: 100vh; /* Ensure full height */
  width: 100%;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f3f4f6; /* Light grey */
  width: 100%;
}

.main-header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
}
</style>
