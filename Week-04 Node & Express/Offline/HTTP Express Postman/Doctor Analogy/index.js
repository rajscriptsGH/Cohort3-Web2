
function calculateSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + i;
    }
    return sum;
}

let result = calculateSum(4);
console.log(result);