// tsk 2;
function countNumber(numbers, find) {
    find = 5;
    let sum = 0;
    for(const number of numbers){
       if (number === find) {
        sum++
       }else if (number === 25) {
        return 0;
       }
    }
    return sum;
}
const numbers = [5,6,11,12,98, 25];
const count = countNumber(numbers);
// console.log(count);

// task 3

function vowelCount (str){
    const vowels = ['a','e','i','o','u'];
    let sum = 0;
    for (const vowel of str) {
        if (vowels.includes(vowel) === false) {
            sum++
        }
    }
    return sum;
}
const string = 'Bangladesh is very beautiful country';
const result = vowelCount(string);
console.log(result);