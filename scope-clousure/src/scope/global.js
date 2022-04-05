// var hello = 'hello';
// let world = 'hello world';
// const helloWorld = 'hello world!';

// const anotherFunction = () =>{
// console.log(hello);
// console.log(world);
// console.log(helloWorld);
// }

// anotherFunction();

// const person = {
// 			name: 'Sebas',
// 			age: 24,
// 			sayHello: function(){
// 				console.log(`hello my name is ${this.name}`)
// 			},
//             sayHello2: () => {
// 				console.log(`hello my name is ${this.name}`)
// 			},
//       }

// person.sayHello2()

const a = 1;

function suma() {
  const b = 2;
  function suma2() {
    const c = 3;
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    return a + b + c;
  }

  suma2();
}

const b = 3;
const c = 1;

suma();
