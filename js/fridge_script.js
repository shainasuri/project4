console.log('welcome to the kitchen');


let myCursor = document.querySelector(".cursor")
document.addEventListener("mousemove", function(event){
    // console.log(event);
    myCursor.style.top = (event.pageY - 40) + "px";
    myCursor.style.left = (event.pageX - 40) + "px";
})


// ------------------------------(FRIDGE.HTML) ------------------------------
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



