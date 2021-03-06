/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
 const clearCart = documnet.getElementsByTagName('tbody');
 clearCart.innerHTML = '';
}
console.log(clearCart);
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
const tbody =getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (i =0; i < cart.items.length ; i ++) {
    const tr =document.createElement('tr');
    tbody.appendChild(tr);
    const deletelink = document.createElement('td');
    const quantity = document.createElement('td');
    const item = document.createElement('td');
    tr.appendChild(deletelink);
    tr.appendChild(quantity);
    tr.appendChild(item);
deletelink.textContent='X';
quantity.textContent=`${cart.items[i].quantity}`;
item.textContent=`${cart.items[i].item}`;

  }
  console.log(tbody);  
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
let remove=event.target.deletelink.value;
cart.removeItem(remove);
cart.saveToLocalStorage();
renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
