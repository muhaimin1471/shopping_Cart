function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = products.map(p => `
    <div class="bg-white p-4 rounded shadow">
      <img src="${p.img}" class="product-image mb-2">
      <h3 class="font-bold">${p.name}</h3>
      <p>${p.desc}</p>
      <p class="font-semibold mt-2">৳${p.price}</p>
      <button onclick="addToCart(${p.id})" class="bg-blue-500 text-white px-3 py-1 mt-2 rounded">Add to Cart</button>
    </div>
  `).join("");
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const items = Object.keys(cart);
  let html = "";
  let total = 0;

  items.forEach(id => {
    const p = products.find(x => x.id == id);
    const qty = cart[id];
    total += p.price * qty;

    html += `
      <div class="flex justify-between border-b py-2">
        <span>${p.name} (৳${p.price})</span>
        <input type="number" value="${qty}" min="1" onchange="updateQty(${id}, this.value)" class="border w-16 text-center">
      </div>
    `;
  });

  container.innerHTML = html || "Cart is empty";
  document.getElementById("cart-total").innerText = "Total: ৳" + total;
}

function updateUI() {
  renderCart();
}

renderProducts();
updateUI();
