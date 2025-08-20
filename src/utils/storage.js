// Egyszerű mock tárolás localStorage-ban

const PRODUCT_KEY = "shop_products";
const CART_KEY = "shop_cart";
const USER_KEY = "shop_users";
const AUTH_KEY = "shop_auth";

// Mock termékadatok
const initialProducts = [
  { id: 1, name: "Cica plüss", price: 2990 },
  { id: 2, name: "Kutya bögre", price: 2190 },
  { id: 3, name: "Panda póló", price: 4990 }
];

export function getProducts() {
  if (!localStorage.getItem(PRODUCT_KEY)) {
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(initialProducts));
  }
  return JSON.parse(localStorage.getItem(PRODUCT_KEY));
}

export function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

export function addToCart(id) {
  const cart = getCart();
  cart.push(id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter((item) => item !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// Mock felhasználók
export function register(username) {
  let users = JSON.parse(localStorage.getItem(USER_KEY) || "[]");
  if (users.includes(username)) return false;
  users.push(username);
  localStorage.setItem(USER_KEY, JSON.stringify(users));
  localStorage.setItem(AUTH_KEY, username);
  return true;
}

export function login(username) {
  let users = JSON.parse(localStorage.getItem(USER_KEY) || "[]");
  if (!users.includes(username)) return false;
  localStorage.setItem(AUTH_KEY, username);
  return true;
}

export function getCurrentUser() {
  return localStorage.getItem(AUTH_KEY);
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}