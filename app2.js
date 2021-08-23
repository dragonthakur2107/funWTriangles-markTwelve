const quizForm = document.querySelector(".quiz-Form");
const submitAnswerBtn = document.querySelector("#submit-Answer-Btn");
const resultDiv = document.querySelector("#result-Div");

const correctAnswers = ["Opposite to biggest angle","45,45,60"];
submitAnswerBtn.addEventListener("click",function calcScore(){
    let score=0;
    let i=0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
        if(value === correctAnswers[i]){
            score = score + 1;
        }
        i = i + 1;
    }
    resultDiv.innerText = "Your Score:" + score;
});