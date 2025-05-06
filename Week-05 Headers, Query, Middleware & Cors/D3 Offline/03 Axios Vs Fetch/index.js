// function main() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(async response => {
//             const data = await response.json();
//             console.log(data);
//         })
// }


async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data);
}

main()