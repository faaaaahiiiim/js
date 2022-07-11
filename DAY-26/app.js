// console.log(window.innerWidth)
// console.log(window.innerHeight)
// window.alert("this is an alert")
// const name = window.prompt("sup?")

// console.log(window)

const car = {
    make: "BMW",
    model: "x4",
    move: function(){
        // console.log(this)
        console.log("moving")
    }
}

//this keyword will refer to window when it is not inside an object

car.move()
console.log(this)

