var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var randomButton = document.querySelector(".randombutton");
var colorInput1 = document.querySelector(".color1");
var colorInput2 = document.querySelector(".color2");


function setGradient() {
    body.style.background = "linear-gradient(to right,"+colorInput1.value+","+colorInput2.value+")";
    // body.style.setProperty("background","linear-gradient(to right, "+colorInput1.value+" ,"+colorInput2.value+")");
    css.textContent = body.style.background + ";";
}

function generateRandomColor(){
    var maxVal = 0xFFFFFF;
    var randColor = Math.floor(Math.random() * maxVal).toString(16).padStart(6,0);
    return "#"+randColor.toUpperCase();
}

function randomGradient(){
    colorInput1.value = generateRandomColor();
    colorInput2.value = generateRandomColor();
    setGradient();
}

setGradient();
randomButton.addEventListener("click",randomGradient);
colorInput1.addEventListener("input",setGradient);
colorInput2.addEventListener("input",setGradient);