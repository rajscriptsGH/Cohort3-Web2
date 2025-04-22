// function random(resolve) {
//   setTimeout(resolve, 1000);
// }

// let p = new Promise(random); //creating a promise
// console.log(p);

// function callback() {
//   console.log("Promise used");
// }

// p.then(callback); //consuming a promise

// let myPromise = new Promise(function (resolve, reject) {
//   // apna async task karo
//   setTimeout(() => {
//     console.log("timeout executed");
//   }, 10000);
//   // maan lo itna hi async task tha toh ab resolve kar do
//   resolve("promise executed");
// });

// // then ko Promise ke oopar use karte hai
// myPromise.then((resolvedValueJoAayi) => {
//   console.log(resolvedValueJoAayi);
// }); // logs 'promise executed'

//How to create promise

// const promise = new Promise((resolve, reject) => {
//   isLogged = true;
//   if (isLogged) {
//     resolve("logged in");
//   } else {
//     reject("not logged in");
//   }
// });

// promise.then((data) => {
//   console.log(data);
// });

function isLogged() {
  return new Promise((res, rej) => {
    let loggedIn = true;
    if (loggedIn) {
      res("logged in");
    } else {
      rej("not logged in");
    }
  });
}

let promise = isLogged();
console.log(promise);

promise.then((data) => {
  console.log(data);
});
