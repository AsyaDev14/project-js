import storage from './storage.js';
import refs from './refs.js';

function updateCartCount() {
  const cartCount = localStorage.getItem('cartCount');
  // Update the cart count in the span element
  if (refs.cartCountSpan) {
    refs.cartCountSpan.textContent = cartCount || '0';
  }
}
