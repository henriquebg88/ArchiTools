console.log("App rodando...");

const feetToCentimeters = 30.48;
const inchToCentimeters = 2.54;

var result
var Centimeters;
var Meters;

function calculate() {
    result = convertNumbers();
    showResult("resultadoCM" ,numberWithCommas(result.toFixed(2))+" cm");
    showResult("resultadoM" ,numberWithCommas((result/100).toFixed(2)+" m"));
}

function getInsertedNumbers() {
    var insertedFeet;
    var insertedInches;

    insertedFeet = document.getElementById("input_feet").valueAsNumber || 0;
    insertedInches = document.getElementById("input_inches").valueAsNumber || 0;
    return {insertedFeet, insertedInches}
}
function convertNumbers() {
    var {insertedFeet, insertedInches} = getInsertedNumbers();
    return (insertedFeet * feetToCentimeters) + (insertedInches * inchToCentimeters);
}
function showResult(elementId, number) {
    document.getElementById(elementId).textContent = number;
}
function numberWithCommas(x) {
    return x.toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
