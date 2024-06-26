function reverseInt(n) {
    let digit, result = 0;
    while(n) {
        digit = n%10;
        n = n/10|0;
        result = (result*10) + digit;
    }
    return result;
}

let a = prompt("Enter a number");
let result = reverseInt(a);
alert("The reversed number is : "+result);