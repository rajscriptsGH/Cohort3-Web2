function random(resolve) {
    return setTimeout(resolve, 1000)
}

let p = new Promise(random)
console.log(p);


function callback() {
    console.log("Promise used");
}

p.then(callback)
