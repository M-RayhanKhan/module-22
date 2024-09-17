function disCount(quantity) {
    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        const total = quantity * 90;
        return total;
    } else {
        const total = quantity * 70;
        return total;
    }
}
const result = disCount(210);
// console.log(result);


function disCount2(quantity) {
    const first100price = 100;
    const second100price = 90;
    const above200price = 70;

    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    } else if (quantity <= 200) {
        const first100Total = 100 * first100price;
        const remainingQuantity = quantity - 100;
        const totalQuantity = remainingQuantity *  second100price;
        const total = first100Total + totalQuantity;
        return total;
    }else{
        const first100Total = 100 * first100price;
        const second100total = 100 * second100price;
        const remainingQuantity = quantity - 200;
        const remaining = remainingQuantity * above200price;
        const total = first100Total + second100total + remaining;
        return total;
    }
}
const totalDiscount = disCount2(201);
// console.log(totalDiscount);
console.log(Math.pow(2, z3));