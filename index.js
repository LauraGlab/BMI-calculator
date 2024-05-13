const inputs = document.querySelectorAll("input[type=radio]");
const metricRadio = document.querySelector(".metric-radio");
const imperialRadio = document.querySelector(".imperial-radio");
const metric = document.querySelector(".metric");
const imperial = document.querySelector(".imperial");
const btn = document.querySelector(".btn");
const BmiText = document.querySelector(".BmiText");


function radioChoose(){
    if (imperialRadio.checked) {
        imperial.style.display = "block";
      metric.style.display = "none";
    }
    if(metricRadio.checked){
      metric.style.display = "block";
      imperial.style.display = "none";
    }
}
    

function metricFormula(){

    let cm = document.getElementById("cm").value;
    let kg = Number(document.getElementById("kg").value);
    let m = Number((cm/100));
    let metFormula = (Math.round(kg)/(Math.pow(m, 2))).toFixed(2);
    

    let inches = document.getElementById("inches").value;
    let foot = Number(document.getElementById("foot").value);
    let footToInches = Number(inches * 12);
    let convertedInches = footToInches + foot;
    let stones = document.getElementById("stones").value;
    let lbs = Number(document.getElementById("lbs").value);
    let stonesToLbs = Number(stones * 14);
    let convertedLbs = stonesToLbs + lbs;
    let impFormula = Number(Math.round((convertedLbs / Math.pow(convertedInches, 2)) * 703).toFixed(2));


    const title = document.querySelector(".BMI-title");
    const bmiResult = document.querySelector(".BMI-number");
    const BmiText = document.querySelector(".BMI-text");


    title.textContent = "Your BMI is..."
    bmiResult.textContent = impFormula || metFormula;

    let BmiTag

    if ((metFormula || impFormula)  <= 18.49) {
      BmiTag = "underweight";
    } else if((metFormula || impFormula) >= 18.5 || (metFormula || impFormula) <= 24.9){
        BmiTag = "a healthy weight";
    } else if((metFormula || impFormula) >= 25.0 || (metFormula || impFormula) <= 29.9){
        BmiTag = "overweight";
    }else if((metFormula || impFormula) >= 30.0){
        BmiTag = "obese";
    }

    BmiText.textContent = `Your BMI suggests you're ${BmiTag}`;

}

inputs.forEach((input) => {
    input.addEventListener('click', radioChoose);
});
btn.addEventListener('click', metricFormula);

