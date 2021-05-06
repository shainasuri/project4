
let myCursor = document.querySelector(".cursor")
document.addEventListener("mousemove", function(event){
    // console.log(event);
    myCursor.style.top = (event.pageY - 20) + "px";
    myCursor.style.left = (event.pageX - 20) + "px";
})
