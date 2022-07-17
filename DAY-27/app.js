//** ES6 **/

// //function with es6
// const greet = function (name="john"){
//     console.log("hi " + name);
// } //never hoisted at the top

// function greet2 (name="john"){
//     console.log("hi " + name);
// }

// greet()
// greet2()




// //normal function
// const add = function (a=0, b=0){
//     return a+b;
// }
// console.log(add(1,4))

// //function using arrow aka arrow function
// const addArrow = (a=0 ,b=0) => {
//     return a+b;
// }
// console.log(addArrow(1,2))

// //      or (shorter)
// const addArrow2 = (a=0, b=0) => a+b;
// console.log(addArrow2(5,5))

// //filter using arrow function
// const arr= [1,2,3,4,5,6];
// const newArr = arr.filter((item) => item%2 == 0)
// console.log(newArr)

// //map using arrow function
// const arr2= arr.map((item) => item+2)
// console.log(newArr)

// //reduce using arrow function
// const sum= arr.reduce((a,b) => a+b)
// console.log(sum) 

// //arrow function in object will not work
// const car = {
//     make:"asd",
//     model:"qwe",
//     move:function(){
//         console.log(this)
//     },
//     move2:()=>{
//         console.log(this)
//     }
// }

// car.move()
// car.move2()

// const Car = function(make,model){
//     this.model=model
//     this.make=make
// }

// const Car1 = new Car("dkfns", "njfks")
// console.log(Car1)



// //Destructuring
//// Array destructure
// const arr = ["a","b","c"]
// // const var1 = arr[0];
// // const var2 = arr[1];
// // const var3 = arr[2];
// // or we can use destructuring
// const [var1,var2,var3] =arr;  // we can not skip anything


////Object destructuring
// const car ={
//     brand:"Ford",
//     model:"Must",
//     year:"1946",
//     engine: "v8"
// }

// const newObj={
//     brand: car.brand,
//     model: car.model
// }
// console.log(newObj)
//// or we can destructure

// const {brand, year, model} = car
// console.log(brand, year, model)

// const {brand:compName, year, model} = car  //can change the reference key
// console.log(compName)

////Destructuring object within object
// const car ={
//     brand:"Ford",
//     model:"Must",
//     year:"1946",
//     engine: {
//         capacity:"5.8L",
//         type:'v8',
//         fuel:'(petrol)'
//     }
// }

// const {engine:{capacity:something}} = car //changing reference key

// console.log(something)


////Spread operator with array ...
// const arr1 = [1,2,3]
// const arr2 = [4,5]
// console.log (arr1)
// console.log (arr2)
// console.log (...arr1)
// console.log (...arr2)
// console.log (...arr1, ...arr2)

// const arr3 = [...arr1,...arr2]
// console.log(arr3)
// console.log(...arr3)

////spread operator with object

// const car = {
//     model: "bmw"
// }
// const engine ={
//     type: "v8"
// }
// console.log({...car,...engine}) // it has to be inside curly brackets


//// template strings
// const Name = "john"
// const age = 21
// console.log(Name +" is"+ age+" years old")
// console.log(`${Name} is ${age>20? "old":"young"} years old`) //can add logic