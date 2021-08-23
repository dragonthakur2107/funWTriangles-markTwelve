const inputSides = document.querySelectorAll(".side-Input");
const btnCalcArea = document.querySelector("#btn-Calc-Area");
const outputDiv = document.querySelector("#output-Div");

btnCalcArea.addEventListener("click",calcAreaOfTriangle);

function calcAreaOfTriangle(){
  
    const areaOfTriangle =((Number(inputSides[0].value))*(Number(inputSides[1].value)))/2;
    outputDiv.innerText="Area Of Triangle = "+areaOfTriangle;
};