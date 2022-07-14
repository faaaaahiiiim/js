// console.log(window.innerWidth)
// console.log(window.innerHeight)
// window.alert("this is an alert")
// const name = window.prompt("sup?")

// console.log(window)




//Object and function
// const car = {
//     make: "Mercs",
//     model: "gle",
//     move: function(){
//         console.log(this)
//         console.log("moving")
//     }
// }

// car.move()
// console.log(car.make)

//this keyword will refer to window when it is not inside an object
//console.log(this)




// class & constructor
// class car {
//     constructor(model, make){
//     this.make=make;
//     this.model=model;
//     }

//     move(){
//         console.log("car is moving")
//     }
// }

// const car1 = new car('BENZ', 'GLE');
// console.log(car1); 
// car1.move();




// object with function constructor
//function is a constructor
// const Car = function (make, model, year){
//     this.make=make;
//     this.model = model;
//     this.year=year;
//     return this
// }

// const car1 = new Car("benz", "gle",2020 );
// console.log(car1)


//array & Map function
// const arr = ["a","b","c"];
// const arr2 = arr.map(function(f){
//     return f
// })

// arr.pop()
// console.log(arr)
// console.log(arr2)



// const arr= [1,2,3,4,5,6,7,8,9,10];

//reduce - it will iterate the array
// const sum = arr.reduce(function(a,b){
//     console.log(a,b)
//     return a+b
// })
// console.log(sum)



// filter
// const newArr = arr.filter(function(item){
//     return item % 2 == 0
// })
//console.log(newArr)



//foreach
// const newArr = []
// arr.forEach(function(e){
//     if(e%2 == 0){
//         newArr.push(e);
//     }
// })
//console.log(newArr)

