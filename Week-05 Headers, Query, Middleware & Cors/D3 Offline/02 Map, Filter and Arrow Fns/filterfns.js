
//in the given arr, give me a new array with only even value

const arr = [1, 2, 3, 4, 5];

//normal way
// let newarr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newarr.push(arr[i])
//     }
// }
// console.log(newarr);



//filter way

// function filterFun(n) {
//     if (n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const ans = arr.filter(filterFun);
// console.log(ans);

//other way


const ans = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(ans);




















/*
🔎 filter()
Used when you want to filter items based on a condition and return a new array of only the matching items.
*/