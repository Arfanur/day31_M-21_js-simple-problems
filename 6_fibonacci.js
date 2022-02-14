// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
/* 
3rd = 2nd + 1st
4tth = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4rd
16th = 15th + 14th
119th = 118th + 117th
nth = (n-1)th + (n-2)th
ith = (i-1)th + (i-2)th
*/

/* 
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
 */

/* 
function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries([234]);
console.log(fiboSeries);
 */


function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'Please give a number';
    }
    if (num < 2) {
        return 'Please enter a positive a number greater than 1';
    }

    // console.log(typeof num);
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(13);
// console.log(fiboSeries);



// Quiz

// var a = 2;
// var b = 3;
// if (a < b) {
//     console.log("Hello");
// }


// function add(a, b) {
//     return a + b;
// }
// console.log(add("adam" + "eve"));


// Count letter
// var sentence = "I will be a web developer.  I m hardworking";
// var count = 0;
// for (var i = 0; i < sentence.length; i++) {
//     var letter = sentence[i];
//     if (letter == 'a') {
//         count++;
//     }
// }
// console.log(count);