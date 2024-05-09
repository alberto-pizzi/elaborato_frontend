
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

function updateBoxLeftPos(container, key) {
    let leftPos = key.getBoundingClientRect().left;
    if (!media1024px.matches) {
        container.style.left = leftPos + "px";
    } else {
        container.style.left = "0px";
    }
}


function closeAllPopups(){
    let popupMenus = document.querySelectorAll('.popup_box[id]');
    popupMenus.forEach(function(menu) {
            menu.style.display = "none";
    });
}

function toggleBox(box, button, display){
    let container = document.querySelector('.popup_box' + '#' + box);
    let key = document.getElementById(button);
    let navBar = document.querySelector('.app_bar');

    let popupMenus = document.querySelectorAll('.popup_box[id]');
    popupMenus.forEach(function(menu) {
        if (menu !== container) {
            menu.style.display = "none";
        }
    });

    if (container.style.display === "none"){
        container.style.display = display;
        updateBoxLeftPos(container,key);

    } else{
        container.style.display = "none";
    }
}


// update box pos when resize window
window.addEventListener('resize', function() {
    let searchBox = document.querySelector('.popup_box#search_box');
    let searchButton = document.getElementById('search_button');
    closeAllPopups();
});


//resize navbar when scrolling
window.addEventListener('scroll', function() {
    let containers = document.querySelectorAll('.popup_box, .app_bar, .today_box, .nav_obj, .nav_bar, #header_logo, .button,.buttons_box .button#subscribe,.subscribe_box,.hidden_box, .head_banner, .buttons_box, main');

    containers.forEach(function (element) {
        element.classList.toggle("reduced", window.scrollY > 100);
    });
});


