function multiply() {
    const inp1 = document.getElementById('input1');
    const inp2 = document.getElementById('input2');

    const result = inp1.value * inp2.value;
    const display = document.getElementById('result');
    display.innerText = "The result of multiplication is  : " +result;
}

function divide() {
    const inp1 = document.getElementById('input1');
    const inp2 = document.getElementById('input2');
    const display = document.getElementById('result');
    
    if (inp2.value == 0) {
        display.innerText = "Divide by zero is not allowed";
        return;  
    }
    
    const result = inp1.value / inp2.value;
    display.innerText = "The result of multiplication is  : " +result;
}