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
console.log(options)

options.forEach((option)=>{
  console.log(option)
  let itemDiv = document.createElement("div") 

  let itemName = document.createElement("h1")
  console.log(option.name)
  itemName.innerText= option.name
  let categoryOptions= document.getElementById("air-fryers")
   categoryOptions.appendChild(itemName)
  let itemImage = document.createElement("img")
  itemImage.src= option.image
  itemImage.classList.add("airFryer")
  categoryOptions.appendChild(itemImage)
  let itemDescrip = document.createElement("h2")
  itemDescrip.innerText=option.description
  categoryOptions.appendChild(itemDescrip)
  //make an element 
  //give it an attribute class or id
  //populate it iwith data 
  //give it a place to go append it 
//dom manip via for each loop
})
    // displayCategoryOptions('air-fryers', options);
  } catch (error) {
    console.error('Error fetching Airfryer options:', error);
  }
  console.log(apiUrl)
}

async function fetchMicrowaveOptions() {
  const apiUrl = 'http://localhost:3001/api/appliances/type/Microwave';

  try {
    const response = await axios.get(apiUrl);
    const options = response.data.appliances;
  console.log(options)
  
  options.forEach((option)=>{
    console.log(option)
    let itemDiv = document.createElement("div")

    let itemName = document.createElement("h1")
    console.log(option.name)
    itemName.innerText=option.name
    let categoryOptions = document.getElementById("microwaves")
      categoryOptions.appendChild(itemName)
      let itemImage = document.createElement("img")
  itemImage.src= option.image
  itemImage.classList.add("microwaves")
  categoryOptions.appendChild(itemImage)
  let itemDescrip = document.createElement("h2")
  itemDescrip.innerText=option.description
  categoryOptions.appendChild(itemDescrip)
  })

    // displayCategoryOptions('microwaves', options);
  } catch (error) {
    console.error('Error fetching Microwave options:', error);
  }
  console.log(apiUrl)
}






async function fetchRefrigeratorOptions() {
  const apiUrl = 'http://localhost:3001/api/appliances/type/Refrigerator';

  try {
    const response = await axios.get(apiUrl);
    const options = response.data.appliances;
  console.log(options)
  
  options.forEach((option)=>{
    console.log(option)
    let itemDiv = document.createElement("div")

    let itemName = document.createElement("h1")
    console.log(option.name)
    itemName.innerText=option.name
    let categoryOptions = document.getElementById("fridges")
      categoryOptions.appendChild(itemName)
      let itemImage = document.createElement("img")
  itemImage.src= option.image
  itemImage.classList.add("fridges")
  categoryOptions.appendChild(itemImage)
  let itemDescrip = document.createElement("h2")
  itemDescrip.innerText=option.description
  categoryOptions.appendChild(itemDescrip)
  })
  

    // displayCategoryOptions('fridges', options);
  } catch (error) {
    console.error('Error fetching Refrigerator options:', error);
  }
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
