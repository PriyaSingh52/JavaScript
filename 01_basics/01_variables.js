const accountId = 1577787
let accountEmail = "priya@google.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;


// accountId = 2   // not allowed

accountEmail = "priya@amazon.com"
accountPassword = "54321"
accountCity = "Bangalore"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and function scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])