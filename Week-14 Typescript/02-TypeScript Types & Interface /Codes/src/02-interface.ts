interface Address {                //? is used for optional property
    city: string;
    country: string;
    pincode: number;
};

interface User {
    name: string;
    age: number;
    address?: Address
}

let user: User = {
    name: "Razz",
    age: 5,
    address: {
        city: "BBSR",
        country: "India",
        pincode: 2834
    }
}


function isLegal(user: User): boolean {
    if (user.age >= 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(user));
