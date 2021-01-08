class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}:hello!`);
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value;
    }
}

const user1 = new Person('Steve', 'Job', -1);
console.log(user1.age);


const ellie = new Person('ellie', 20);
console.log(ellie.name);
ellie.speak();
