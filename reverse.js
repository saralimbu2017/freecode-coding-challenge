// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

function reverseArray(numbers, start, end) {
  //loop through the array while the start is less than or equal to the end
 if (start >= end) {
   return;
 }

 var temp = numbers[start];
 numbers[start] = numbers[end];
 numbers[end] = temp;
 start++;
 end--;

 reverseArray(numbers, start, end);
 return numbers;
}

var output = reverseArray([1,3,2,5],0,3);
console.log(output);