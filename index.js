// Write your solution in this file!
//Declare a variable in global scope called customerName
var customerName = "bob"

const leastFavoriteCustomer = "Morio"

//Write a function that accesses that global 
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

console.log(customerName)

//Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
    bestCustomer = "not bob"
}

//See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Mzae"
} 

console.log(leastFavoriteCustomer)
