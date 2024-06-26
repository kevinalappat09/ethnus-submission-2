function handleSubmit(event) {
    event = event || window.event;
    event.preventDefault();

    const userInput = document.getElementById('userInput');
    const passInput = document.getElementById('passInput');

    if(userInput.value == "") {
        userInput.classList.add("err");
        const icon = userInput.parentElement.firstChild.nextSibling;
        icon.classList.add("err-icon");
    } else {
        userInput.classList.remove("err");
        const icon = userInput.parentElement.firstChild.nextSibling;
        icon.classList.remove("err-icon");
    }

    if(passInput.value == "") {
        passInput.classList.add("err");
        const icon = passInput.parentElement.firstChild.nextSibling;
        icon.classList.add("err-icon");
    } else {
        passInput.classList.remove("err");
        const icon = passInput.parentElement.firstChild.nextSibling;
        icon.classList.remove("err-icon");
    }
}