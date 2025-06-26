function greeting(user: {
    name: string,
    age: number
}){
    console.log("GM " + user.name);
    
}

let user = {
    name: "Razz",
    age: 21
}

greeting(user)