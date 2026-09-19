// let numbers = [5, 10, 15, 20];
// numbers.forEach(function(number){
//     console.log(number);

// })

// let numbers = [5, 10, 15, 20];
// numbers.forEach(function(number){
//     console.log(number + number);

// })


// let numbers = [5, 10, 15, 20];
// numbers.forEach(function (number) {
//     if (number > 10) {
//         console.log(number);
//     }
// })

// let numbers = [2, 5, 8, 11, 14];
// numbers.forEach(function (number) {
//     if (number % 2 == 0) {
//         console.log(number + number);

//     }
// })

// let numbers = [3, 6, 9, 12];
// let newnumber = numbers.map(function(number){
//     return number * 5
// })
// console.log(newnumber);


// let numbers = [5, 10, 15, 20];
// let newArray = numbers.map(function(number){
//     return number + 10 ;
// })
// console.log(newArray);


// let students = [
//     { name: "Ali", marks: 50 },
//     { name: "Saad", marks: 80 },
//     { name: "Usman", marks: 70 }
// ];

// let newArray = students.map(function(student){
//     return student.name
// })
// console.log(newArray);


// let students = [
//     { name: "Ali", marks: 50 },
//     { name: "Saad", marks: 80 },
//     { name: "Usman", marks: 70 }
// ];
// let newArray = students.map(function(student){
//     return student.marks;
// })
// console.log(newArray);


// let numbers = [5, 12, 8, 21, 16, 3, 10];
// let newArray = numbers.filter(function(number){
//     if(number % 2 == 0){
//         return number
//     }
// })
// console.log(newArray);


// let students = [
//     { name: "Ali", marks: 45 },
//     { name: "Saad", marks: 82 },
//     { name: "Usman", marks: 67 },
//     { name: "Ahmed", marks: 35 }
// ];

// let newArray = students.filter(function(student){
//     if(student.marks >= 60){
//         return student
//     }
// })
// console.log(newArray);


// let products = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Headphones", price: 2500 },
//     { name: "Monitor", price: 7000 }
// ];
// let newProduct = products.filter(function(product){
//     if(product.price > 2000){
//         return product ;
//     }
// })
// console.log(newProduct);


// let products = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Headphones", price: 2500 },
//     { name: "Monitor", price: 7000 }
// ];
// let productFind = products.filter(function(product){
//     if(product.price == 3000){
//         return product
//     }
// })
// console.log(productFind);


// let students = [
//     { name: "Ali", marks: 55 },
//     { name: "Saad", marks: 82 },
//     { name: "Usman", marks: 67 },
//     { name: "Ahmed", marks: 91 }
// ];

// let result = students.find(function(student){
//     return student.marks == 82
// })
// console.log(result);


// let products = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Headphones", price: 2500 },
//     { name: "Monitor", price: 7000 }
// ];

// let result = products.find(function(product){
//     return product.price >= 5000
// })
// console.log(result);


// let numbers = [7, 13, 22, 9, 16, 25];
// let result = numbers.find(function(number){
//     return number > 20
// })
// console.log(result);


// let students = [
//     { name: "Ali", marks: 55 },
//     { name: "Saad", marks: 82 },
//     { name: "Usman", marks: 67 },
//     { name: "Ahmed", marks: 91 }
// ];
// let result = students.find(function(student){
//     return student.marks > 70
// })
// console.log(result);


// let numbers = [10, 20, 30, 40];
// let result = numbers.reduce(function(total,number){
//     return total + number
// },0)
// console.log(result);

// let numbers = [5, 10, 15, 20];
// let result = numbers.reduce(function(multiply,number){
//     return multiply * number
// },1)
// console.log(result);


// let numbers = [4, 7, 2, 9, 5];
// let result = numbers.reduce(function(largest,number){
//     return largest > number?largest : number
// },numbers[0])
// console.log(result);

// let students = [
//     { name: "Ali", marks: 50 },
//     { name: "Saad", marks: 80 },
//     { name: "Usman", marks: 70 },
//     { name: "Ahmed", marks: 90 }
// ];

// let result = students.reduce(function(total,student){
//     return student.marks + total
// },0)
// console.log(result);


// let products = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Headphones", price: 2500 },
//     { name: "Monitor", price: 7000 }
// ];
// let result = products.reduce(function (total, product) {
//     return total + product.price
// }, 0)
// console.log(result);


// let numbers = [5, 12, 8, 21, 4, 16];
// let result = numbers.reduce(function(total,number){
//     return  number % 2 == 0? total + number : total
// },0)
// console.log(result);


// let numbers = [10, 5, 8, 20, 3, 12];
// let result = numbers.reduce(function(total , number){
//     return number % 2 != 0? total + number : total
// },0)
// console.log(result);


// let numbers = [4, 7, 10, 3, 8, 15];
// let result = numbers.reduce(function(total,number){
//     return number > 5 ? total + number : total
// },0)
// console.log(result);


// let numbers = [10, 25, 8, 30, 15, 5];
// let result = numbers.reduce(function(multiply,number){
//     return number%2 == 0 ? multiply * number : multiply
// },1)
// console.log(result);


// let students = [
//     { name: "Ali", marks: 45 },
//     { name: "Saad", marks: 82 },
//     { name: "Usman", marks: 67 },
//     { name: "Ahmed", marks: 91 }
// ];

// let result = students.reduce(function(hightest,student){
//     return hightest > student.marks?hightest :student.marks;

// },0)
// console.log(result);


let students = [
    { name: "Ali", marks: 45 },
    { name: "Saad", marks: 82 },
    { name: "Usman", marks: 67 },
    { name: "Ahmed", marks: 91 }
];

let result = students.reduce(function(lowest,student){
    return lowest < student.marks ? lowest : student.marks;
},students[0].marks)
console.log(result);
