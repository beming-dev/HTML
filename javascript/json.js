// Object to Json
//stringfy
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color: 'white',
    size: null,
    jump:() =>console.log('hi')
}
console.log(rabbit);


// Json to Object
// parse
console.clear();

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);


console.log(rabbit.birthDate.getDate());

//함수, 저장안됨