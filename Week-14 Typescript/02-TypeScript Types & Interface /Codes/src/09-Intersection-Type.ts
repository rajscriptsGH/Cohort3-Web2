type Employee = {
    name: string;
    startdate:string
};

type Manager = {
    name:string;
    department:string
}

type TeamLead = Employee & Manager

const teamLead:TeamLead = {
    name: "Razz",
    startdate: "23-11-2008",
    department: "appD"
}
console.log(teamLead);


let employee1:Employee = {
    name:"Raju",
    startdate: "12-08-2013"
}

/*
Notes

-intersection means combining both

*/
