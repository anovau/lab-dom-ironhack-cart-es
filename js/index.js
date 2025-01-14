// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");
  let subtotal = product.querySelector(".subtotal span"); 
  let calculateSubtotal = price.innerHTML * quantity.value;
  subtotal.innerHTML = calculateSubtotal;
  return calculateSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelectorAll('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  const productsCart = document.querySelectorAll('.product');
  let total = 0;
  productsCart.forEach (product => total+= updateSubtotal(product) )

  // ITERATION 3
  const totalCart = document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
