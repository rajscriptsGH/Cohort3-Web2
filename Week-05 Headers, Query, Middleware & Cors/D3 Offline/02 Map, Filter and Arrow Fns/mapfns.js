//given array, give me back a new arrray in which every value is multiplied by 2
//[1,2,3,4,5] => [2,4,6,8,10]

const arr = [1, 2, 3, 4, 5];

//normal way
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const ele = arr[i] * 2;
//     newArr.push(ele);
// }

// console.log(newArr);


//map way
// function transform(i) {
//     return i * 2;
// }
// const ans = arr.map(transform)
// console.log(ans);

//other way of map

const ans = arr.map((i) => {            //normal function or arrow fun, either of one u can use
    return i * 2;
})
console.log(ans);


