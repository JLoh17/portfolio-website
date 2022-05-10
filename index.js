// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
// }

// const Jessica = new Person("Jessica", 2024);
// const John = new Person("John", 2025);
// console.log(Jessica);
// console.log(John);
// Jessica.calcAge();
// John.calcAge();

// const object = {};
// const duplicates = ["hello", "what", "hello", "aoisdjioasjdio"];

// duplicates.forEach((e) => {
//   object[e] = object[e] ? object[e] + 1 : 1;
// });

// object["whats"] = 23;
// Object.assign(object, { key3: 123 });

// console.log(object);

// console.log(Object.values(object));

// function sumDigPow(a, b) {
//   const arr = [];

//   for (let i = a; i < b; i++) {
//     let number = i
//       .toString()
//       .split("")
//       .map(Number)
//       .map((e, i) => e ** (i + 1))
//       .reduce((e, v) => e + v);
//     console.log(number);
//     if (i === number) {
//       arr.push(i);
//     } else {
//       [];
//     }
//   }

//   return arr;
// }

// console.log(sumDigPow(1, 10));
// console.log(sumDigPow(1, 100));
// console.log(sumDigPow(90, 100));

// function getGrade(s1, s2, s3) {
//   const average = Math.trunc((s1 + s2 + s3) / 3);

//   switch (true) {
//     case average >= 90:
//       return "A";
//       break;
//     case average < 90:
//       return "B";
//       break;
//     case average < 80:
//       return "C";
//       break;
//     case average < 70:
//       return "D";
//       break;
//     case average < 60:
//       return "F";
//       break;
//   }
// }

// console.log(getGrade(95, 90, 93));

// ====== KT's class for adding / removing connection ======
// class Tel {
//   constructor(name, val) {
//     this.name = name;
//     this.val = val;
//   }
// }

// class List {
//   constructor() {
//     this.list = [];
//   }
//   addNum(name, val) {
//     let newNum = new Tel(name, val);
//     this.list.push(newNum);
//     return true;
//   }

//   removeNum(deleteUser) {
//     const index = this.list.findIndex((e) => e.name === deleteUser);
//     this.list.splice(index, 1);
//   }
// }

// let list = new List();
// list.addNum("Hello", 123);
// list.addNum("what", 234);
// list.addNum("up", 456);
// list.removeNum("Hello");
// console.log(list);

// const obj = {
//   hello1: 1,
//   hello2: 2,
//   hello3: 3,
// };

// console.log(obj["hello1"]);
// console.log(obj.hello1);
// obj["hello4"] = 4;
// obj.hello5 = 5;
// console.log(obj);

// function duplicateCount(text){
//   const obj = {}

//   text.split('').forEach((e) =>
//     obj[e.toLowerCase()] = obj[e.toLowerCase()] ? obj[e.toLowerCase()] + 1 : 1)

//   console.log(obj)
//   return obj ? Object.values(obj).filter((e) => e > 1).length : 0

// }

// duplicateCount("aabBcde")
