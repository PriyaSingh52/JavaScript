// let myName = "priya     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.priya = function(){
    console.log(`priya is persent in all objects`)
}

Array.prototype.heyPriya = function(){
    console.log(`Priya says hello`)
}

// heroPower.priya() 
// myHeros.priya()
// myHeros.heyPriya()
// heroPower.heyPriya()

// inheritance 
const User = {
    name: "chai",
    email: "chai@example.com"
}
const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "js assignment",
    fullTime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "priyasingh"

String.prototype.trueLength = function(){
    // console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"priya".trueLength()
"iceTea".trueLength()
