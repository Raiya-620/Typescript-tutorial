// let age: number = 20;
// if(age < 50){
//     age+=10;
// }

// let sales: number = 123456789 or let sales: number = 123_456_789
// let course: string = 'Typescript';
// let ispublished: boolean = true;

//any type
// let level;

//arrays
// let numbers: number[] = [1,2,3,4]

//tuples- a fixed length of an array with a particular type
// let user: [number, string] = [2,"Suraiya"];

//enums- a list of related constants
// const small: number = 1;
// const medium: number = 2;
// const large: number = 3;

// enum Size{Small = 1, Medium, Large }
// const enum Size{Small = 1, Medium, Large }

// let mySize: Size = Size.Medium;
// console.log(mySize);

//functions
// function IncomeTax(income: number, taxYear: number = 2022): number{
//     if(taxYear < 2022){
//         income *= 1.2;
//     }
//     return income*= 1.5;
// }
//  IncomeTax(3);

//objects
// let employee: {
//     readonly id:number,
//     name: string,
//     retire: (date: Date) => void
// } = {id : 1, name : '', retire(date) {
//     console.log(date)
// },}
// employee.name = 'Suraiya'

//type alias
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "",
//   retire(date) {
//     console.log(date);
//   },
// };

//Union types
// function KgTLbs(weight: number | string ): number{
//     if(typeof weight === "number")
//         return weight * 2.2
//     else{
//         return parseInt(weight) * 2.2
//     }
// }

// KgTLbs(10);
// KgTLbs('10');

//intersection types
// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//     drag() {
        
//     },
//     resize() {
        
//     },
// }

//literal(specific or exact)
// type Quantity = 50 | 100;
// let quantity  : Quantity

// type Metric = 'cm' | 'inch'

//null and undefined
// function greet(name: string | null | undefined){
//  if(name)
//     console.log(name)
// else
//    console.log('Hola')
// }

// greet(undefined)

//optional property access operator
type Customer = {
    birthday?: Date
}

function getCustomer(id: number) : Customer | null | undefined{
    return id === 0 ? null : {birthday : new Date()};
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined)
    console.log(customer.birthday)
//or using
//  optional property access operator
console.log(customer?.birthday?.getFullYear())

//optional element access operator used in arrays
//if(customer !== null && customer !== undefined)
//  console.log(customer[0])
//or
//console.log(customer?.[0])

//optional call
// let log:any = null;
// log?.('a')