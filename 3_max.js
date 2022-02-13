const business = 1650;
const minister = 750;

const army = 900;



// compare 2
// if (business > minister) {
//     console.log('Business person er pola is bigger');
// }
// else {
//     console.log('Minister er pola is bigger');
// }



// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three

// Task 2: create a function that takes three numbers as input parameter and returns you the smallest number of the three.


// compare 2
function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const largest = findLargest(154, 241);
// console.log('function largest is', largest);


// compare 3
function findingLargest(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
const largestOf3 = findingLargest(500, 400, 300);
console.log('largest of 3: ', largestOf3);



// compare 3
function findingSmallest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const smallestOf3 = findingSmallest(100, 200, 300);
console.log('Smallest of 3: ', smallestOf3);




// compare 3
/* if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
    console.log('army is bigger');
} */

var max = Math.max(business, minister, army);
// console.log('largest is', max);