<template>
  <div class="home">
    <header class="hero fade-in">
      <h1>Welcome to Pancoran Soccer Field</h1>
      <p>Your destination for the best soccer fields and basketball courts in Jakarta!</p>
    </header>

    <section class="features fade-in">
      <h2>Why Choose Us?</h2>
      <ul>
        <li>✅ Two professional soccer fields that meet FIFA standards</li>
        <li>🏀 One 3x3 basketball court for versatile sports</li>
        <li>🏆 Recreational and competitive activities for all ages</li>
        <li>📅 Flexible booking options to fit your schedule</li>
      </ul>
    </section>

    <section class="cta fade-in">
      <h2>Ready to Play?</h2>
      <p>Book your field today and enjoy a game!</p>
      <router-link to="/booking" class="book-button">Book Now</router-link>
    </section>
  </div>
</template>

<script setup lang="ts">
// You can add your logic here if needed
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 2rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.hero {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
}

h2 {
  font-size: 1.8rem;
  margin: 1.5rem 0;
  color: #444;
}

.features {
  margin: 2rem 0;
}

.features ul {
  list-style-type: none;
  padding: 0;
}

.features li {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.cta {
  margin: 2rem 0;
}

.book-button {
  background-color: #4CAF50;
  /* Green */
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.book-button:hover {
  background-color: #45a049;
  /* Darker green */
}

/* Animation Styles */
.fade-in {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
    /* Start slightly lower */
  }

  to {
    opacity: 1;
    transform: translateY(0);
    /* End in place */
  }
}
</style>