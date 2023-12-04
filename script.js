//roadmap day 3
//Intro to array
/*
var a = [1,2,"abc",true];
console.log(a);
for (var i=0;i<a.length;i=i+1){
    console.log(a[i]);
}
console.log(a.length);
console.log(a.length-1);
console.log(a.indexOf(1));

//objects

var personDetails = {
    Name : "anbu",
    Gender : "male",
    Age : 21,
    Email : "anbu@123gmail.com"
}
console.log(personDetails);
//dot method
console.log(personDetails.Name);
console.log(personDetails.Gender);
//box method
console.log(personDetails["Age"]);
console.log(personDetails["Email"]);


//for in loop
var personDetails = {
    Name : "anbu",
    Gender : "male",
    Age : 21,
    Email : "anbu@123gmail.com"
}
for (var key in personDetails){
    console.log(key);
}
for (var key in personDetails){
    console.log(personDetails[key]);
}

//add element in object
var personDetails = {
    Name : "anbu",
    Gender : "male",
    Age : 21,
    Email : "anbu@123gmail.com"
}
personDetails.year=2021;
console.log(personDetails);

//update
personDetails.Age=22;
console.log(personDetails);

//delete
delete personDetails.Email;
console.log(personDetails);

//add array to object
personDetails.Education=["10","12","degree"];
console.log(personDetails);
for (var i=0;i<personDetails.Education.length;i=i+1){
    console.log(personDetails.Education[i]);
}


//Intro to JSON

var obj = {
    "name" : "anbu",
    "gender" : "male",
    "age" : "21",
    "city" : "chennai"
}
console.log(obj.name);
console.log(obj.gender);
console.log(obj.age);
console.log(obj.city);

//Array of objects

var arr = [
    {
        "name" : "anbu",
        "city" : "chennai"
    },
    {
        "name" : "john",
        "city" : "trichy"
    },
    {
        "name" : "joe",
        "city" : "goa"
    }
]
for (var i=0;i<arr.length;i++){
    console.log(arr[i].name,arr[i].city);
}
//add
arr[3]={"name":"priya","city":"mumbai"};
console.log(arr);
//update
arr[2]={"name":"joe","city":"bangalore"};
console.log(arr);


//day 4
//XMLHttpRequest

var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
    for (var i=0;i<result.length;i++){
        console.log(result[i].name.common);
    }
}

//function
var a =3;
var b =4;
var c =6;
var d =1;

function add(a,b){
    console.log(a+b);
}
function sub(c,d){
    console.log(c-d);
}
function mul(a,b){
    console.log(a*b);
}
add(a,b);
sub(c,d);
mul(a,b);

function multi(a,b,c){
    return a*b*c;
}
console.log(multi(1,2,3));
multi(2,3,4);
multi(5,6,7);


// print odd numbers in an array
//normal function

var result = [];
 function odd(arr){
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }   
    }
    return result;
}
console.log(odd([1,2,3,4,5]));

//anonymous function
var result = [];
var a = function (arr){
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//IIFE function
var result = [];
(function (arr){
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})([1,2,3,4,5,6,7,8,9,10]);

//arrow function

var result = [];
var odd = (arr)=> {
    for (var i=0;i<arr.length;i=i+1){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));


//Day 5
let obj1 = {name:"person 1", age:5};
let obj2 = {age:5, name:"person 1"};
let json1 = JSON.stringify(obj1);
let json2 = JSON.stringify(obj2);
if (json1===json2){
    console.log("both are equal");
}
else{
    console.log("both are different");
}


//example hoisting
console.log(a);
var/let/const a = 2;

//example scoping
function test(){
    let a =3;
    if (true){
        let b=4;
    }
    console.log(a,b);
}
test()


const fruits = ["🍎","🍐","🍊","🍇","🍍"];
//without destructuring
const apple = fruits[0];
const jackfruit = fruits[1];
console.log(apple);
console.log(jackfruit);

//with destructuring
const fruits = ["🍎","🍐","🍊","🍇","🍍"];
const [apple,jackfruit,orange,grapes,pineapple,watermelon="🍉"] = fruits;
console.log(apple);
console.log(grapes);
console.log(watermelon);
console.log(fruits);


//objects destructuring
const obj = {
    Name : "anbu",
    age : 21,
    address :{
        city : "chennai",
        state : "Tamilnadu"
    }
}
//without destructuring
console.log(obj.Name);
console.log(obj.age);
console.log(obj.address.city);

//with destructuring
const {Name,age,address:city,state} = obj;
console.log(Name);
console.log(age); 
console.log(state);
console.log(city);


//Array of objects destructuring
const groceryshop = [
    {item:"apple",price:25,category:"fruits"},
    {item:"salt",price:50,category:"misc"},
    {item:"tomato",price:100,category:"vrgetables"}
]
//without destructuring
console.log(groceryshop);
console.log(groceryshop[0].item);

//with destructuring
const [{item,price,category}] = groceryshop;
console.log(item);
console.log(price);
console.log(category);


//array and objects destructuring
const person = {
    Name : "anbu",
    location : ["chennai","madurai","trichy"]
}
const {location:[loc,locs,locc]}= person;
console.log(loc);
console.log(locs);
console.log(locc);
console.log (person.location);


//normay way to create obj
const order = {
    id : 1000,
    pizza : "farmhouse"
}
console.log(order.id,order.pizza);

//using shorthand property
const id = 1000;
const pizza = "farmhouse";
const order1 = {
    id,
    pizza
}
console.log(order1);


//template literals
//normal
const a =10;
const b =20;
console.log("the value of a is",a+" "+"the value of b is",b);

//using trmplate literal
const c =5;
const d =15;
console.log(`the value of c is ${c}
the value of d is ${d}
the value of e is ${c+d}`);


//spread opertors: convert a string into character array
//example 1
const arr = ["guvi"];
console.log(...arr);

//example 2
const arr1 = ["joe","jonh","doe"];
const arr2 = ["apple","mango","orange"];
const arr3 = [...arr1,...arr2];
console.log(arr3);


//rest operators: It is used inside the function to consider the remaining values
function test(a,b,...rest){
    let sum =0;
    for (var i=0;i<rest.length;i=i+1){
        sum = sum+rest[i];
    }
    return sum;
}
console.log(test(12,13,14,15,16,17));


var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data);
    console.log(result);
//using for loop
    for (var i=0;i<result.length;i++){
        console.log(result[i].area);
    }
//using for in loop
for (let key in result){
    console.log(result[key].region)
}
//using for of loop
for (let val of result){
    console.log(val.population,val.subregion)
}
};

//DAY 6
//class example
class Car {
    constructor(brand,color){
        this.brand = brand;
        this.color = color;
    }
}
var obj = new Car ("audi","blue");
console.log(obj.brand);
console.log(obj.color);

//task
class Person {
    constructor(name,age,gender,salary){
        this.name =name;
        this.age =age;
        this.gender =gender;
        this.salary =salary;
    }
}
var person1 = new Person("anbu",21,"gender",50000);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender); 
console.log(person1.salary);


//class
class car {
    constructor(brand,model,color,year){
        this.brand =brand;
        this.model =model;
        this.color =color;
        this.year =year;
    }
}
var car1 = new car("Hyundai","1504","Black",1989);
var car2 = new car("Suzuki","1897","red",1986);
var car3 = new car("Audi","M","Blue",2001);
console.log(`All the brands are
"car1": ${car1.brand}
"car2" : ${car2.brand}
"car3" : ${car3.brand}`) 


//class with methods
class Car{
    drive(){
        console.log("Driving the car");
    }
    brake(){
        console.log("Applying the brake")
    }
}
const car1 = new Car();
car1.drive();
car1.brake();


//setters/getters
//example
const users = {
    set name(n){
        console.log("setting the name" +" "+n);
        this._name = n;
    },
    get name(){
        console.log("getting the name");
        return this._name;
    },
};
users.name = "anbu";
console.log(users.name);

class Car {
    constructor(power){
        this._power = power;
    }
    set power(n){
        return `${this._power=n}`
    }
    get power(){
        return `${this._power}hp`
    }
}
var Car1 = new Car(400);
console.log(Car1.power); 


//class Circle

class Circle {
    constructor(radius,color){
        this.radius =radius;
        this.color =color;
    }
    get radiusCircle(){
        return this.radius;
    }
    set radiusCircle(radius){
        this.radius = radius;
    }
    get colorCircle(){
        return this.color;
    }
    set colorCircle(color){
        this.color = color;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
    get area(){
        return Math.PI *this.radius *this.radius;
    }
    get circumference(){
        return 2 *Math.PI *this.radius;
    }
}
var obj1 = new Circle(1.0,"red");
console.log(obj1.radiusCircle);
obj1.radiusCircle=2.2;
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle="blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);
console.log(obj1.area);
console.log(obj1.circumference);
*/








// const a = [1,2,"abc",true];
// console.log(a);
// for (var i=0;i<a.length;i=i+1){
//     console.log(a[i]);
// }
// console.log(a.length);
// console.log(a.length-1);
// console.log(a.indexOf(1));

// const a = [10,11,12,13,14,15,16]
// for (var i=0;i<a.length;i=i+1){
//   if (a[i]%2===0){
//     console.log(a[i],"even");
//   }
//   else{
//     console.log(a[i],"odd");
//   }
// }
// objects
// const obj = {
//     name : "anbu",
//     age : 21,
//     gender : "male"
// }
// console.log(obj.name)

// const personDetails = {
//     name : "anbu",
//     age : 21,
//     gender : "male",
//     city : "chennai"
// }
// console.log(personDetails);
// //dot method
// console.log(personDetails.name);
// console.log(personDetails.age);
// console.log(personDetails.gender);
// console.log(personDetails.city);
// // box method
// console.log(personDetails["name"]);
// console.log(personDetails["age"]);
// console.log(personDetails["gender"]);
// console.log(personDetails["city"]);

// //add ele in an obj
// personDetails.email="anbu@123gmail.com"
// console.log(personDetails.email);

// //update
// personDetails.name="anbumani";
// console.log(personDetails.name);

// //delete
// delete personDetails.gender;
// console.log(personDetails);

// //add arr to obj
// personDetails.Education = ["10","12","degree"]
// console.log(personDetails.Education);
// for (var i=0;i<personDetails.Education.length;i=i+1){
//     console.log(personDetails.Education[i]);
// }

//for in loop
// const personDetails = {
//     Name : "anbu",
//     Gender : "male",
//     Age : 21,
//     Email : "anbu@123gmail.com"
// }
// for (var key in personDetails){
//     console.log(key);
// }
// for (var key in personDetails){
//     console.log(personDetails[key]);
// }

//Intro to JSON

// var obj = {
//     "name" : "anbu",
//     "gender" : "male",
//     "age" : "21",
//     "city" : "chennai"
// }
// console.log(obj.name);
// console.log(obj.gender);
// console.log(obj.age);
// console.log(obj.city);

// //arra of obj
// const arr = [
//     {
//         name : "anbu",
//         city : "chennai"
//     },
//     {
//         name : "anu",
//         city : "mumbai"   
//     },
//     {
//         name : "joe",
//         city : "new york"
//     }
// ]
// for (var i=0;i<arr.length;i=i+1){
//     console.log(arr[i].name,arr[i].city);
// }
// //add
// arr[3]={name:"john",city:"bangalore"}
// console.log(arr);
// //update
// arr[2]={name:"julie",city:"coimbatore"}
// console.log(arr);

//XMLHttpRequest

// var request = new XMLHttpRequest;
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload=function(){
//     var data = request.response;
//     var result = JSON.parse(data);
//     console.log(result);
//     for (var i=0;i<result.length;i++){
//         console.log(result[i].name.common);
//     }
// }

//function
// const a = 3;
// const b = 4;
// const c = 10;
// const d = 6;
// function add(a,b){
//     console.log(a+b);
// }
// function sub(c,d){
//     console.log(c-d);
// }
// function mul(a,b){
//     console.log(a*b);
// }
// add(3,4);
// sub(10,6);
// mul(3,4);

//normal func
// const result = [];
//  function odd(arr){
//     for (var i=0;i<arr.length;i++){
//         if (arr[i]%2!==0){
//         result.push (arr[i]);
//         }
//     }
//     return result;
//  }
//  console.log(odd([1,2,3,4,5,6,7,8,9,10]));

// // anonymous func
// const result1 = [];
// var a = function (arr){
//     for (var i=0;i<arr.length;i=i+1){
//         if (arr[i]%2!==0){
//             result1.push(arr[i]);
//         }
//     }
//     return result1;
// }
// console.log(a([1,2,3,4,5,6,7,8,9,10]));

// //IIFE func
// const result2 = [];
// (function (arr){
//     for (var i=0;i<arr.length;i=i+1){
//         if (arr[i]%2!==0){
//             result2.push(arr[i]);
//         }
//     }
//     console.log(result2);
// })([1,2,3,4,5,6,7,8,9,10]);

// //arrow func
// const result3 = [];
// var a = (arr)=>{
//     for (var i=0;i<arr.length;i=i+1){
//         if (arr[i]%2!==0){
//             result3.push(arr[i]);
//         }
//     }
//     return result3;
// }
// console.log(a([1,2,3,4,5,6,7,8,9,10]));

//array destructuring 
// const fruits = ["🍎","🍐","🍊","🍇","🍍"];
// const apple = fruits[0];
// const orange = fruits[2];
// console.log(apple);
// console.log(orange);

// const fruits = ["🍎","🍐","🍊","🍇","🍍"];
// const [apple,jackfruit,orange,grapes,pineapple]= fruits;
// console.log(apple);
// console.log(grapes);

//object destructuring
// const obj ={
//     name : "anbu",
//     age : 21,
//     gender : "male",
//     address : {
//         city : "chennai",
//         state : "Tamilnadu"
//     }
// }
// console.log(obj.name);
// console.log(obj.address.city);

// const obj ={
//     name1 : "anbu",
//     age : 21,
//     gender : "male",
//     address : {
//         city : "chennai",
//         state : "Tamilnadu"
//     }
// }
// const{name1,age,gender,address:city,state} = obj;
// console.log(name1);

//array and obj 
// const person = {
//     name : "anbu",
//     location : ["chennai","trichy","madurai"]
// }
// const {location:[loc,locs,loccs]}=person;
// console.log(loc);
// console.log(locs);

//create obj
// const order = {
//     id : 1000,
//     pizza : "farmhouse"
// }
// console.log(order.id,order.pizza);

//using shorthand property
// const id = 1000;
// const pizaa = "farmhouse";
// const order ={id,pizaa}
// console.log(order);

//temperature literals
// const a = 3;
// const b = 4;
// const c = (a+b);
// console.log(`the value of a is ${a}
// the value of b is ${b}
// the value of c is ${a+b}`);

//spread operator
// const arr = ["guvi"]
// console.log(...arr);
// const arr1 = ["anbu","agila","chan"]
// const arr2 = ["orange","mango","apple"]
// const arr3 = [...arr1,...arr2]
// console.log(arr3);

//rest operator
// function test (a,b,...rest){
//     let sum =0;
//     for (var i=0;i<rest.length;i++){
//         sum+= rest[i]
//     }
//     return sum;
// }
// console.log(test(12,13,14,15,16,17));

//
// const request = new XMLHttpRequest;
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload = function(){
//     const data = request.response;
//     const result = JSON.parse(data);
//     console.log(result);
// //for loop
//     for (var i=0;i<result.length;i++){
//     console.log(result[i].area);
//  }
// //for in loop
//     for (let key in result){
//         console.log(result[key].region);
//     }
// //for of loop
//     for (let val of result){
//         console.log(val.population,val.subregion);
//     }
// }

//class
// class Person {
//     constructor(name,age,gender,city){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.city = city;
//     }
// }
// const person1 = new Person("anbu",21,",male","chennai");
// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.gender);
// console.log(person1.city);

//class with methods
// class Car {
//     drive(){
//         console.log("driving the car");
//     }
//     brake(){
//         console.log("applying brake on the car");
//     }
// }
// const car1 = new Car();
// car1.drive();
// car1.brake();

//set & get methods
// const users = {
//     set name(n){
//         console.log("setting the name"+" "+n)
//         this._name = n;
//     },
//     get name(){
//         console.log("getting the name");
//     }
// };
// users.name = "anbu";
// console.log(users.name);

//map
// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true)
// request.send();
// request.onload = function(){
//     var data = request.response;
//    var result = JSON.parse(data);
//    var res = result.map((ele)=>console.log(ele.name.common));
// }

// //filter
// var request1 = new XMLHttpRequest();
// request1.open("GET","https://restcountries.com/v3.1/all",true)
// request1.send();
// request1.onload = function(){
//     var data1 = request1.response;
//     var result1 = JSON.parse(data1);
//     var res1 = result1.filter((x)=>x.population<300000);
//     res1.map((ele)=>console.log(ele.name.common));
// }

//reduce
// var request2 = new XMLHttpRequest();
// request2.open("GET","https://restcountries.com/v3.1/all",true)
// request2.send();
// request2.onload = function(){
//     var data2 = request2.response;
//     var result2 = JSON.parse(data2);
//     var res2 = result2.reduce((acc,cv)=>acc+cv.population,0)
//     console.log(res2);
// }


//promise 
/*const a = parseInt(prompt(["Enter a number"]));
const promise1 = new Promise((resolve,reject)=>{
    if (a%2===0){
        resolve ("Even num")
    }
    else {
        reject("odd num")
    }
})
promise1.then((data)=>console.log(data)).catch((error)=>console.log(error));

//in func
const b = parseInt(prompt(["Enter a number"]));
function foo(num){
    return new Promise((resolve,reject)=>{
        if (b<=18){
            resolve("vote")
        }
        else{
            reject ("no vote")
        }
    })
}
foo(18).then((data)=>console.log(data)).catch((error)=>console.log(error));


//promise chain
function mul(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num * 2), 2000);
    });
  }
  mul(5)
    .then((data) => {
      console.log(data); 
      return mul(data); 
    })
    .then((ele) => {
      console.log(ele); 
      return mul(ele); 
    })
    .then((ele1) => console.log(ele1)) 
    .catch((error) => console.log(error));


//promise.all
const promise1 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>console.log("promise1 is resolved"),2000)
    }
    else{
        setTimeout(()=>console.log("promise1 is rejected"),4000)
    }
});
const promise2 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>console.log("promise2 is resolved"),2000)
    }
    else{
        setTimeout(()=>console.log("promise1 is rejected"),4000)
    }
});
const promise3 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>console.log("promise3 is resolved"),2000)
    }
    else{
        setTimeout(()=>console.log("promise1 is rejected"),4000)
    }
});
const res = Promise.all([promise1,promise2,promise3])
.then((data)=>console.log(data)).catch((error)=>console.log(error));

//promise.allSettled
const promise1 = new Promise((resolve,reject)=>{
    if(false){
        setTimeout(()=>console.log("promise1 is resolved"),2000)
    }
    else{
        setTimeout(()=>console.log("promise1 is rejected"),4000)
    }
});
const promise2 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>console.log("promise2 is resolved"),2000)
    }
    else{
        setTimeout(()=>console.log("promise1 is rejected"),4000)
    }
});
const promise3 = new Promise((resolve,reject)=>{
    if(true){
        setTimeout(()=>console.log("promise3 is resolved"),2000)
    }
    else{
        setTimeout(()=>console.log("promise1 is rejected"),4000)
    }
});
const res = Promise.allSettled([promise1,promise2,promise3])
.then((data)=>console.log(data)).catch((error)=>console.log(error));


//!Using promise and fetch
const res = fetch("https://restcountries.com/v3.1/all");
res .then((data) => data.json())
    .then((data1)=>{
        console.log(data1);
    })
*/

//async await
async function foo(){
    try{
        const data = await fetch("https://restcountries.com/v3.1/all");
        const res = await data.json();
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
foo();









