let screen = document.getElementById("screen");

function buttonClick (value){
screen.value += value
}
function clearScreen (){
screen.value  = ""
}

function findResult(value) {
let result = eval(screen.value);
screen.value = result;
}