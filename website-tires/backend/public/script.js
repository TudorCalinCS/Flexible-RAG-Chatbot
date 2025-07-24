const BACKEND_URL = 'http://localhost:5000/products';

async function fetchProducts(query = '') {
  const url = query ? `${BACKEND_URL}?search=${encodeURIComponent(query)}` : BACKEND_URL;
  const res = await fetch(url);
  return await res.json();
}

function renderProducts(products) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  if (products.length === 0) {
    list.innerHTML = '<p style="grid-column: 1 / -1;">Niciun produs găsit.</p>';
    return;
  }

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.addEventListener('click', () => {
      window.location.href = `/${product.slug}`;
    });

    card.innerHTML = `
        <img src="images/generic-tire.jpg" alt="Anvelopă ${product.brand}">
        <div class="content">
          <h3>${product.brand} ${product.model}</h3>
          <p class="description">${product.description}</p>
          <div class="price">Preț: ${product.price} $</div>
          <button onclick="event.stopPropagation(); window.location.href='/${product.slug}';">Detalii</button>
        </div>
      `;

    list.appendChild(card);
  });
}


function showDetails(product) {
  document.getElementById('product-name').textContent = `${product.brand} ${product.model}`;
  document.getElementById('product-desc').textContent = product.description;
  document.getElementById('product-price').textContent = `Preț: ${product.price} $`;
  document.getElementById('product-size').textContent = `Dimensiune: ${product.size}`;
  document.getElementById('product-type').textContent = `Tip: ${product.tire_type}`;
  document.getElementById('product-details').classList.remove('hidden');
}

function closeDetails() {
  document.getElementById('product-details').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', async () => {
  const searchInput = document.getElementById('search-bar');
  const searchBtn = document.getElementById('search-btn');

  searchBtn.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    const results = await fetchProducts(query);
    renderProducts(results);
  });

  const products = await fetchProducts();
  renderProducts(products);
});
