function getCurrentDate() {
    const result = document.getElementById('CurrentDateId');
    const dateObj = new Date;
    const date = dateObj.getDate();
    const month = dateObj.getMonth();
    const months = ["January","February", "March","April","May","June","July","August","September","October","November","December"];
    const year = dateObj.getFullYear();
    result.innerText = `${date}/${months[month]}/${year}`;
}

function getFullDate() {
    const result = document.getElementById("FullDateId");
    const dateObj = new Date;
    const date = dateObj.toUTCString()
    result.innerText = date;
}