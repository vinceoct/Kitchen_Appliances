function toggleOptions(category) {
  const categoryOptions = document.getElementById(category);
  categoryOptions.classList.toggle('active');
  const isActive = categoryOptions.classList.contains('active');

  if (isActive) {
    categoryOptions.style.height = `${categoryOptions.scrollHeight}px`;

    // Make separate requests for each category button
    if (category === 'air-fryers') {
      fetchAirfryerOptions();
    } else if (category === 'microwaves') {
      fetchMicrowaveOptions();
    } else if (category === 'fridges') {
      fetchRefrigeratorOptions();
    }
  } else {
    categoryOptions.style.height = '0';
  }
}

async function fetchAirfryerOptions() {
  const apiUrl = 'http://localhost:3001/api/appliances/type/Airfryer';

  try {
    const response = await axios.get(apiUrl);
    const options = response.data.appliances;

    options.forEach((option) => {
      let itemDiv = document.createElement("div");

      let itemName = document.createElement("h1");
      itemName.innerText = option.name;
      itemDiv.appendChild(itemName);

      let itemPrice = document.createElement("h2");
      itemPrice.innerText = "Price: $" + option.price;
      itemDiv.appendChild(itemPrice);

      let itemImage = document.createElement("img");
      itemImage.src = option.image;
      itemImage.classList.add("airFryer");
      itemDiv.appendChild(itemImage);

      let itemDescrip = document.createElement("h2");
      itemDescrip.innerText = option.description;
      itemDiv.appendChild(itemDescrip);

      let addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Add to Cart";
      addToCartButton.classList.add("add-to-cart-button");
      addToCartButton.addEventListener("click", function() {
        addToCart(option.name, option.price, option.image);
      });
      itemDiv.appendChild(addToCartButton);

      let categoryOptions = document.getElementById("air-fryers");
      categoryOptions.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching Airfryer options:', error);
  }
}


async function fetchMicrowaveOptions() {
  const apiUrl = 'http://localhost:3001/api/appliances/type/Microwave';

  try {
    const response = await axios.get(apiUrl);
    const options = response.data.appliances;

    options.forEach((option) => {
      let itemDiv = document.createElement("div");

      let itemName = document.createElement("h1");
      itemName.innerText = option.name;
      itemDiv.appendChild(itemName);

      let itemPrice = document.createElement("h2");
      itemPrice.innerText = "Price: $" + option.price;
      itemDiv.appendChild(itemPrice);

      let itemImage = document.createElement("img");
      itemImage.src = option.image;
      itemImage.classList.add("microwaves");
      itemDiv.appendChild(itemImage);

      let itemDescrip = document.createElement("h2");
      itemDescrip.innerText = option.description;
      itemDiv.appendChild(itemDescrip);

      let addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Add to Cart";
      addToCartButton.classList.add("add-to-cart-button"); 
      addToCartButton.addEventListener("click", function() {
        addToCart(option.name, option.price, option.image);
      });
      itemDiv.appendChild(addToCartButton);

      let categoryOptions = document.getElementById("microwaves");
      categoryOptions.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching Microwave options:', error);
  }
}

async function fetchRefrigeratorOptions() {
  const apiUrl = 'http://localhost:3001/api/appliances/type/Refrigerator';

  try {
    const response = await axios.get(apiUrl);
    const options = response.data.appliances;

    options.forEach((option) => {
      let itemDiv = document.createElement("div");

      let itemName = document.createElement("h1");
      itemName.innerText = option.name;
      itemDiv.appendChild(itemName);

      let itemPrice = document.createElement("h2");
      itemPrice.innerText = "Price: $" + option.price;
      itemDiv.appendChild(itemPrice);

      let itemImage = document.createElement("img");
      itemImage.src = option.image;
      itemImage.classList.add("fridges");
      itemDiv.appendChild(itemImage);

      let itemDescrip = document.createElement("h2");
      itemDescrip.innerText = option.description;
      itemDiv.appendChild(itemDescrip);

      let addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Add to Cart";
      addToCartButton.classList.add("add-to-cart-button"); 
      addToCartButton.addEventListener("click", function() {
        addToCart(option.name, option.price, option.image);
      });
      itemDiv.appendChild(addToCartButton);

      let categoryOptions = document.getElementById("fridges");
      categoryOptions.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching Refrigerator options:', error);
  }
}

function addToCart(name, price, image) {
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  let itemImage = document.createElement("img");
  itemImage.src = image;
  itemImage.classList.add("cart-image");
  cartItem.appendChild(itemImage);

  let itemName = document.createElement("h3");
  itemName.innerText = name;
  cartItem.appendChild(itemName);

  let itemPrice = document.createElement("p");
  itemPrice.innerText = `$${price}`;
  cartItem.appendChild(itemPrice);

  let cart = document.getElementById("cart");
  cart.appendChild(cartItem);
}
function clearCart() {
  let cart = document.getElementById("cart");
  while (cart.firstChild) {
    cart.removeChild(cart.firstChild);
  }
}
function clearCart() {
  let cartItems = document.getElementsByClassName("cart-item");
  while (cartItems.length > 0) {
    cartItems[0].remove();
  }
}

