// to run typescript tsc index.ts -watch
// In TypeScript, there are three primitive types: string, number, and boolean.
// Variables may or may not have their types explicitly defined, but once a variable is assigned a type value, its type is fixed and cannot be changed.
// A string is used to represent text, such as characters or words.
var firstName = 'Jeremiah';
// A number indicates numerical quantities, such as 88 or 3.142.
var age = 10;
// A boolean is a type that can have one of two values: true or false.
var answer = true;
console.log("".concat(firstName, " is just ").concat(age, " but it was ").concat(answer, " that he likes to code"));
// objects in typescript
var colors = ["red", "blue", "yellow"];
colors.push('black');
// colors.push(4); // Argument of type 'number' is not assignable to parameter of type 'string
console.log(colors);
var profile;
profile = {
    name: "Jerry",
    age: 10,
    address: "Abuja",
    phoneNumber: 2348136478020
};
console.log(profile);
// Union Type in TypeScript
// The Union type syntax is a way to tell TypeScript that a variable could be one of several types.
var userProfile;
userProfile = {
    name: "Jerry",
    userId: '1iro0',
    age: 10,
    address: "Abuja",
    phoneNumber: 2348136478020
};
console.log(userProfile);
userProfile.userId = 2865356;
// Any Type in TypeScript
var value = ["Jerry", 8020, "Iro", true, 10];
value.push("Miah");
value[6] = 23;
console.log(value);
var LogOut = function (id) {
    console.log(id);
};
var LogIn = function (id) {
    console.log(id);
};
LogIn(8020);
LogOut("8020");
