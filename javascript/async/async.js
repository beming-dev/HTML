// await & async

// 1. async

// function fetchUser() {
//     return new Promise((rseolve, reject) => {
//         resolve('ellie');
//     });
}

async function fetchUser(){
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2 await => async 에서만 사용가능

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000);
    return 'apple';
}

async function getBanana() {
    await delay(3000);
    return 'banana';
}

// function getBanana(){
//     return delay(3000).then(() => 'banana');
// }

// function pickFruits(){
//     return getApple()
//     .then(apple =>{
//         return getBanana()
//         .then (banana => `${apple} + ${banana}`); 
//     });
// }

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
