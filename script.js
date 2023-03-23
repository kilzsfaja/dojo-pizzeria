/* var pizza = {
  crust:  ["thin", "deep dish", "thick", "hand tossed"],
  sauce:  ["traditional", "white", "pesto", "marinara"],
  cheese: ["provole", "cheddar", "mozzarella", "feta"] ,
  toppings: ["olives", "onions", "sausage", "mushrooms", "pepperoni"]
};
  
console.log(pizza); */

/* function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarela", [
  "pepperoni",
  "sausage",
]);
console.log(pizza1);

var pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

var pizza3 = pizzaOven(
  "thin",
  "pesto",
  ["mozzarella", "feta"],
  ["tomato", "olives"]
);
console.log(pizza3);

var pizza4 = pizzaOven("thick", "alfredo", "mozzarella", [
  "chicken",
  "olives",
  "garlic",
]);
console.log(pizza4);
 */
// BONUS

var crustType = ["thin", "thick", "deep dish", "stuffed crust", "no crust"];

var sauceType = ["marinara", "alfredo", "pesto", "andalouse", "bbq"];

var cheese = [
  "mozzarella",
  "feta",
  "goat cheese",
  "cheddar",
  "provolone",
  "monterey jack",
];

var toppings = [
  "garlic",
  "onions",
  "pepperoni",
  "bacon",
  "sausage",
  "olives",
  "pineapple",
  "ham",
  "chicken",
  "artichokes",
];

function randomSelector(arr) {
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function randomPizza() {
  var pizza = {};
  pizza.crustType = randomSelector(crustType);
  pizza.sauceType = randomSelector(sauceType);
  pizza.cheese = randomSelector(cheese);
  pizza.toppings = randomSelector(toppings);
  return pizza;
}

console.log(randomPizza());
