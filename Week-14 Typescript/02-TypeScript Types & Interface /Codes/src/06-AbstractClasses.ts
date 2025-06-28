 abstract class Student{
    //property
    name: string;
    age: number;

    //constructor for Student
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    //abstract method, must be implemented in subclass
    abstract study(): void;

    //default/concrete methiod
    run(): void{
        console.log(`${this.name} has gone for running`);
    }
}

 class std1 extends Student{
    study(): void {
        console.log(`${this.name} is studying rn`);
    }
 }

 const braj = new std1("Razz", 21);
braj.run()
braj.study()
 