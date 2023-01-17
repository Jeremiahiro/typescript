// to run typescript tsc index.ts -watch

// In TypeScript, there are three primitive types: string, number, and boolean.

// Variables may or may not have their types explicitly defined, but once a variable is assigned a type value, its type is fixed and cannot be changed.


// A string is used to represent text, such as characters or words.
let firstName:string = 'Jeremiah';

// A number indicates numerical quantities, such as 88 or 3.142.
let age:number = 10;

// A boolean is a type that can have one of two values: true or false.
let answer:boolean = true;

console.log(`${firstName} is just ${age} but it was ${answer} that he likes to code`)

// objects in typescript

let colors:string[] = ["red","blue","yellow"]
colors.push('black');

// colors.push(4); // Argument of type 'number' is not assignable to parameter of type 'string

console.log(colors)

let profile: {
    name: string,
    age: number,
    address: string,
    phoneNumber: number
};

profile = {
    name: "Jerry",
    age: 10,
    address: "Abuja",
    phoneNumber: 2348136478020
};

console.log(profile)

// Union Type in TypeScript
// The Union type syntax is a way to tell TypeScript that a variable could be one of several types.
let userProfile:{
    name:string,
    userId:(string|number) // union type
    age:number,
    address:string,
    phoneNumber:number
}

userProfile = {
    name: "Jerry",
    userId: '1iro0',
    age: 10,
    address: "Abuja",
    phoneNumber: 2348136478020
}
console.log(userProfile)
userProfile.userId = 2865356

// Any Type in TypeScript
let value: any[] = ["Jerry", 8020, "Iro", true, 10];
value.push("Miah");
value[6] = 23;
console.log(value);

// Type Aliases
type userid = string | number;

const LogOut = (id: userid) => {
 console.log(id);
};

const LogIn = (id: userid) => {
 console.log(id);
};

LogIn(8020);
LogOut("8020");



