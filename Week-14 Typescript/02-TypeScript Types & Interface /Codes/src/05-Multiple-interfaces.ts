interface Student{
    name: string;
    eat(): void;
}

interface Animal{
    name: string
    bark(): void;
}

class Human implements Student, Animal{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    eat(): void{
        console.log("Eating");    
    }

    bark(): void{
        console.log("dogs barks");    
    }
}

const manya = new Human("Pawn")
console.log(manya);
