var array1 = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];
var array3 = [11, 12, 13, 14, 15];

/*
concat method
=============
The arr.concat() method is used to merge two or more arrays together. 
This method does not alter the original arrays passed as arguments.
*/
console.log("Result after concat() method :" + array1.concat(array2));
console.log("Result after concatenating three arrays: " + array1.concat(array2, array3));