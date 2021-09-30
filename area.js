const base = document.querySelector("#base");
const height = document.querySelector("#height");
const buttonCheckArea = document.querySelector("#check-area");
const output = document.querySelector("#output");

buttonCheckArea.addEventListener('click', calculateArea);

function calculateArea() {
    if (Number(base.value) > 0 && Number(height.value) > 0) {
        var area = (base.value * height.value) / 2;
        output.innerText = "The area of triangle is " + area + " cm² 🛆";
    }
    else{
        output.innerText = "enter positive values"
    }

}