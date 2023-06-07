function toggleOptions(category) {
    const categoryOptions = document.getElementById(category);
    categoryOptions.classList.toggle('active');
    const isActive = categoryOptions.classList.contains('active');
  
    if (isActive) {
      categoryOptions.style.height = `${categoryOptions.scrollHeight}px`;
      fetchCategoryOptions(category);
    } else {
      categoryOptions.style.height = '0';
    }
  }
  
  const apiUrl = 'http://localhost:3001/api/appliances';
  
  function fetchCategoryOptions(category) {
    const categoryOptionsDiv = document.getElementById(category);
  
    axios.get(apiUrl)
      .then((response) => {
        const data = response.data;
        const options = data[category];
  
        displayCategoryOptions(category, options);
      })
      .catch((error) => {
        console.error('Error fetching category options:', error);
      });
  }
  
  function displayCategoryOptions(category, options) {
    const categoryOptionsDiv = document.getElementById(category);
    categoryOptionsDiv.innerHTML = '';
  
    const optionsTitle = document.createElement('h3');
    optionsTitle.textContent = `${category} Options`;
    categoryOptionsDiv.appendChild(optionsTitle);
  
    options.forEach((option) => {
      const optionElement = document.createElement('p');
      optionElement.textContent = option;
      categoryOptionsDiv.appendChild(optionElement);
    });
  }
  
  function clearCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    cartItemsContainer.innerHTML = '';
  }
  
  function addToCart(productName, price, imageUrl) {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
  
    const productImage = document.createElement('img');
    productImage.src = imageUrl; // Add the image source for the product
  
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
  