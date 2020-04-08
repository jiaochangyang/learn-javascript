import ReactDOM from "react-dom";
// Default -> import ... from '';
// Named -> import { ... } from '';
import { Person } from "./person.js";
import Teacher, { promote } from "./teacher.js";
import React, { Component } from "react";

const element = <h1>Hello World!</h1>;

ReactDOM.render(element, document.getElementById("root"));

// const person = {
//   name: "Mosh",
//   walk() {
//     console.log(this);
//   },
//   talk() {
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   }
// };

// person.walk();

// const walk = person.walk.bind(person);
// console.log(walk);
// walk();

// person.talk();

// // const targetMember = "name";
// // person[targetMember] = "John";

// // console.log(person.name);

// const square = number => number * number;
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// const activeJob = jobs.filter(job => job.isActive);
// console.log(activeJob);

const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

const address = {
  street: "sss",
  city: "ccc",
  country: "CCC"
};

const { street: st, city: ct, country: cnty } = address;
console.log("test", st, ct, cnty);

let first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, "a", ...second, "b"];

const clone = [...first];
first = [...first, 4];
console.log(clone);
console.log(first);

const name = { name: "Mosh" };
const job = { job: "Instructor" };

const comb = { ...name, ...job, location: "Australia" };

console.log(comb);

const person = new Person("Chang");
console.log(person);

const teacher = new Teacher("Chang", "MEng");

console.log(teacher);
teacher.teach();
