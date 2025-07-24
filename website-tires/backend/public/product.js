function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", async () => {
  const slug = window.location.pathname.split("/")[1];

  try {
    const res = await fetch(`http://localhost:5000/product/${slug}`);
    const product = await res.json();

    document.getElementById("product-title").textContent = `${product.brand} ${product.model}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = `Preț: ${product.price} lei`;
    document.getElementById("product-size").textContent = `Dimensiune: ${product.size}`;
    document.getElementById("product-type").textContent = `Tip: ${product.tire_type}`;
  } catch (error) {
    document.querySelector(".container").innerHTML = "<h2>Produsul nu a fost găsit.</h2>";
  }
});
