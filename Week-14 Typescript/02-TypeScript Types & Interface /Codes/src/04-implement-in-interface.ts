interface Person{
    name: string,
    age: number,
    degree: string,
    greeting(): void;
}

class per1 implements Person{
    name: string;
    age: number;
    degree: string;

    constructor(name:string, age:number, degree: string){
        this.name = name;
        this.age = age;
        this.degree = degree
    }

    greeting(): void {
        console.log("Hii " + per1.name);
        
    }
}

const raj = new per1("Razz", 21, "btech");
console.log(raj);
raj.greeting()

