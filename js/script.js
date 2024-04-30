
//take and return today's data
function getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let numDay = today.getDay()

    return daysInWeek[numDay] + ", " + months[month] + ' ' + day + ', ' + year;
}

document.getElementById("todays_date").textContent = getTodaysDate();

//interactive changes with media queries
function changeSignInButton(){

    if (media1024px.matches){
        document.getElementById("sign_in").textContent = "Sign in / sign up"
    }
    else{
        document.getElementById("sign_in").textContent = "Sign in"
    }
}

let media1024px = window.matchMedia("(max-width: 1024px)");
changeSignInButton();
media1024px.addEventListener("change",changeSignInButton);





