// Task-1
// Take four parameters. Multiply the four numbers and then return the result

// function Multiply(num1,num2,num3,num4){
//     let result = num1*num2*num3*num4;
//     return result;
// }
// console.log(Multiply(4,5,6,7))

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// function evenOdd(number){
    
//     if(number%2===0){
//         let output = number/2
//         return output
//     }
//     else{
//         output = number*2
//         return output;
//     }
    
// }
// console.log(evenOdd(5))

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(numbers){
//     let store = 0;
//     for(i of numbers){
//         store = store + i
        
//     }
//     return store/numbers.length;
// }
// console.log(make_avg([4,5,6]))

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binary){
//     let count = 0;
//     for(i of binary){
//         if(i==='0'){
//             count++;
//         }
//     }
//     return count
// }
// console.log(count_zero("101001"));

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if (number%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(odd_even(8));
console.log(odd_even(7));