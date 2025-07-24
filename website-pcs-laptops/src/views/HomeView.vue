<template>
  <div class="container">
    <header class="header">
      <h1>PC HUB💡</h1>
      <p>💻Laptopuri & PC-uri🖥️</p>
      <input
        v-model="search"
        type="text"
        placeholder="Caută după model, brand sau descriere..."
        class="search-bar"
      />
    </header>

    <div class="grid">
      <ProductCard
        v-for="item in filteredProducts"
        :key="item.id"
        :product="item"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const products = ref([])
const search = ref('')

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/products')
  products.value = await res.json()
})

const filteredProducts = computed(() => {
  return products.value.filter((p) =>
    `${p.brand} ${p.model} ${p.description}`.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.3rem;
  color: #222;
}

.header p {
  color: #555;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.search-bar {
  padding: 0.6rem 1rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
}
</style>
