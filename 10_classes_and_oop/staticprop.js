class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const priya = new User("Priya")
// console.log(priya.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iPhone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId())