function calculateTax(income, expense) {
   
    if (income <= 0 || expense <= 0) {
        return "Invalid Input"
    }
    const minus = income - expense;
    const tax = minus * .20;    
    return tax
}

function sendNotification(email) {
    if (!email.includes('@')) {
        const errorMessage = "Invalid Email"
        return errorMessage
    }
    const mainEmail = email.split('@')
    const userName = mainEmail[0]
    const domainName = mainEmail[1]
    const message = userName + " sent you an email from " + domainName
    return message
}

function checkDigitsInName(name) {
    if (typeof name === "number") {
        return "Invalid Input"
    }
    let checkNumber = ['1', '2','3', '4' ,'5', '6', '7', '8', '9'];
    for(let i = 0; i < name.length; i++){
        if (checkNumber.includes(name[i])) {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input";
    }
    const parentScore  = obj.isFFamily ? 20 : 0;
    const finalScore = obj.testScore + obj.schoolGrade + parentScore;
    if (finalScore >= 80) {
        return true;
    }
    return false;
}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number" ) {
        return 'Invalid Input'
    }

    let sum = 0;
    for(const time of waitingTimes){
        sum = sum + time;
    }
    const averageLength = waitingTimes.length;
    const avg = Math.round(sum / averageLength);
    const serial = serialNumber - 1;
    const remainingTime = serial - averageLength;
    const waitingTime = avg * remainingTime; 
    return waitingTime;
}