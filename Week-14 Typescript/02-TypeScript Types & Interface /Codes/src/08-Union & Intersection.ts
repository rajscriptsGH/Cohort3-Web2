// Union =. It means a value can be one of several types.
// only allows access to common properties
type id  = string | number;

let userId:id = 234;
userId = "ehedh"
// userId = true;  //error

type C = {
    name:string;
    degree: string
}
type D = {
    name:string;
    age:number
}

type Alpha1 = C | D

const hum2 :Alpha1 = {
    name:"Razz",
    age:21
};

console.log(hum2);


//Intersection => It means a value must fulfill all types combined.
type A = {
    name:string
}
type B = {
    age:number
}

type Alpha = A & B

const hum1 :Alpha = {
    name:"Razz",
    age: 21
};

console.log(hum1);
