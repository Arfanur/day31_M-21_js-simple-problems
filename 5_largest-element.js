/* function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(i, element);
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 54, 2, 34, 75, 32, 13];
const oldest = largestElement(ages);
// console.log('oldest', oldest);
const youngest2 = largestElement([-12, -6, -17]);
console.log('oldest2', oldest2);
 */


// Task: find the lowest element of an array
function smallestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        // console.log(i, element);
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

const ages = [12, 54, 2, 34, 75, 32, 13];
const youngest = smallestElement(ages);
console.log('youngest', youngest);
const youngest2 = smallestElement([-12, -6, -17, -15, -10, -4]);
console.log('youngest2', youngest2);
