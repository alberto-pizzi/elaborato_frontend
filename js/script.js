
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


//hide and show search bar
function toggleSearchBar(){
    let searchBox = document.getElementById("search_box")
    let searchButton = document.getElementById("search_button")
    let leftPos = searchButton.getBoundingClientRect().left
    if (searchBox.style.display === "none"){

        searchBox.style.display = "block"

        if (!media1024px.matches) {
            searchBox.style.left = leftPos + "px"
        }
        else{
            searchBox.style.left = "0px"
        }

        searchButton.ariaExpanded = "true"

    } else{
        searchBox.style.display = "none"
        searchButton.ariaExpanded = "false"
    }
}




