// console.log("Start");

// //normal setTimeOut
// setTimeout(() => {
//     console.log("1");
// }, 1000)

// console.log("2");

// function setTimeOutPromisified(ms) {
//     let promise = new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     })
//     return promise;
// }

// function callback() {
//     console.log("it is callback");
// }

// setTimeOutPromisified(1000).then(callback)

function waitfor3S(resolve) {
    setTimeout(resolve, 3000)
}

function main() {
    console.log("Main is called");
}

waitfor3S(main)
