interface People {
    name: string,
    age: number,
    greet: () => string,
}

let p1: People = {
    name: "Razz",
    age: 21,
    greet: () => {
        return 'Hii'
    }
}

console.log(p1.greet());
