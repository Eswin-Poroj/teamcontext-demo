const PRODUCTS = [
  { id: 1, name: 'Blue Mug', price: 12 },
  { id: 2, name: 'Green Notebook', price: 8 },
];
document.getElementById('products').innerHTML = PRODUCTS.map((p) => `<p>${p.name} — $${p.price}</p>`).join('');
