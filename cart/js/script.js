let cart = [];
let total = 0;

window.onload = function () {
  loadCart();
  updateCart();
};

function AddToCart(title, price) {
  const ArrayIndex = cart.findIndex((item) => item.title === title);
  if (ArrayIndex > -1) {
    cart[ArrayIndex].quantity += 1;
  } else {
    cart.push({ title, price, quantity: 1 });
  }

  updateCart();

  //store the cart to localstorage;
  storeCart();
}

function storeCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

function updateCart() {
  const CartItems = document.getElementById("cart_items");
  const Total = document.getElementById("total");

  CartItems.innerHTML = "";

  total = 0;

  cart.forEach((item) => {
    const cartProduct = document.createElement("div");
    cartProduct.innerHTML = `
        <span>${item.title} (x${item.quantity})</span>
        <span>Rs.${item.price * item.quantity}</span>
        `;
    CartItems.appendChild(cartProduct);

    total += item.price * item.quantity;
  });

  Total.textContent = total.toFixed(2);
}

//clear cart
function clearCart() {
  localStorage.clear();
  document.getElementById("cart_items").textContent = "";
  document.getElementById("total").textContent = 0;

  cart = [];
}
