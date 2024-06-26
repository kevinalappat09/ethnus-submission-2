function sortString(str) {
    return str.split('').sort().join('');
}

let input = prompt("Enter a string");
let result = sortString(input);
alert("Alphabetically sorted : "+result);