// let numbers = [3, 8, 12, 5, 8, 20, 3, 15];
// let newArray = []
// let largest = 0
// let second_largest = 1
// for(let i = 0; i < numbers.length; i++){
//     if(!newArray.includes(numbers[i] && second_largest < largest)){
//         newArray.push(numbers[i])
//         second_largest = numbers[i]

//     }
// }console.log(newArray);
// console.log(second_largest);


let number = [3, 8, 12, 5, 8, 20, 3, 15];
let newArray = [];
for(let i = 0; i < number.length; i++){
    if(!newArray.includes(number[i])){
        newArray.push(number[i])
    }
}
 console.log("Unique Value :" + newArray);
    
let largest = newArray[0]
let second_largest = newArray[1]
  for(let i = 2; i < newArray.length; i++){
    if(newArray[i] > largest){
        second_largest = largest
        largest = newArray[i];
    }else if(newArray[i] > second_largest){
        second_largest = newArray[i];
    }
  }
console.log("Second largest : " + second_largest);


