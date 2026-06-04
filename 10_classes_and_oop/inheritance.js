const User = class {
    constructor (username) {
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
    
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(course){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("Chai", "chai@example.com", "123")

chai.addCourse()
const masalaChai = new Teacher("Masala Chai")

masalaChai.logMe()

console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true