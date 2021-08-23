const sides = document.querySelectorAll(".side-input");
const btnHypotenuse = document.querySelector("#hypotenuse-btn");
const outputDiv = document.querySelector("#output-Div");

function calcSumOfSq(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}
btnHypotenuse.addEventListener("click",function calcHypo(){
             const sumOfSquares=calcSumOfSq(Number(sides[0].value),Number(sides[1].value));
             const lengthOfhypo = Math.sqrt(sumOfSquares);
             outputDiv.innerText="Hypotenuse:"+lengthOfhypo;
});
