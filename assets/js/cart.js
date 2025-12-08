let cart = {};

function addToCart(id) {
  if (!cart[id]) cart[id] = 1;
  else cart[id]++;
  updateUI();
}

function updateQty(id, qty) {
  qty = parseInt(qty);
  if (qty <= 0 || isNaN(qty)) return;
  cart[id] = qty;
  updateUI();
}

function clearCart() {
  cart = {};
  updateUI();
}
