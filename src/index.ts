let a:number = 10;
a = 100;
// a = "a"

let str: string = "Dileep"

str = "Laddu";
// str = 143;

// boolean

let isTrue : boolean = true
isTrue = false;

// isTrue = 1
// isTrue = "hi"

let arr: number[] = [1,3,4,2]
arr = [1,3,1,1];
arr = [1];
// arr = "asr"
// arr = ['aer']

let newArr: string[] = ["a", "b", "c"]
newArr = ["adnnnd"];


type objTemplate = {
    name: string;
    age: number;
    batch: number;
    college: string;
}



let obj: objTemplate = {
    name: "dileep",
    age: 24,
    batch: 2023,
    college: "GPCET",
}


let arr1: Array<objTemplate> = [
    {
        name: "dileep",
        age: 24,
        batch: 2023,
        college: "GPCET",
    },

    {
        name: "dileep",
        age: 24,
        batch: 2023,
        college: "GPCET",
    },
    {
        name:"Laddu",
        age: 9,
        batch: 1029,
        college: "Alixer",
    }
]


let Arr2: Array<objTemplate> = [
    {
        name: "Kuna", 
        age: 3,
        batch: 2024,
        college: "no"
    }
]

type objTem = {images: string[]};

let obj2: objTem = {
    images: ["st", "a", "as"]
}


type otem = {images: string[]}

let o : otem = {
    images: ["aa","b"]
};

let num: number| string | boolean | null = 123
num = num;
num = "Kuna";
num = 1.2;

type temp1 = {
    name: string;
    age: number
}

type temp2 = {
    batch : number;
    college: string;
}

type temp3 = {
    school: string;
}


let Dileep: temp1 & temp2 = {
    name: "Dileep",
    age: 24,
    batch: 2023,
    college: "GPCET",
};

let Laddu: temp1 & temp3 = {
    name : "Laddu",
    age: 9,
    school: "Alixer"
}



























