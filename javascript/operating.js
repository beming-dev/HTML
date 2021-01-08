// String +
//or:중간에 true나오면 멈춤 => 뒤에 실행x

//function is object

function log(param1, param2){
    console.log('Hello');
}

// Rest Parameters  function(...args) args[i];

// allow function
const simplePrintf = function(){
    console.log('easy');
}

//IIFE

function calculate(command, a, b){
    let result;
    switch(command){
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '/':
            result = a/b
            break;
        case '*':
            result = a*b;
        break;
        }
    return result;
}

let a = calculate('/', 1, 1);
console.log(a);