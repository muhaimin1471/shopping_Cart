let cart = {};
let discountPercent = 0;
let promoApplied = false;

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
  discountPercent = 0;
  promoApplied = false;
  updateUI();
}

function applyPromoCode() {
  if (promoApplied) {
    document.getElementById("promo-message").innerText =
      "Promo code already applied";
    return;
  }

  const code = document.getElementById("promo-input").value.trim();

  if (code === "ostad10") {
    discountPercent = 10;
    promoApplied = true;
    document.getElementById("promo-message").innerText =
      "10% discount applied!";
  } else if (code === "ostad50") {
    discountPercent = 50;
    promoApplied = true;
    document.getElementById("promo-message").innerText =
      "50% discount applied!";
  } else {
    document.getElementById("promo-message").innerText =
      "Invalid Promo Code";
  }

  updateUI();
}
