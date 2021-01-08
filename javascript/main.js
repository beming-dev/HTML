//added ECMAScript 5
'use strict';

// 1.Variable
// let(ES6)
// var


// hoisting: 변수 선언 맨위로 끌어 올림
{
    let hi = 'ellie';
    console.log(hi);
    hi = 'hello';
    console.log(hi);
}

// Constants

const daysInWeek = 7;
const maxNumber = 5;

// variable types
// primate type
// object
// function, firstclass function


let myName = {
    'ellie':5,
    'yumy':3
}

console.log(myName.ellie);
