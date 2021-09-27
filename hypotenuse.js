const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const checkHypotenuse = document.querySelector("#check-hypotenuse");
const output = document.querySelector("#output");

checkHypotenuse.addEventListener('click', calculateHypotenuse);

function calculateHypotenuse() {

    var hypotenuse =  Math.sqrt(square(sideA.value) + square(sideB.value));
    
    output.innerText = "The length of Hypotenuse is " + hypotenuse + " 🛆" ;
    
    
}

function square(s){
    return s*s;
}
