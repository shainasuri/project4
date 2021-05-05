// ------------------------------ (CHOICES.HTML) ------------------------------

var moods = new Array ('super hungry', 'snacky', 'cheat food', 'tired', 'something healthy', 'bored', 'unwell', 'midnight snack', 'dessert');

var recommendations = []
// super hungry
recommendations[0] = new Array ('spinach lasagna', 'pizza burrito', 'pizza quesadilla', 'black bean burger', 'cheeseburger', 'fettuccini alfredo', 'enchiladas', 'burrito bowl', 'shepherds pie', 'sloppy joe', 'mashed potatoes', 'loaded nachos', 'spinach lasagna', 'pizza burrito', 'pizza quesadilla', 'black bean burger', 'cheeseburger', 'fettuccini alfredo', 'enchiladas', 'burrito bowl', 'shepherds pie', 'sloppy joe', 'mashed potatoes', 'loaded nachos', 'spaghetti and meatballs', 'pasta', 'penne arrabbiata' );
// cheat food
recommendations[1] = new Array ('burgers', 'fries', 'pizza', 'pasta', 'burgers', 'fries', 'pizza', 'pasta', 'grilled cheese sandwich', 'burrito', 'tacos', 'nachos', 'noodles', 'fried rice', 'dim sum', 'ice cream', 'chocolate cake', 'cheesecake', 'mac n cheese', 'hot dogs', 'burrito', 'tacos', 'pancakes', 'pizza', 'waffles', 'loaded baked potato', 'chocolate');
// midnight snack
recommendations[2] = new Array ('bread pizza', 'chili cheese toast', 'egg in a mug', 'nutella on toast', 'PB&J', 'instant noodles', 'ramen', 'potato chips', 'nachos', 'leftover pizza', 'ice cream', 'cheese', 'pasta', 'bananas', 'popcorn', 'cereal', 'butter toast', 'milkshake', 'fruit', 'nuts', 'sandwich', 'leftovers', 'hummus and crackers', 'yogurt', 'oatmeal', 'sweet potato fries', 'pizza', 'nutella on toast');
// something healthy
recommendations[3] = new Array ('bananas', 'nuts', 'apples', 'oranges', 'cucumbers', 'celery', 'quinoa', 'kale', 'avocados', 'watermelon', 'blueberries', 'eggs', 'walnuts', 'carrots', 'green beans', 'yogurt', 'coconut water', 'broccoli', 'mangoes', 'salad', 'smoothie', 'zoodles', 'baked veggie lasagna', 'hummus', 'cauliflower pizza', 'mushroom soup', 'pad thai', 'lentils and rice', 'poke bowl');
// snacky
recommendations[4] = new Array ('chips & dip', 'hummus & pita', 'hummus & veggies', 'pesto bruschetta', 'chocolate covered blueberries', 'popcorn', 'pretzels', 'mixed nuts', 'guacamole', 'nachos', 'almonds', 'dark chocolate', 'apples', 'oranges', 'granola bar', 'sweet potato chips', 'potato chips', 'tater tots', 'jalapeño poppers', 'tomato bruschetta', 'cookies', 'oreos', 'croissants', 'mixed berries', 'gummy bears', 'sandwich', 'candy');
// tired
recommendations[5] = new Array ('bananas', 'coffee', 'sweet potato fries', 'eggs', 'apples', 'dark chocolate', 'goji berries', 'quinoa', 'oatmeal', 'yogurt', 'hummus', 'edamame', 'lentils', 'avocados', 'oranges', 'strawberries', 'seeds', 'beans', 'green tea', 'nuts', 'popcorn', 'beets', 'almonds', 'spinach', 'watermelon', 'dates');
// bored
recommendations[6] = new Array ('nutella on toast', 'PB&J', 'fries', 'banana bread', 'homemade donuts', 'mac n cheese', 'matcha oreos', 'oreos', 'funfetti cake', 'giant cinammon roll', 'tater tots', 'ramen', 'tacos', 'soda floats', 'donut milkshake', 'cookies and cream shake', 'avocado toast', 'spaghetti', 'pizza quesadilla', 'jalapeño poppers', 'smores', 'ice cream', 'cereal', 'mermaid toast', 'bagel', 'sushi', 'pancakes');
// unwell
recommendations[7] = new Array ('soup', 'broth', 'garlic', 'coconut water', 'peppermint tea', 'honey', 'ginger', 'spicy food', 'bananas', 'oatmeal', 'yogurt', 'avocados', 'leafy green vegetables', 'chamomile tea', 'licorice', 'flaxseeds', 'papaya', 'buttermilk', 'kombucha', 'toast', 'porridge', 'rice', 'fruit juice', 'carrots', 'applesauce', 'sweet potatoes', 'soup');
// dessert
recommendations[8] = new Array ('ice cream', 'apple pie', 'tiramisu', 'brownie', 'cookies', 'cake', 'waffles', 'jalebi', 'churros', 'cheesecake', 'custard', 'cinnamon rolls', 'eclairs', 'gelato', 'french toast', 'flan', 'boba', 'lemon cake', 'chocolate cake', 'banana bread', 'popsicle', 'scones', 'smores', 'pudding', 'marshmallows', 'chocolate', 'jellybeans');

console.log(recommendations[0][Math.floor(Math.random() * recommendations[0].length)]);


// function showMoods () {
//     for (i = 0; i < moods.length; i++)
//     {
//         var categories = document.createElement("li");
//         var moodCategory = document.createElement("p");
//         moodCategory.innerHTML = moods[i];
//         categories.classList.add("mood-magnet")
//         categories.append(moodCategory);
//         document.querySelector("#moods").append(categories);
//     }
// }
// showMoods();

let inputElement = document.querySelector("#name-input");
let result = document.querySelector("#name-result");

inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector("#final-result").append(result);
        result.innerText = "Hey, " + inputElement.value + "!";
        inputElement.value = "";
        document.getElementById("super-hungry").classList.remove("hidden");
        document.getElementById("snacky").classList.remove("hidden");
        document.getElementById("cheat-food").classList.remove("hidden");
        document.getElementById("tired").classList.remove("hidden");
        document.getElementById("something-healthy").classList.remove("hidden");
        document.getElementById("bored").classList.remove("hidden");
        document.getElementById("unwell").classList.remove("hidden");
        document.getElementById("midnight-snack").classList.remove("hidden");
        document.getElementById("dessert").classList.remove("hidden");
        document.getElementById("prompt-2").classList.remove("hidden");
        document.getElementById("name-prompt").classList.add("hidden");
    }
}); 

 
$(document).ready(function(){
    $(".mood-magnet").click(function(){
        $(this).css("box-shadow", "inset 0px 2px 4px rgba(0, 0, 0, 0.25)");
        $(this).siblings(".mood-magnet").css("box-shadow", "none");
    });
});
 
// const embedElements = () => {
//     recommendations[0].forEach(element => {
//        document.getElementById('superhungry').innerHTML +=
//        `<p>${element}</p>`;
//     });
// };
 
 
let superHungry = document.querySelector("#super-hungry");
let finalResult =  document.querySelector("#food-result")


superHungry.addEventListener("click", function(event){
    document.querySelector("#final-result").append(finalResult);
    finalResult.innerText = "Have some " + recommendations[0][Math.floor(Math.random() * recommendations[0].length)] + " today!";
   
});


 
// var categories = document.createElement("li");
//         var moodCategory = document.createElement("p");
//         moodCategory.innerHTML = moods[i];
//         categories.classList.add("mood-magnet")
//         categories.append(moodCategory);
//         document.querySelector("#moods").append(categories);


console.log(recommendations[0][Math.floor(Math.random() * recommendations[0].length)]);