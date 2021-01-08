
let arr1 = new Array();
const fruits = ['apple', 'banana'];

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit) => {console.log(fruit);});

fruits.push('strawberry', 'peach');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("😎");
console.log(fruits);

fruits.shift();
console.log(fruits);

//shift, unshift : very slow

// splice
fruits.splice(1, 1, 'aple');
console.log(fruits);


//concat

//indexOf => 없으면 -1
//includes =>true, false
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('apple'));

consile.clear();
console.log(fruits);
console.log(fruits.lastIndexOf('apple'));


const fruits = ['apple', 'banana', 'orange'];
