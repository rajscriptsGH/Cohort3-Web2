interface User {
    name: string;
    age: number
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age
}

let ages = sumOfAge({
    name: "Razz",
    age: 21
},
    {
        name: "Raju",
        age: 25
    }
)

console.log(ages);
