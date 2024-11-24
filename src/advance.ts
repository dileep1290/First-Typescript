type rgb = [number, number, number, string]; 

// let rgbColor:rgb = [1,2,3,"a",1]

type union =   number | boolean;

let test: union = 12
// let test2: union  = "1"

function greet<type>(value:type){
    return value
};

greet<string>("Welcome");


function sum<type>(a:type){
    return a
}

sum<number>(10);
sum<string>("a");

sum<boolean>(true);


interface user  {
    name: string;
    id: number;
    role: string
}

interface Admin extends user {
    Access: string;
    Employee: boolean;
    phone1: number;
    phone2: number;
}

let User1:Admin = {
    Access: "Yes",
    Employee: true,
    phone1: 12,
    phone2: 23,
    name: "Dileep",
    id: 1,
    role: "Admin"
}






