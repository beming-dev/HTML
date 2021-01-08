const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

ellie = new Object({name:'ellie', age:4});
print(ellie);

ellie.hashjob = true;
print(ellie);

ellie['HASHJOB'] =  true;
delete ellie.hashjob;

const user4 = {}
Object.assign(user4, ellie);
console.log(user4);