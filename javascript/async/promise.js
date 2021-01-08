'use strict';

// promise for asynchronous operation => 상태
// state: pending -> fulflled or rejected
// Producer vs Consumer

// 1. Producer

//when new Promise is created. the exercuter runs automatically.
const promise = new Promise((resolve, reject) =>{
    // heavy work(network, read files)
    console.log('doing something');
    setTimeout(()=>{
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
}); 

// 2.Consumers: then catch finally
promise
.then((value)=>{
    console.log(value);
})
.catch((error) =>{
    console.log(error);
})
.finally(() =>{console.log('finally');
});

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>resolve(num -1), 1000);
    });
})
.then(num => console.log(num));
