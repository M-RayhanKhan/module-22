// Find the lowest number in the array below.
// task1
const heights2 = [167, 190, 120, 165, 137];
function arrNumber(heights) {
    let min = heights[0];
    for(const num of heights){
        if (num < min ) {
            min = num;
        }
    }
    return min
}
const findMinNumber = arrNumber(heights2);
// console.log(findMinNumber);


// Task -2:
// Find the friend with the smallest name.
const arrString = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// function friend(names) {
//    let index = names[0];
//   for(const name of names){
//     if(name.length < index.length){
//        index = name;
//     }
//   }
//   return index;
// }
// 
function friends (names){
    let name = names[0];
    for(let i = 1; i < names.length; i++ ){
        if (names[i].length > name.length) {
            name = names[i];
        }
    }
    return name;
}
const arrayStr = friends(arrString);
// console.log(arrayStr);


// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
// task: 3

function calculateElectronicsBudget(){
    // const laptopPrice = 35000;
    // const tabletPrice = 15000;
    // const mobilePrice = 20000;

    // const laptopQuantity = 5 * laptopPrice;
    // const tabletPrice
}