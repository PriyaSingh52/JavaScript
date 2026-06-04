const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //DB calls, cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    })

}, 1000);

promiseOne.then(function(){
    console.log('Promise is consumed');
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 is completed');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise 2 is consumed');
})


const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "priya", email: "priya@gmail.com"});
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user)
})


const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "lisa", password: "123"});
        }else{
            reject('Error: Something went wrong');
        }
    }, 1000)
})

PromiseFour
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('The Promise is either resolved or rejected');
})


const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "javascript", password: "123"});
        }else{
            reject('Error: JS went wrong');
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// async  function getAllUsers(){
//  try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>  {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})