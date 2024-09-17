function getMax(numbers){
    let max = numbers[0];
    // console.log(max);
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const numbers = [66 ,64,60,72, 78, 65 , 85 ,22];
const max = getMax(numbers);
console.log(max);