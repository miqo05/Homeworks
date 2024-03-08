/* Exercise 1 */
// Given a number. 
// Write a recursive function that reverse the number. 
// Return the new number.

function revNum(num){
	if(num < 10){
		return num;
	} 
	
	let strNum = String(num);
	let str = '';
	return Number(str += strNum[strNum.length - 1] + revNum(strNum.slice(0, strNum.length - 1)));
};

console.log(revNum(123));

/* Exercise 2 */
// Given a number and an array. 
// Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two. (recursive)

function numSecondIndexInArray(array, num, checkArr = [], firstIndex){
	checkArr.push(array[0]); 

	if(array[0] === num && firstIndex === undefined){
		firstIndex = checkArr.length - 1;
	} else if(array[0] === num && firstIndex !== undefined){
		return checkArr.length - 1;
	}

	array.shift();
	return numSecondIndexInArray(array, num, checkArr, firstIndex);
}

console.log(numSecondIndexInArray([0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6], 5));

/* Exercise 3 */
// Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use 
// str.substring(startIndex, endIndex),str.substr(startIndex,length))(recursive)

function subCount(str, sub, count = 0){
	let strRes = str.substring(0, sub.length);
	
	if(str.length === 0){
		return count;
	}

	if(strRes === sub){
		str = str.slice(1);
		return subCount(str, sub, count + 1);
	}

	str = str.slice(1);
	return subCount(str, sub, count);
}

console.log(subCount('Are var far shared?', 'ar'));

/* Exercise 4 */
// Given a string, compute recursively (no loops) 
// a new string where all appearances of 'pi'
// have been replaced by '3.14'

function myReplaceAll(str, replacer, finallyStr = ''){
	if(str.length === 0) return finallyStr;

	if(str[0] === 'P' || str[0] === 'p' && str[1] === 'i'){
		finallyStr += replacer;
		str = str.slice(2);
		return myReplaceAll(str, replacer, finallyStr);
	}

	finallyStr += str[0];
	str = str.slice(1);
	return myReplaceAll(str, replacer, finallyStr);
}

console.log(myReplaceAll('picturespicturespictures', '3.14'));

/* Exercise 5 */
// Given an array of nested arrays. 
// Write a recursive function that flattens it. 
// (Hint create the function that concats arrays).


function arrayFlatten(array){

}

console.log(arrayFlatten([14, [1, [[[3, []]], 1], 0]]));

/* Exercise 6 */
// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result. (recursive)

function digitSum(num){
	let res = [...String(num)].reduce(function(aggr, item){
		return aggr + Number(item)
	}, 0)

	return (res > 9) ? digitSum(res) : res;
}

console.log(digitSum(999999999999));