<template>
  <div class="container" v-if="product">
    <button class="back-btn" @click="$router.push('/')">
      ← Înapoi
    </button>

    <div class="product-details">
      <img :src="imagePath" alt="product image" class="product-image" />

      <div class="info">
        <h1>{{ product.brand }} {{ product.model }}</h1>

        <ul>
          <li><strong>Tip:</strong> {{ product.category }}</li>
          <li><strong>Procesor:</strong> {{ product.processor }}</li>
          <li><strong>RAM:</strong> {{ product.ram }}</li>
          <li><strong>Stocare:</strong> {{ product.storage }}</li>
          <li><strong>Placă video:</strong> {{ product.graphics_card }}</li>
          <li><strong>Sistem de operare:</strong> {{ product.operating_system }}</li>
          <li><strong>Conectivitate:</strong> {{ product.connectivity }}</li>
          <li><strong>Preț:</strong> {{ product.price.toLocaleString() }} RON</li>
        </ul>

        <p class="desc"><em>{{ product.description }}</em></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const allProducts = await res.json()
  product.value = allProducts.find(p => p.slug === route.params.slug)
})

const imagePath = computed(() => {
  return product.value
    ? `/assets/${product.value.category === 'laptop' ? 'laptop.jpg' : 'pc.jpg'}`
    : ''
})
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: Arial, sans-serif;
}

.back-btn {
  background: none;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0;
}

.back-btn:hover {
  text-decoration: underline;
}

.product-details {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 250px;
  max-height: 180px;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.info {
  text-align: center;
}

.info h1 {
  margin-bottom: 1rem;
}

.info ul {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 1rem;
}

.info li {
  margin-bottom: 0.5rem;
}

.desc {
  font-size: 0.95rem;
  color: #555;
}
</style>
