const formQuiz = document.querySelector(".form-quiz");
const buttonSubmit = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswers = ['90°', 'right angled'];

buttonSubmit.addEventListener('click', calculateScore);

function calculateScore(){
    var score = 0;
    var index = 0;
    const resultData = new FormData(formQuiz);

    for (let value of resultData.values()){

        if( value === correctAnswers[index]){
            score += 1;
        }
        index += 1;   
    }
    output.innerText = "Your score is: " + score + " 🛆" ;
}