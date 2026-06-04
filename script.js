let expression = "";

const expressionBox = document.getElementById("expression");
const resultBox = document.getElementById("result");
const historyList = document.getElementById("historyList");

let history = [];

loadHistory();

function append(value){

    expression += value;

    expressionBox.textContent = expression;
}

function calculate(){

    try{

        let result = eval(expression);

        resultBox.textContent = result;

        let calculation =
        `${expression} = ${result}`;

        history.unshift(calculation);

        if(history.length > 5){
            history.pop();
        }

        

        loadHistory();

    }
    catch{

        resultBox.textContent = "Error";

    }
}

function backspace(){

    expression = expression.slice(0,-1);

    expressionBox.textContent = expression;
}

function clearAll(){

    expression = "";

    expressionBox.textContent = "";

    resultBox.textContent = "0";
}

function loadHistory(){

    historyList.innerHTML = "";

    history.forEach(item=>{

        let li = document.createElement("li");

        li.textContent = item;

        historyList.appendChild(li);

    });
}

document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
        append(e.key);
    }

    if(e.key === "Enter"){
        calculate();
    }

    if(e.key === "Backspace"){
        backspace();
    }

    if(e.key === "Escape"){
        clearAll();
    }
});