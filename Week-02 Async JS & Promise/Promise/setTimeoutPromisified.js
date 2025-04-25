/* 
Write code that
1. logs hi after 1 second
2. logs hello 3 seconds after step 1
3. logs hello there 5 seconds after step 2
*/


function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve, duration)
    });
}
// setTimeoutPromisified(1000)
// .then(()=>{
//     console.log('hi')
//     return setTimeoutPromisified(3000)
// })
// .then(()=>{
//     console.log('hello')
//     return setTimeoutPromisified(5000)
// })
// .then(()=>{
//     console.log('hello there')
// })

//Async and await

async function solve(){
    await setTimeoutPromisified(1000)
    console.log('hii');
    await setTimeoutPromisified(3000)
    console.log('hello');
    await setTimeoutPromisified(5000)
    console.log('hello there');
}

solve()