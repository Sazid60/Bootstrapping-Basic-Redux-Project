// //* Pure function




// const add = (a, b) => a + b

// console.log(add(2, 5));
// console.log(add(2, 5));
// console.log(add(2, 5));
// console.log(add(2, 5));
// console.log(add(2, 5));

// // impure function

// // 1
// let total = 0;
// const addToTotal = (amount) => (total = total + amount);

// console.log(addToTotal(8))

// // 2
// const updateDate = () => {
//     new Date()
// }

// //3

// const randomNumber = (amount) => {
//     return amount + Math.random()
// }

// console.log(randomNumber(3))
// console.log(randomNumber(3))
// console.log(randomNumber(3))
// console.log(randomNumber(3))



// const employee = {
//     name: "Mir",
//     address: {
//         country: "Bangladesh",
//         city: "Dhaka"
//     }
// }

// const employee2 = {
//     ...employee,
//     name: "Sazid",
//     address: {
//         ...employee.address,
//         city: "chittagong"
//     }
// }

// // employee2.address.city = "chittagong"

// console.log(employee === employee2)

// console.log(employee)
// console.log(employee2)



// const { produce } = require("immer")

// const employee = {
//     name: "Mir",
//     address: {
//         country: "Bangladesh",
//         city: "Dhaka"
//     }
// }

// const employee2 = produce(employee, (draft) => {
//     draft.name = "Mezba",
//         draft.address.city = "CTG"
// })

// console.log(employee)
// console.log(employee2)


// Function Currying

// normal 
const add = (a, b) => a + b

console.log(add(3, 5))

// curried 

const add1 = (a) => (b) => a + b

console.log(add1(3)(5))

// simplified way function currying 
function add2(a) {
    return function (b) {
        return a + b
    }
}

// practical example

//  using normal function 

const totalPrice = (amount, discount) => amount - amount * discount

console.log(totalPrice(100, 0.3))
console.log(totalPrice(59, 0.2))

//  using currying function 
const totalPrice1 = (discount) => (amount) => amount - amount * discount

const withDiscount = totalPrice1(0.3)
// just declared discount one time all the user is having the discount no need to write further 
console.log(withDiscount(100))
console.log(withDiscount(200))
console.log(withDiscount(300))
