/**
 * 
 * 
 * 
 * function name -sayHI
 * parameters: nameStr - String
 * 
 * 
 * 
 * return string
 * 
 * 
 * concatenation
 * Interpolation
 */

// function sayHI(name){
//     let newStr = `Hi,${name}`;
//     return newStr;
// }

// console.log(sayHI("RAY"))
// console.log(sayHI("Lucas"))

/**
 * 
 * function name - bigString
 * 
 * parameters: string length (str1,str2)
 * 
 * returns string which string is bigger. or if strings are equal in length
 * equal dont return, console.log("equal")
 * if str1 is bigger that str2 -return str1
 * if str2 is bigger than str1 - return str2
 * 
 */
// function bigString(str1,str2){
//     if(str1.length > str2.length){
//         return str1;
//     }else if(str2.length > str1.length){
//         return str2;
//     }else (str1.length === str2.length);{
//         console.log(`${str1} length is equal to ${str2}`);
//         return;
//     }
// }

// console.log(bigString("hello", "hi"));
// console.log(bigString("taco", "tuesday"));
// console.log(bigString("dog", "cat"));

/**
 * 
 * function name - bigNumer
 * 
 * parameters: Number (Num1,Num2)
 * 
 * returns string which Number is bigger. or if Numbers are equal in length
 * equal dont return, console.log("equal")
 * if Num1 is bigger that Num2 -return Num1
 * if Num2 is bigger than Num1 - return Num2
 * 
 */

// function bigNumber(Num1,Num2){
//     if(Num1 > Num2){
//         return Num1;
//     }else if(Num2 > Num1){
//         return Num2
//     }else (Num1 === Num2);{
//         console.log(`${Num1} length is equal to ${Num2}`);
//         return;
//     }
// }

// console.log(bigNumber(5,2));
// console.log(bigNumber(1,10));
// console.log(bigNumber(100,100));
    

/**
 * 
 *  function name - fiveMore
 * 
 * parameters [Array of numbers]
 * 
 * takes in an array of numbers and adds 5 to each odd number
 *  then returns the updated array.
 * nums array.length
 * [1,2,3,4,5,6] = [1+5,3+5,5+5]
 * 
 * returns updated array
 *
 */

// function fiveMore (numsArray){

//     for(let i = 0; i < numsArray.length; i++){
//         if (numsArray[i] % 2 !== 0)
//     numsArray[i] += 5;  
//      }
    
//      return numsArray;
// }


// console.log(fiveMore([1,2,3,4]))
// console.log(fiveMore([1,3,5,7]))
// console.log(fiveMore([2,222,2222]))

/**
 * function name - arraySummer
 * 
 * parameters [Array of numbers] 
 * 
 * hat takes in an array of numbers and adds 
 * each number in the array together.
 * [1+2+3+4] = return
 * 
 *
 */

// function arraySummer(nums1Array){
//     let sum = 0
//     for(let i = 0; i < nums1Array.length; i++)
// {
//     sum += nums1Array[i]
// }
//     return sum;
// }
// console.log(arraySummer([1,2,3,4]))

/**
 *function name - everyDivisible
 parameter : n - number less than 10


 for loop 0 - 100 (I = n;  n >= 100; n++)
 if(number % n === 0){
    console.log(number)
 }

 */

 function everyDivisible(n){

    if(n < 10){

for(let number = 1;  number <= 100; number++){
    if(number % n === 0){
        console.log(number)
    }

}

 }
 }
 everyDivisible(9)
 