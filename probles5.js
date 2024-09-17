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
// const arrayNumber = 7,8
// console.log(Array.isArray(arrayNumber));
console.log(waitingTime(7, 8, 3, 4, 5, 9));
