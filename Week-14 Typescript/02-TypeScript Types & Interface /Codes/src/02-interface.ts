interface User {
    name: string;
    age: number;
    address:{
        city: string;
        country: string;
        pincode: number
    };
}

let user: User = {
    name: "Razz",
    age: 5,
    address: {
        city: "BBSR",
        country: "India",
        pincode: 568362
    }
}

function isLegal(user: User): boolean{
    if(user.age>= 18){
        return true;
    }else{
        return false
    }
}

console.log(isLegal(user));
