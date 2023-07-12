// tamrin js code.test simple exampel of js
// console.log("neon");
// console.log(2+2);
// console.log();

// primitve(valio) types
// string
// namber
// boolean (true false)
// undifined
//null

// reference types
// opject
//array
//function

// let fname = "armin";
// let lname = "vallieh"
// console.log(fname);
// console.log(lname);

// let person = {
//     name : "armin" ,
//     age : 28 ,
//     admin : true

// }

// // console.log(person);

// // let users = ["armin", "keyhan", "bahar", "keyvan", "soran", true];
// let users =[
//     {
//         name : "armin" ,
// let i =0;

// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;

// }
//         age : 28 ,
//         admin : true

//     },
//     {
//         name : "keyhan" ,
//         age : 32 ,
//         admin : false

//     },
//     {
//         name : "keyvan" ,
//         age : 35 ,
//         admin : false

//     }
// ]
// users[0].admin = false;
// users[0].age = 30;

// users[6] = "zahra";
// users[7] = 28;

// console.log(users);

// function greet(name, age){
//     console.log( "Hello " + name + " you are " + age + " years old" );
// }

// greet( "armin", 28 );

// function square(number){
//     let result = number * number;
//     return result;

// }
// let result = square(4);
// console.log(result)

// let x = 10;
// let y = 5;
// console.log(x + y);

// let athenticated = true ;
// //ternarty
// let bottonText = athenticated === true ? "dashboard" : "login" ;
// console.log(bottonText);

// let art = false && 0 && 1 ;
// console.log (art);

// let hour = 1 ;
// if(hour >=6 && hour<12) {
//     console.log("good morning");
// }

// if(hour >=12 && hour < 20) { console.log( "art");}

// if(hour >=20 && hour < 24) { console.log( "nite");}
// else if(hour<6){
//     console.log("slip");
// }

// let role = "art";

// switch (role) {
//     case "guest" :
//         console.log("guest user");
//         break;

//         case "admin" :
//             console.log("admin user");
//             break;

//         default :
//         console.log("unknown user");
// }

// if (role === "guest") {
//     console.log("guest user");
// }
// else if (role === "admin") {
//     console.log("admin user");
// }
// else {
//     console.log("unknown user");
// }

// for(let i=0;i<5;i++){
//     // console.log("neon")
//     // console.log(i);
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//  let i=0;
//  while(i<5){
//  console.log(i);
// i++;
//  }

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<5)

// const person = {name : "armin", age:28};
// const colors = ["red" , "green", "blue"]

// for(let key in person){
//     console.log(key);
//     console.log(person[key])

// }
// for(let index in colors){
//     // console.log(index);
//     console.log(colors[index])

// }

// for(color of colors){
//     console.log(color);
// }

// let i =0;

// while(i<=10){
//     if(i==5){
//         break;
//     }
//     console.log(i);
//     i++;

// }

// function addNumber(num1, num2){
//     return num1+num2;
// }

// let resualt = addNumber(9, 20);
// console.log(resualt);

// let cirel = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },
//     isvisible : true,
//     draw : function(){ console.log("draw")}
// };
//  cirel.draw();

// // Factory function

// function createCircle(radius ){
//     return {
//         radius ,
//         draw(){ console.log("draw")}
//     }
// }
// let circle1 = createCircle(1);
// console.log(circle1);

// let circle2 = createCircle(2);
// console.log(circle2);

// // Constructor function
// // camel notation : oneTwoThree
// // pascal notation : OneTwoThree

// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log("draw")
//     }
// }

// const another = new Circle(3);
// console.log(another);

// let x = {value: "armin"};
// let y = x;

// x.value = "keyvan"
// console.log(y);

// const name = "armin";
// console.log("222222", name);

// function add(number){
//     const name = "keyhan"
//     console.log(name);
//     number ++;
//     console.log("1111",number);
// }

// // let f = add(5)

// const circle = {
//     radius : 1 ,
//     draw(){
//         console.log("draw");
//     }
// }
// console.log(circle);

// const another ={armin: 'aaaa',...circle}
// console.log(another);

// const a = "10" === "10"
// console.log(a);

// function get (min, max){
//     return Math.floor(Math.random() * (max-min)+min);
// }

// console.log(get(10,50));

// function get (min){
//     return (Math.round(min));
// }
` `;
//  console.log(get(1.9));

// function bishtar(...m) {
//   return Math.min(...m);
// }

// console.log(bishtar(3, 5, 4, 3, 0, 4, 1));

// const number = [1, 2, 3, 4, 5];
// console.log(number.indexOf(4));

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// // const resualt = courses.find(function (course) {
// //   return course.id === 2;
// // });

// //اگر فانکشن بی نامی مثل بالا داشتین میتونید مثل زیر عمل کنید. اول کلمه فانکشن رو باک کنید. و بعدش بین بارامتر و بدنه فانکشن از یک ارو فانکشن استفاده کنید.

// const resualt = courses.find((course) => course.id === 2);

// console.log(resualt);

// const first = [1, 2, 3, 4, 5];
// const second = [6, 7, 8, 9];

// // const combined = first.concat(second);

// const combined = ["a", ...first, "b", ...second, "c"];
// // const slice = combined.slice(2, 5);

// console.log(combined);

// console.log(slice);

// const message = "neon coding is cool";
// const parts = message.split(" ");
// console.log(parts);
// const combined = parts.join("-");
// console.log(combined);

// const users = [
//   { name: "armin", age: 28 },
//   { name: "armin", age: 18 },
//   { name: "armin", age: 14 },

//   { name: "armin", age: 16 },
//   { name: "armin", age: 20 },
// ];
// const resualt = users.filter((user) => user.age >= 18);

// console.log(resualt);

// const number = [1, 3, 5, 7];

// // const result = number.map(function (value) {
// //   return value * 2;
// // });

// const result = number.map((value) => value * 2);

// console.log(result);

// // [2,6,10,14]

// const products = ["html", "css", "js"];

// const items = products.map(function (product) {
//   const obj = { value: product };
//   return obj;
// });

// console.log(items);

// const html = `<ul>${items.join("")}</ul>`;

// console.log(html);

// const number = [1, -1, 2, 3];

// const items = number.filter((v) => v >= 0).map((n) => ({ value: n }));

// console.log(items);

// const video = {
//   title: "a",
//   play() {
//     console.log(this);
//   },
//   stop() {
//     console.log(this);
//   },
// };

// video.stop();

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showtags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);
//     }, this);
//   },
// };

// video.showtags();

// // getters => access properties
// // setters => chang (mutate)
// const person = {
//   fname: "armin",
//   lname: "vallieh",
//   get fullName() {
//     return `${person.fname} ${person.lname}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.fname = parts[0];
//     this.lname = parts[1];
//   },
// };

// person.fullName = "keyhan mohamadi";
// console.log(person.fullName);

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// console.log(circle);

// const circle2 = new Circle(20);
// console.log(circle2);

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function () {
//       console.log("move");
//     };
//   }
//   draw() {
//     console.log("draw");
//   }
// }

// const c = new Circle(1);

// console.log(c);

// sayHello();
// // function Declaration
// function sayHello() {
//   console.log("hello");
// }

// // function Expression
// const sayGoodbye = function () {
//   console.log("goodbye");
// };
sayGoodbye();
