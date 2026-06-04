const user = {
    username: "priya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
   
    this.greeting = function(){
       console.log(`Welcome ${this.username}`);
    }

    return this;
}

const useOne =  new User("priya", 8, true);
const useTwo =  new User("john", 5, false);
console.log(useOne.constructor);
// console.log(useTwo);

// new keyword creates an empty object and sets the value of this to that object. It also executes the function and returns the object.

