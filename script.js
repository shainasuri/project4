console.log('welcome to the kitchen');

let inputElement = document.querySelector("#text-input");

let result = document.querySelector("#text-result");

let menuResult = document.querySelector("#personal-menu");

inputElement.addEventListener("keydown",
function(event) {
    if (event.key == "Enter") {
        console.log(inputElement);
        result.innerText = "Today you should have: " + inputElement.value;
        

        inputElement.value = "";
    }
}
);

