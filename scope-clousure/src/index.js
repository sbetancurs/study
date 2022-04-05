// a = 1;
// console.log(a);
// var a;

// dogName("elmo");

// function dogName(name) {
//   console.log(name);
// }

//HOISTING funciona con var y function

// const myBox = () => {
//   let saveCoins = 0;
//   const countCoins = (coin) => {
//     saveCoins += coin;
//     console.log(saveCoins);
//   };

//   return countCoins;
// };

// const moneyBox = myBox();
// moneyBox(1);
// moneyBox(3);
// moneyBox(3);

//CLOUSURE

// var a = 1;

// function suma() {
//   var b = 1;
//   const suma2 = () => {
//     return a + b + c;
//   };

//   return suma2();
// }

// var b = 2;
// var c = 3;

// function suma2() {
//   return a + b + c;
// }

// console.log(suma());

//VAR: -se puede redeclarar. -se puede reasignar. -global
//LET: -NO se puede reinicializar. -se puede reasignar. - block & function
//CONST: -NO se puede reinicializar. -NO se puede reasignar. - block & function

// function hola() {
//   console.log("h", h);
//   if (true) {
//     let h = "hola mundo";
//   }
//   console.log("h", h);

//   return h;
// }

// hola();

// const Person = () => {
//   let saveName = "Julian";
//   return {
//     getName: () => saveName,
//     setName: (name) => {
//       saveName = name;
//     },
//   };
// };

// const newPerson = Person();
// console.log("newPerson.getName(); :>> ", newPerson.getName());
// newPerson.setName("Paco");
// console.log("newPerson.getName(); :>> ", newPerson.getName());

//DATOS PRIMITIVOS: String, Number, Boolean, Undefined, Null, Symbol. TODO LO QUE NO SEA ESTO SON OBJETOS

// const bunny = {
//   name: "buggs 🐰",
//   tasks: ["jump 🦗", "poop 💩", "eat 🥕"],
//   sayTasks: function () {
//     this.tasks.forEach((task) => {
//       console.log(`${this.name} wants to ${task}`);
//     });
//   },
// };
// // const dog = bunny;
// const dog = { ...bunny };

// dog.name = "kira";

// bunny.sayTasks();

// var a = 2 + "hola";
// var b = 2 * "hola";

// console.log("a", a);
// console.log("b", b);

// function countNumbers() {
//   for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//       console.log("i", i);
//     }, 100);
//   }
// }

// countNumbers();
