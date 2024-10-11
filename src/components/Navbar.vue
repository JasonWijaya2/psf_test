<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <h2>PSF</h2>
      </div>
      <div class="navbar-nav">
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
        <RouterLink to="/booking" class="nav-item">Booking</RouterLink>
      </div>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1e3a8a; /* Dark blue */
    color: white;
    padding: 1rem 2rem; /* Adjust padding */
  }
  
  .navbar-brand {
    font-size: 1.5rem; /* Brand name size */
  }
  
  .navbar-nav {
    display: flex;
    flex-direction: row;
    gap: 20px; /* Space between nav items */
  }
  
  .nav-item {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background 0.3s;
  }
  
  .nav-item:hover {
    background-color: #1e40af; /* Lighter blue */
    border-radius: 5px;
  }
  </style>
  