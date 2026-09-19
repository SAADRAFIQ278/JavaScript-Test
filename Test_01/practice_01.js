//Problem 01

// let number = [14, 7, 22, 9, 30, 11, 18];
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 != 0) {
//         sum += number[i]
//     }
// } console.log(sum);


//Problem 02

// let number = [5, 12, 8, 21, 16, 3, 10];
// let largest = 0;
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0 && number[i] > largest) {
//         largest = number[i]
//     }
// } console.log(largest);


// Problem 03


// let student = [
//     { name: "Ali", marks: 55 },
//     { name: "Saad", marks: 82 },
//     { name: "Ahmed", marks: 47 },
//     { name: "Usman", marks: 71 }
// ];

// for (let i = 0; i < student.length; i++) {
//     if (student[i].marks > 70) {

//         console.log(student[i].name);
//     }
// }        


// Problem_05

// let product = [
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Headphones", price: 2500 }
// ];
// let total = 0

// function totalPrice() {
//     for (let i = 0; i < product.length; i++) {
//         if (product[i].price > 2000) {
//             total += product[i].price;
//         }
//     }; return total
// }
// console.log(totalPrice());

// problem_06

let number = [4, 9, 12, 7, 18, 21, 10];
let smallest ;
let second_smallest ;
if(number[0] < number[1]){
    smallest = number[0]
    second_smallest = number[1]
}else {
    smallest = number[1];
    second_smallest = number[0]
}

for(let i = 2; i < number.length; i++){
    if(number[i] < smallest ){
        second_smallest = smallest;
        smallest = number[i]
    }else if( number[i] < second_smallest){
       second_smallest = number[i]
    }
}
console.log("Smallest = ", smallest);
console.log("Second_smallest = ", second_smallest);
