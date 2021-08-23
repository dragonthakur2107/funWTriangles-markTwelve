const inputs = document.querySelectorAll(".input-angle");
const btnIsTriangle = document.querySelector("#is-triangle-btn");
const divOutput = document.querySelector("#output");

function calcSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1 +angle2 +angle3;
    return sumOfAngles;

}
function isItTriangle(){
    const sumOfAngles = calcSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles === 180){
        divOutput.innerText="It's A Triangle.";
        
    }
    else{
        divOutput.innerText="No,these Angles do not form a triangle.";
        
    }
      
}
btnIsTriangle.addEventListener("click",isItTriangle);