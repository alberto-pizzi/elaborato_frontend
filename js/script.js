
function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let numDay = today.getDay()

    return daysInWeek[numDay] + ", " + months[month] + ' ' + day + ', ' + year;
}

document.getElementById("todays_date").textContent = getTodaysDate();