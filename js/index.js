// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}
  


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
      if (state.greenPeppers) {
        greenPepper.style.visibility = 'visible';
      } else {
        greenPepper.style.visibility = 'hidden';
      }
    });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
 
}
  


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });

}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    const buttonType = button.classList[1]; // Assuming the second class represents the button type
    const isActive = state[buttonType]; // Assuming state object has properties for each button type

    if (isActive) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
 
}

function renderPrice() {
    // Iteration 4: change the HTML of `<aside class="panel price">`
    const pricePanel = document.querySelector('.panel.price');

  const totalPriceElement = pricePanel.querySelector('strong');
  const toppingListElement = pricePanel.querySelector('ul');

  const totalPrice = Object.keys(state)
    .filter(topping => state[topping])
    .reduce((total, topping) => total + ingredients[topping].price, basePrice);

  const selectedItemsList = Object.keys(state)
    .filter(topping => state[topping])
    .map(topping => `<li>${ingredients[topping].price}€ ${ingredients[topping].name}</li>`)
    .join('');

  toppingListElement.innerHTML = selectedItemsList;
  totalPriceElement.innerHTML = `$${totalPrice}`;
}
   

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`



// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`



// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`



// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
