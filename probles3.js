// problem 3
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

let string = 123;
const result = checkDigitsInName(string)
console.log(result);