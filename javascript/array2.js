// const fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.join('|'));


// const fruits = 'apple, banana, orange';
// console.log(fruits.split(",", 3));

// const array = [1, 2, 3, 4, 5];
// console.log(array.reverse());

// const array = [1, 2, 3, 4, 5];
// // console.log(array.splice(0, 2)); //지움
// // console.log(array);

// console.log(array.slice(2, 5)) //꺼냄

class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

{
    const result = students.find(function(student){
        // console.log(student, index);
        return student.score === 90;
    });
    console.log(result);
}

{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

{
    const result = students.map((student) => student.score);
    console.log(result);
}

{
    console.clear();
    const result = students.some((student) =>student.score < 50);
    console.log(result);

    const result2 = students.every((student) =>student.score < 50);
    console.log(result2);
}

{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result);
}