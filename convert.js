// 12 inch 1 feet;

function inchToFeet(inch){
    const feetFraction = inch / 12;
    console.log(feetFraction);
}
// console.log(inchToFeet(85));
function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12; 
    const result = feetNumber + " ft " + inchRemaining + " inch. ";
    return result;

}
const result = inchToFeet2(75)


function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}
const result1 = mileToKilometer(4);
// console.log(result1);

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

const result