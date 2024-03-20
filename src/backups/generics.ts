import { Villian, Hero } from "../interfaces";
import { printObject, genericFunction, generFunctionArrow } from "../generics/generics";
//import { Villian } from "./interfaces/Villian";

// printObject({ name: "John", age: 30 });
// printObject("Hello World");
// printObject(10);
// printObject(true);
// printObject(new Date());
// printObject([1, 2, 3]);

// const  name: string = "John";

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(generFunctionArrow(name).toUpperCase());
// console.log(generFunctionArrow(new Date()).getDate());

const deadpool = {
    name: "Deadpool",
    realName: "Wade Wilson Wiston",
    dangerLevel: 130
};

console.log(genericFunction<Villian>(deadpool).dangerLevel);
