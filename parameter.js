// 3 --> 3*3 = 9
// 4 --> 4*4 = 16
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function square(number){
    console.log("value of the number parameter", number)
    console.log("square of the given number is: "+number*number)
}

square(5);


// sum function

function sum(num1, num2){
    let total = num1 + num2;
    console.log("the sum of the num1= "+num1+ ' and num2= '+num2+ " are:" , total)
}
sum(2,6);