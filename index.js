
const printString = (string) => {

    console.log(string[0]); //prints first character of string
    if(string.length > 1){
        let subString = string.substring(1, string.length);
        printString(subString);
    }
    else{
        return true;
    }
}

const reverseString = (string) => {

    if(string.length<2){
        return string;
    }
    else{
        return reverseString(string.substring(1)) + string[0];
    }
}

const isPalindrome = (string) => {

    if (string.length < 2){
        return true;
    }
    else if (string[0]===string[-1]){
        isPalindrome(string.substring(1, string.length - 1));
    }
    else {
        return false;
    }
}

const addUpTo = (array, index) => {
    console.log(array[0]);
    return !index?  array[index] : addUpTo(array.slice(1), index-1) + array[0]; 
}

const maxOf = (array) => {

    if(array.length === 1){
        return array[0];
    }
    else{
        return Math.max(array.pop(), maxOf(array))
    }
}

const includesNumber = (array, targetNum) => {

    if(!array.length){
        return false;
    }
    else if(array[0] === targetNum){
        return true;
    }
    else{
        includesNumber(array.slice(1), targetNum)
    }
}