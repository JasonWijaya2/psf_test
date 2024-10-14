<template>
  <div class="app-container">
    <Navbar />
    <main class="main-content">
      <header class="main-header">
        <h1>PANCORAN SOCCER FIELD</h1>
      </header>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'; // Import the Navbar component

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  /* Align items vertically */
  min-height: 100vh;
  /* Ensure full height */
  width: 100%;
}

.main-content {
  flex: 1;
  /* Allow this section to grow and fill available space */
  padding: 2rem;
  /* Add padding for inner content */
  background-color: #f3f4f6;
  /* Light grey background */
}

.main-header {
  margin-bottom: 2rem;
  /* Space below the header */
}

h1 {
  font-size: 2rem;
  /* Font size for the main title */
  color: #333;
  /* Darker color for better contrast */
  text-align: center;
  /* Center the title */
}

/* Responsive Design */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
    /* Larger font size for wider screens */
  }

  .main-content {
    padding: 3rem;
    /* More padding for larger screens */
  }
}
</style>