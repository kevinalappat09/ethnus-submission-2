function handleForm(event) {
    event = event || window.event;
    event.preventDefault();

    console.log("Hello")

    const fnameInput = document.getElementById('fnameInput');
    const lnameInput = document.getElementById('lnameInput');
    const emailInput = document.getElementById('emailInput');
    const pwdInput = document.getElementById('pwdInput');
    const rePwdInput = document.getElementById('rePwdInput');
    const ageInput = document.getElementById('ageInput');
    const phoneInput =document.getElementById('phoneInput');
    const addressInput  = document.getElementById('addressInput');

    const fnameErr = document.getElementById('fnameErr');
    const lnameErr = document.getElementById('lnameErr');
    const emailErr = document.getElementById('emailErr');
    const pwdErr = document.getElementById('pwdErr');
    const rePwdErr = document.getElementById('rePwdErr');
    const ageErr = document.getElementById('ageErr');
    const phoneErr =document.getElementById('phoneErr');
    const addressErr = document.getElementById('addressErr');


    if(fnameInput.value.length<3) {
        fnameErr.innerText = "POOR";
        fnameInput.classList.add("form-err");
    } else {
        fnameErr.innerText = "";
        fnameInput.classList.remove("form-err");
    }

    if(lnameInput.value.length<3) {
        lnameErr.innerText = "POOR";
        lnameInput.classList.add("form-err");
    } else {
        lnameErr.innerText = "";
        lnameInput.classList.remove("form-err");
    }

    if(emailInput.value.length < 3) {
        emailErr.innerText = "POOR";
        emailInput.classList.add("form-err");
    } else {
        emailErr.innerText = "";
        emailInput.classList.remove("form-err");
    }

    if(pwdInput.value.length < 3) {
        pwdErr.innerText = "POOR";
        pwdInput.classList.add("form-err");
    } else {
        pwdErr.innerText = "";
        pwdInput.classList.remove("form-err");
    }

    
    if(rePwdInput.value !== pwdInput.value || rePwdInput.value.length<3) {
        rePwdErr.innerHTML = "Passwords do not match";
        rePwdInput.classList.add("form-err");
    } else {
        rePwdErr.innerText = "";
        rePwdInput.classList.remove("form-err");
    }   

    if(ageInput.value < 18) {
        ageErr.innerText = "Age must be 18";
        ageInput.classList.add("form-err");
    } else {
        ageErr.innerText = "";
        ageInput.classList.remove("form-err");
    }

    if(phoneInput.value == "") {
        phoneErr.innerText = "POOR";
        phoneInput.classList.add("form-err");
    } else {
        phoneErr.innerText = "";
        phoneInput.classList.remove("form-item");
    }   

    if(addressInput.value == "") {
        addressErr.innerText = "POOR"
        addressInput.classList.add('form-err');
    } else {
        addressErr.innerText = "";
        addressInput.classList.remove("form-err");
    }
}