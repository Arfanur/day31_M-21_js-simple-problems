const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(i, element);
    sum = sum + element;
}
// console.log(sum);

function arayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}



// Quiz

// const total = arayTotal([32, 45, 67]);
// console.log(total);
