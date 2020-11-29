let  defaultResult = 0;
let curentResult = defaultResult;
function getUserN(){

    return parseInt(userInput.value);
}

function add() {

    const enterNum= getUserN();
const calculDescript= `${curentResult }+${enterNum}`;
curentResult = curentResult + enterNum;
outputResult(curentResult , calculDescript);
}

function subtract() {

    const enterNum= getUserN();
const calculDescript= `${curentResult }-${enterNum}`;
curentResult = curentResult + enterNum;
outputResult(curentResult , calculDescript);
}

function multiply(){

    const enterNum= getUserN();
    const calculDescript = `${curentResult} * ${enterNum}`;
    curentResult = curentResult+ enterNum;
    outputResult( curentResult,calculDescript);

}

addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
