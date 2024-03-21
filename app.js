// Q1:  sum of array elements

/*
function sum(array) {
    let sum = 0;
    for (const item of array) {
        sum = sum + item;

    }
    return sum;
}

let numbers = [1, 2, 3, 4, 5, 6];

let x= sum(numbers);
console.log(x);
*/




///////////////////////////////////////




// Q2; max and min values in array

/*
function find(array) {
    let max = array[0];
    let min = array[0];

    for (const item of array) {

        if (item > max) {
            max = item;

        }
        if (item < min) {
            min = item;
        }

    }

    console.log(`maximun value is ${max}`);
    console.log(`minimum value is ${min}`);
    // return {max,min}

}

let numbers  =[10,15,3,45,8,9];

find(numbers);

*/


// reverse an array 

/* function rev(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);

    }
    console.log(revArr);

}

let nums = [1,2,3,4,5];
console.log(nums.length);
rev(nums); */

/*  the index of the last element is always one less than the length of the array thats why  let i = arr.length - 1*/



//////////////////////////////////////



//Q4 : prints only even elemenst of array 


/*    function evens(array) {
      let even=[];
      for (let number of array) {
          if (number % 2 === 0) {
              even.push(number)
          }
      }

      console.log(even);
  }

   let array1=[2,4,45,76,87,98,67,34];
   evens(array1);
*/

// remember  for-of loop runs as many as times as of number of elements in array it loops through on each element



//////////////////////////////////////////////////////////////////////////////




// Q5. Remove duplicates from array and display only the unique elements and tells no of unique elements

function remDup(array) {
    let uniqueArr = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (array[i] === uniqueArr[j]) {
                isDuplicate = true;

                break;

            }
        }
        if (!isDuplicate) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
    let x = uniqueArr.length
    console.log(`nuber of unique elements are ${x}`);
}
let arr2 = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9];

remDup(arr2);




////////////////////////////////////////////////////////



/* function searchElement(array, element) {
    let found = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {

            console.log(`${element} is found at index of ${i}`);
            found = true;
            break;


        } else {
            found = false;

        }
    }
    if (!found) {
        console.log('element is not found');
    }


}

let arr = [2, 4, 6, 8, 10, 9];
searchElement(arr, 9);
 */

////////////////////////////////////










































