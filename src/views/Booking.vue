<template>
  <div class="container mt-4">
    <h1>Lapangan Bola yang Tersedia</h1>
    <div class="row">
      <div v-for="(field, index) in fields" :key="index" class="col-md-4 mb-4">
        <div class="card h-100 fade-in" :style="{ animationDelay: `${index * 0.5}s` }"
          >
          <img :src="field.image" class="card-img-top" alt="Lapangan" />
          <div class="card-body">
            <h5 class="card-title">{{ field.name }}</h5>
            <RouterLink :to="{ name: 'BookingForm', query: { fieldName: field.name } }" class="btn btn-primary">
              Book Now
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fields = ref([
  {
    name: 'Lapangan 1',
    image: '/src/components/icons/fieldimage1.jpg',
  },
  {
    name: 'Lapangan 2',
    image: '/src/components/icons/fieldimage2.jpg',
  },
])
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Animation Styles */
.fade-in {
  opacity: 0;
  /* Start invisible */
  animation: fadeIn 0.6s ease forwards;
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