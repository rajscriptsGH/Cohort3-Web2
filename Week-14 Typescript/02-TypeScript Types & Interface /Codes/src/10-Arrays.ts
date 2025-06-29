/*
-Example 1

Given an array of positive integers as input, return the maximum value in the array
*/

function getMax(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMax([2, 6, 4]));

/*
Example 2 
Given a list of users, filter out the users that are legal (greater than 18 years of age)
*/
interface FarmUser {
    firstName: string;
    secName: string
    age: number
}


// function getLegalUser(users: FarmUser[]) {
//     let ans: FarmUser[] = [];
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].age > 17) {
//             ans.push(users[i])
//         }
//     }
//     return ans;
// }

function getLegalUser(users: FarmUser[]) {
    return users.filter(user => user.age >= 18);
}


console.log(getLegalUser([
    {
        firstName: "Razz",
        secName: "Yadav",
        age: 21
    },
    {
        firstName: "Ravi",
        secName: "Verma",
        age: 16
    },
    {
        firstName: "Simran",
        secName: "Kaur",
        age: 19
    }
]));


