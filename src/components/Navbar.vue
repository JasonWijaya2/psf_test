<!-- src/components/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <img src="@/assets/PSFGroupLogo.png" alt="PSF Group" class="full-size-logo" />
    </div>
    <div class="navbar-nav">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About</RouterLink>
      <RouterLink to="/booking" class="nav-item">Booking</RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #005f73;
  /* Dark blue */
  color: white;
  padding: 1rem 2rem;
}

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background 0.3s;
}

.nav-item:hover {
  background-color: #034b5a;
  border-radius: 5px;
}

.full-size-logo {
  width: 30%;
  height: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .navbar-brand {
    margin-bottom: 1rem;
  }

  .navbar-nav {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .nav-item {
    padding: 0.5rem;
  }

  .full-size-logo {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .navbar-nav {
    display: none;
    /* Initially hidden for mobile */
  }

  .navbar.active .navbar-nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .full-size-logo {
    width: 70%;
  }
}

/* Hamburger icon for small screens */
.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
}

@media (max-width: 480px) {
  .hamburger {
    display: flex;
  }
}
</style>