function handleForm(event) {
    event = event || window.event;
    event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const websiteInput = document.getElementById('websiteInput');
    const messageInput = document.getElementById('messageInput');

    const nameErr = document.getElementById('nameErr')
    const emailErr = document.getElementById('emailErr')
    const websiteErr = document.getElementById('websiteErr')
    const messageErr = document.getElementById('messageErr')

    if(nameInput.value=="") {
        nameErr.innerText = "This field is required";
        nameInput.classList.add('error-field');
    } else {
        nameErr.innerText = "";
        nameInput.classList.remove('error-field');
    }

    if(emailInput.value=="") {
        emailErr.innerText = "A valid email is required";
        emailInput.classList.add('error-field');
    } else {
        emailErr.innerText = "";
        emailInput.classList.remove('error-field');
    }

    if(websiteInput.value=="") {
        websiteErr.innerText = "A valid url is required";
        websiteInput.classList.add('error-field');
        
    } else {
        websiteErr.innerText = "";
        websiteInput.classList.remove('error-field');
    }

    if(messageInput.value=="") {
        messageErr.innerText = "A valid message is required";
        messageInput.classList.add('error-field');
    } else {
        messageErr.innerText = "";
        messageInput.classList.remove('error-field');
    }
}