const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkTriangle= document.querySelector("#check-triangle");
const output = document.querySelector("#output");

checkTriangle.addEventListener("click", isTriangle);

function isTriangle(){

    if(angle1.value > 0 && angle2.value > 0 && angle3.value > 0){

        const sumOfAngles = calculateSumOfAngles(angle1.value, angle2.value, angle3.value);
        if( sumOfAngles === 180){
            output.innerText = "YAY! The angles form a triangle 🛆 " ;
        }
        else{
            output.innerText = "Oh no! The angles don't form a triangle ⚠️ " ;
        }
    }
    else{
        output.innerText = "All the angles should be greater than 0 ⚠️"
    }

    
}

function calculateSumOfAngles(angleOne, angleTwo, angleThree){
    
    return parseInt(angleOne) + parseInt(angleTwo) + parseInt(angleThree);
}
