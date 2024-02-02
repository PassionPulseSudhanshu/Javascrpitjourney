/*sample function
function sample(){
console.log("in sample function")
}
console.log("in glosbal scope")
sample()
sample()
sample()
console.log("Back global scope")


//function without return vALUE Without parameter
function add(){
    var a=10
    var b=20
    var sum =a+b
    console.log(`sum=${sum}`)
}
function sample(){
    add()
}
sample()
add()

//function with return value without parameter
function add(){
    var a=10
    var b=20
    var sum=a+b
    return sum
}
function sample(){
    var s=add()
    console.log(`sum ..=${s}`)
}
sample()
*/

/*var x = prompt("Enter a string");
document.write("Length of the string: " + x.length + "<br>");

function vowelfinder(str) {
    document.write("Vowels in the string: ");
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i].toLowerCase(); // Convert the current character to lowercase for case-insensitive comparison
        if (currentChar === "a" || currentChar === "e" || currentChar === "i" || currentChar === "o" || currentChar === "u") {
            document.write(currentChar + " ");
        }
    }
}

vowelfinder(x);

//prime or not
var num=parseInt(prompt("enter number"))
function checkprime(num){
    let i=2;
    while(i<=i){
        if(num%i===0){
            document.write("no is not prime")
            break
        
        }
        i++
        if(num%i===1){
            document.write("no is prime")
            break
        

        }
       
        }
    }



checkprime(num)

reverse function
var num = Number(prompt("Enter a number"));

var rev_num = 0;

function reverseAndGet(num) {
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
       num = Math.floor(num / 10);
    
    }
    return rev_num;
}

var result = reverseAndGet(num);
document.write(result);



var num = Number(prompt("Enter a number"));
var sum = 0;

function check_neon(num) {
    var sr = num * num;
    var srString = sr.toString();  // Convert the square to a string

    for (var i = 0; i < srString.length; i++) {
        var digit = parseInt(srString[i]);  // Convert each character back to an integer
        sum += digit;
    }

    if (sum === num) {
        document.write("The number is neon.");
    } else {
        document.write("The number is not neon.");
    }
}

check_neon(num);
*/






/*var num=prompt("enter number:")

var digit=0;
var evencount=0;
var oddcount=0;
function count_evenodd(num){
    for(let i=0; i<=num.length; i++){
        digit=parseInt(num[i]);
        if(digit%2===0){
            evencount++
        }
        else{
            oddcount++
        }
    }
    return { evencount: evencount, oddcount: oddcount };
}

var result = count_evenodd(num);
document.write("Even Count: " + result.evencount + "<br>");
document.write("Odd Count: " + result.oddcount);
*/

//Armstrong number
//For example, let's take the number 153:

//The number of digits is 3.
//The sum of each digit raised to the power of 3 is: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.
//Since the sum is equal to the original number, 153 is an Armstrong number.

/*var num=prompt("enter number:")
var dig_len=num.length;
var sum=0;
function isArmstrong(num){
    while(num>0){
        for(let i=0;i<=digit;i++){
            var digit=parseInt(num[i]);
            var x=digit.pow(dig_len)
            sum+=x
        }
        if(sum===num){
            document.write("no is armstrong")
        }
        else{
            document.write("no is not armstrong")
        }
    }
}
var result=isArmstrong(num)
document.write(result)
*/

/*var num = prompt("Enter number:");
var dig_len = num.length;
var sum = 0;

function isArmstrong(num) {
    for (let i = 0; i < dig_len; i++) {
        var digit = parseInt(num[i]);
        var x = Math.pow(digit, dig_len);
        sum += x;
    }
    document.write(sum);
    if (sum==num) {
        return "Number is Armstrong.";
    } else {
        return "Number is not Armstrong.";
    }
}

var result = isArmstrong(num);
document.write(result);
*/

var num = prompt("Enter a number:");
var rev_num = 0;

function isPalindrome(num) {
    var originalNum = num;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    if (rev_num === originalNum) {
        return "Number is Palindrome.";
    } else {
        return "Number is not palindrome.";
    }
}

var result = isPalindrome(parseInt(num));
document.write(result);




