declare let a: number;
declare let str: string;
declare let isTrue: boolean;
declare let arr: number[];
declare let newArr: string[];
type objTemplate = {
    name: string;
    age: number;
    batch: number;
    college: string;
};
declare let obj: objTemplate;
declare let arr1: Array<objTemplate>;
declare let Arr2: Array<objTemplate>;
type objTem = {
    images: string[];
};
declare let obj2: objTem;
type otem = {
    images: string[];
};
declare let o: otem;
declare let num: number | string | boolean | null;
type temp1 = {
    name: string;
    age: number;
};
type temp2 = {
    batch: number;
    college: string;
};
type temp3 = {
    school: string;
};
declare let Dileep: temp1 & temp2;
declare let Laddu: temp1 & temp3;
