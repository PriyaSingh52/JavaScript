class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){ 
        return this._email.toUpperCase()
     }
    set email(value){   
        this._email = value
    }
    get password(){ 
        return `${this._password}priya`
    }
    set password(value){
        this._password = value
    }
}

const priya = new user("p@priya.ai", "abc");
    console.log(priya.email); 