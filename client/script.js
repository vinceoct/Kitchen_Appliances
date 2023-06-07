function toggleOptions(category) {
    const categoryOptions = document.getElementById(category);
    categoryOptions.classList.toggle('active');
    const isActive = categoryOptions.classList.contains('active');
    
    if (isActive) {
      categoryOptions.style.height = `${categoryOptions.scrollHeight}px`;
    } else {
      categoryOptions.style.height = '0';
    }
  }
  
  function clearCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';
  }
  // Add this function to handle adding items to the shopping cart
  function addToCart(productName, price) {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
  
    const productImage = document.createElement('img');
    productImage.src = ''; // Add the image source for the product
  
    const productDetails = document.createElement('div');
    const productNameElement = document.createElement('h3');
    productNameElement.textContent = productName;
    const priceElement = document.createElement('p');
    priceElement.textContent = 'Price: $' + price;
  
    productDetails.appendChild(productNameElement);
    productDetails.appendChild(priceElement);
  
    cartItem.appendChild(productImage);
    cartItem.appendChild(productDetails);
  
    cartItemsContainer.appendChild(cartItem);
  }
  