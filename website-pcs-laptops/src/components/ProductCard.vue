<template>
  <router-link :to="`/${product.slug}`" class="product-link">
    <div class="product-card">
      <img :src="imagePath" alt="product image" class="product-image" />
      <h3>{{ product.brand }} {{ product.model }}</h3>
      <span class="badge">{{ product.category.toUpperCase() }}</span>
      <p class="description">{{ product.description }}</p>
      <p class="price">{{ product.price.toLocaleString() }} RON</p>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['product'])

const imagePath = computed(() => {
  return `/assets/${props.product.category === 'laptop' ? 'laptop.jpg' : 'pc.jpg'}`
})
</script>

<style scoped>
.product-link {
  text-decoration: none;
  color: inherit;
}

.product-card {
  background: white;
  border-radius: 16px;
  padding: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  max-height: 160px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.badge {
  background: #007bff;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 0.9rem;
  color: #333;
  margin: 0.5rem 0 1rem;
  flex-grow: 1;
}

.price {
  font-weight: bold;
  font-size: 1.1rem;
  color: #1a1a1a;
}
</style>
