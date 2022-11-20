//Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.
/*
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
              Maximum element is: 9

Input: arr[] = {22, 14, 8, 17, 35, 3}
Output:  Minimum element is: 3
              Maximum element is: 35
              */


// input is an array
//output will be set of two numbers. we will create a hash map to return result

function findMinMax(numbers, n) {
  //output is a set of numbers so we will create a hash map
  var maxmin = {};
  //if the size of array is one, the max and min number will be same
  if(n == 1) {
    maxmin.min =  numbers[0];
    maxmin.max = numbers[0];
  }

  // if size of array is geater than 1,initialize max and min
  if(numbers[0] > numbers[1]) {
    maxmin.min = numbers[1];
    maxmin.max = numbers[0];
  } else {
    maxmin.min = numbers[0];
    maxmin.max = numbers[1];
  }
  
  //compare the elements with max and min 
  for(var index = 2; index < n; index++) {
    if(numbers[index] > maxmin.max) {
      maxmin.max = numbers[index];
    } else if(numbers[index] < maxmin.min){
      maxmin.min = numbers[index];
    }
  }

  return maxmin;
}

//driver code to test above function
var array = [3, 5, 4, 1, 9];
var length = array.length;
var output = findMinMax([3, 5],length);
console.log("max number"+ output.max);
console.log("min number"+ output.min);
