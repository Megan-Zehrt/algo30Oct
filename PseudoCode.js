// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];
// [1, 3, 4]

[]
[1, 2, 2]

// [1,2]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭

// create a function that takes 2 sorted arrays
function mergeDedupe(arr1, arr2) {
    //! write the pseudocode first!
    //1. create a temp var for our output array
    // 2. create two variables where a=0 and b=0
    // 3. create a while loop saying that if the index within the bounds of a is equal to the index of b 
    // 4. Make another variable and make that hold onto whatever value we have
    // 5. create a condition comparing the values of temparr1 and temparr2
        // if temparr1 is less than temprr2 push temparr1
    // 6. then let 
    // 7. return the output array

    //! do not use Set()

 
}



// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]