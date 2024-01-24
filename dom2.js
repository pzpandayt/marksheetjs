let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "hello world";

let newBtn = document.createElement('button');

elem[0].appendChild(newBtn);

newBtn.innerHTML = "click here";
newBtn.className = "btn btn-dark px-5 fw-bold";
newBtn.style.letterSpacing = "10px";

//events

newBtn.addEventListener('click' , hello);
function hello(){
    console.log("you clicked on me!");
    newBtn.innerHTML = "wow!"
}

let input = document.createElement('input');
elem[0].appendChild(input);

input.className = "form-control mt-5";

input.addEventListener('keyup' , one);
function one(){
    console.log("apple")
}