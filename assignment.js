// problem1;
function calculateTax(income, expense) {
   
    if (income <= 0 || expense <= 0) {
        return "Invalid Input"
    }
    const minus = income - expense;
    const tax = minus * .20;    
    return tax
}


// problem 2 
function sendNotification(email) {
    if (!email.includes('@')) {
        const errorMessage = "Invalid Email"
        return errorMessage
    }
    const mainEmail = email.split('@')
    // console.log(userName);
    const userName = mainEmail[0]
    const domainName = mainEmail[1]
    const message = userName + "sent you an email from" + domainName
    return message
}

// // const string = 'zihad@gmail.com'
const string = 'farhan34@yahoo.com'
// const result = sendNotification(string)
// console.log(result);


// problem 3

function checkDigitsInName(name) {
    // const numberCheck = /\d/;
    
    if (typeof name !== 'string') {
        return "Invalid Input"
    }
    const numberCheck = /\d/;
    return numberCheck.test(name);
}

// let string = 12232;
// const result = checkDigitsInName(string)
// console.log(result);


// // problems 4;
// const obj= { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
// function calculateFinalScore(obj) {
//     //write your code here
// }


// problems 5;
function  waitingTime(waitingTimes  , serialNumber) {
    let sum = [];
    for(const oddNum of waitingTimes){
        if (oddNum % 2 === 1) {
            sum.push(oddNum)
        }
    }
    const count = sum.length;
    let allSum = 0;
    for(const item of sum ){
        allSum = allSum + item;
    }
    const avg = allSum / count;
    return avg;
}
const numbers = [ 3, 5, 7, 11, 6 ];
const result = waitingTime(numbers,10)
console.log(result);