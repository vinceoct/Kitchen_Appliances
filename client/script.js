function toggleOptions(category) {
  const categoryOptions = document.getElementById(category);

  if (categoryOptions) {
    categoryOptions.classList.toggle('active');
    const isActive = categoryOptions.classList.contains('active');

    if (isActive) {
      categoryOptions.style.height = `${categoryOptions.scrollHeight}px`;

      if (category === 'air-fryers') {
        fetchAirfryerOptions();
      } else if (category === 'microwaves') {
        fetchMicrowaveOptions();
      } else if (category === 'fridges') {
        fetchRefrigeratorOptions();
      } else if (category === 'all') {
        fetchAllOptions();
      }
    } else {
      categoryOptions.style.height = '0';
    }
  } else {
    console.error(`Category options with ID '${category}' not found.`);
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
async function addItem() {
  const itemName = document.getElementById('item-name').value;
  const itemPrice = parseFloat(document.getElementById('item-price').value);
  const itemImage = document.getElementById('item-image').value;
  const itemDescrip = document.getElementById('item-descrip').value;
  const itemType = document.getElementById('item-type').value;
  const itemBrand = document.getElementById('item-brand').value;

  const item = {
    name: itemName,
    brand: itemBrand,
    type: itemType,
    description: itemDescrip,
    price: itemPrice,
    image: itemImage,
  };

  const apiUrl = 'http://localhost:3001/api/appliances/';

  try {
    const response = await axios.post(apiUrl, item);
    if (response.status === 200) {
      alert('Item added successfully!');
       
    }
  } catch (error) {
    console.error('Error adding item:', error);
  }
  clearItemFields();
}

function clearItemFields() {
  document.getElementById('item-name').value = '';
  document.getElementById('item-price').value = '';
  document.getElementById('item-image').value = '';
  document.getElementById('item-type').value = '';
  document.getElementById('item-brand').value = '';
  document.getElementById('item-descrip').value = '';
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
async function fetchAllOptions() {
  const apiUrl = 'http://localhost:3001/api/appliances';

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
      itemImage.classList.add("all");
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

      let categoryOptions = document.getElementById("all");
      categoryOptions.appendChild(itemDiv);
    });
  } catch (error) {
    console.error('Error fetching options:', error);
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

