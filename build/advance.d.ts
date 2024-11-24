type rgb = [number, number, number, string];
type union = number | boolean;
declare let test: union;
declare function greet<type>(value: type): type;
declare function sum<type>(a: type): type;
interface user {
    name: string;
    id: number;
    role: string;
}
interface Admin extends user {
    Access: string;
    Employee: boolean;
    phone1: number;
    phone2: number;
}
declare let User1: Admin;
