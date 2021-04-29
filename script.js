console.log('welcome to the kitchen');

// let inputElement = document.querySelector("#text-input");

// let result = document.querySelector("#text-result");

// let menuResult = document.querySelector("#personal-menu");

// inputElement.addEventListener("keydown",
// function(event) {
//     if (event.key == "Enter") {
//         console.log(inputElement);
//         result.innerText = "Today you should have: " + inputElement.value;
        

//         inputElement.value = "";
//     }
// }
// );




// ------------------------------ INNER (FRIDGE.HTML) ------------------------------
let cuisineResult = document.querySelector('#cuisine');
let container_1 = document.querySelector('#food-container-1');
let container_2 = document.querySelector('#food-container-2');
let container_3 = document.querySelector('#food-container-3');
let container_4 = document.querySelector('#food-container-4');
let container_5 = document.querySelector('#food-container-5');
let container_6 = document.querySelector('#food-container-6');
let container_7 = document.querySelector('#food-container-7');
let container_8 = document.querySelector('#food-container-8');
let container_9 = document.querySelector('#food-container-9');
let foodContainers = document.querySelector('.food-containers')

container_1.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Italian food";
    container_1.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_2.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Indian food";
    container_2.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_3.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Mexican food";
    container_3.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_4.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Thai food";
    container_4.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_5.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Mediterranean food";
    container_5.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_6.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Chinese food";
    container_6.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_7.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Japanese food";
    container_7.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_8.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "American food";
    container_8.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})
container_9.addEventListener('mouseenter', function(event) {
    cuisineResult.innerHTML = "Something sweet";
    container_9.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
})

document.querySelectorAll('.food-containers').forEach(div => {
    container_1.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_1.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_2.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_2.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_3.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_3.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_4.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_4.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_5.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_5.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_6.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_6.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_7.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_7.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_8.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_8.style.boxShadow = "none";
    })
})
document.querySelectorAll('.food-containers').forEach(div => {
    container_9.addEventListener('mouseleave', function(event) {
        cuisineResult.innerHTML = "";
        container_9.style.boxShadow = "none";
    })
})


// document.querySelectorAll('.food-containers').forEach(div => {
//     foodContainers.addEventListener('mouseenter', function(event) {
//     foodContainers.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
//     console.log('shadow');
//     })
//     foodContainers.addEventListener('mouseleave', function(event) {
//     cuisineResult.innerHTML = "";
//     foodContainers.style.boxShadow = "none";
//     })
// })  




// ------------------------------ SIDE (CHOICES.HTML) ------------------------------

var superHungry = ['spinach lasagna', 'pizza burrito', 'pizza quesadilla', 'black bean burger', 'cheeseburger', 'fettuccini alfredo', 'enchiladas', 'burrito bowl', 'shepherds pie', 'sloppy joe', 'mashed potatoes', 'loaded nachos', 'spinach lasagna', 'pizza burrito', 'pizza quesadilla', 'black bean burger', 'cheeseburger', 'fettuccini alfredo', 'enchiladas', 'burrito bowl', 'shepherds pie', 'sloppy joe', 'mashed potatoes', 'loaded nachos', 'spaghetti and meatballs', 'pasta', 'penne arrabbiata' ];
var cheatFood = ['burgers', 'fries', 'pizza', 'pasta', 'burgers', 'fries', 'pizza', 'pasta', 'grilled cheese sandwich', 'burrito', 'tacos', 'nachos', 'noodles', 'fried rice', 'dim sum', 'ice cream', 'chocolate cake', 'cheesecake', 'mac n cheese', 'hot dogs', 'burrito', 'tacos', 'pancakes', 'pizza', 'waffles', 'loaded baked potato', 'chocolate'];
var midnightSnack = ['bread pizza', 'chili cheese toast', 'egg in a mug', 'nutella on toast', 'PB&J', 'instant noodles', 'ramen', 'potato chips', 'nachos', 'leftover pizza', 'ice cream', 'cheese', 'pasta', 'bananas', 'popcorn', 'cereal', 'butter toast', 'milkshake', 'fruit', 'nuts', 'sandwich', 'leftovers', 'hummus and crackers', 'yogurt', 'oatmeal', 'sweet potato fries', 'pizza', 'nutella on toast'];
var somethingHealthy = ['bananas', 'nuts', 'apples', 'oranges', 'cucumbers', 'celery', 'quinoa', 'kale', 'avocados', 'watermelon', 'blueberries', 'eggs', 'walnuts', 'carrots', 'green beans', 'yogurt', 'coconut water', 'broccoli', 'mangoes', 'salad', 'smoothie', 'zoodles', 'baked veggie lasagna', 'hummus', 'cauliflower pizza', 'mushroom soup', 'pad thai', 'lentils and rice', 'poke bowl'];
var snacky = ['chips & dip', 'hummus & pita', 'hummus & veggies', 'pesto bruschetta', 'chocolate covered blueberries', 'popcorn', 'pretzels', 'mixed nuts', 'guacamole', 'nachos', 'almonds', 'dark chocolate', 'apples', 'oranges', 'granola bar', 'sweet potato chips', 'potato chips', 'tater tots', 'jalapeño poppers', 'tomato bruschetta', 'cookies', 'oreos', 'croissants', 'mixed berries', 'gummy bears', 'sandwich', 'candy'];
var bored = ['nutella on toast', 'PB&J', 'fries', 'banana bread', 'homemade donuts', 'mac n cheese', 'matcha oreos', 'oreos', 'funfetti cake', 'giant cinammon roll', 'tater tots', 'ramen', 'tacos', 'soda floats', 'donut milkshake', 'cookies and cream shake', 'avocado toast', 'spaghetti', 'pizza quesadilla', 'jalapeño poppers', 'smores', 'ice cream', 'cereal', 'mermaid toast', 'bagel', 'sushi', 'pancakes'];
var tired = ['bananas', 'coffee', 'sweet potato fries', 'eggs', 'apples', 'dark chocolate', 'goji berries', 'quinoa', 'oatmeal', 'yogurt', 'hummus', 'edamame', 'lentils', 'avocados', 'oranges', 'strawberries', 'seeds', 'beans', 'green tea', 'nuts', 'popcorn', 'beets', 'almonds', 'spinach', 'watermelon', 'dates']; 
var unwell = ['soup', 'broth', 'garlic', 'coconut water', 'peppermint tea', 'honey', 'ginger', 'spicy food', 'bananas', 'oatmeal', 'yogurt', 'avocados', 'leafy green vegetables', 'chamomile tea', 'licorice', 'flaxseed', 'papaya', 'buttermilk', 'kombucha', 'toast', 'porridge', 'rice', 'fruit juice', 'carrots', 'applesauce', 'sweet potatoes', 'eggs'];
var dessert = ['ice cream', 'apple pie', 'tiramisu', 'brownie', 'cookies', 'cake', 'waffles', 'jalebi', 'churros', 'cheesecake', 'custard', 'cinnamon rolls', 'eclairs', 'gelato', 'french toast', 'flan', 'boba', 'lemon cake', 'chocolate cake', 'banana bread', 'popsicle', 'scones', 'smores', 'pudding', 'marshmallows', 'chocolate', 'jellybeans'];

