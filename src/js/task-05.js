const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const Value_Action = "Anonimo";

let outputValue = Value_Action;


nameInput.addEventListener("input", (data) => {
const newValue = data.currentTarget.value;
if(!newValue){
    outputValue = Value_Action;
    console.log(outputValue);
    nameOutput.textContent = outputValue;
    return;
}
outputValue = newValue;
console.log(outputValue);
nameOutput.textContent = outputValue;
});
