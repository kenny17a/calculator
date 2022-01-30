function cal(val){
    let input = document.getElementById("input").value
    +=val;
}

function del(){
    document.getElementById("input").value="";
}

function solve() {
    let calculatorInput = document.getElementById("input").value;
    let calculation = eval(calculatorInput);

    document.getElementById("input").value= calculation;
}