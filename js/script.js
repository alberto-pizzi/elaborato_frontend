
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

document.getElementById("todays-date").textContent = getTodaysDate();

//interactive changes with media queries
function changeSignInButton(){

    if (!media1024px.matches){
        document.getElementById("sign-in").textContent = "Sign in / sign up"
    }
    else{
        document.getElementById("sign-in").textContent = "Sign in"
    }
}

//media queries variables
let media1024px = window.matchMedia("(min-width: 1024px)");
changeSignInButton();
closeAllPopups();
toggleExtend();
media1024px.addEventListener("change",changeSignInButton);


//hide and show search bar

function updateBoxLeftPos(container, key) {
    let leftPos = key.getBoundingClientRect().left;
    if (media1024px.matches) {
        container.style.left = leftPos + "px";
    } else {
        container.style.left = "0px";
    }
}


function closeAllPopups(){
    let popupMenus = document.querySelectorAll('.popup-box[id]');
    popupMenus.forEach(function(menu) {
            menu.style.display = "none";
            menu.ariaExpanded = "false";
    });
}

function toggleBox(box, button, display){
    let container = document.querySelector('.popup-box' + '#' + box);
    let key = document.getElementById(button);
    let navBar = document.querySelector('.app-bar');
    let menuIcon = document.getElementById('menu-icon');

    let popupMenus = document.querySelectorAll('.popup-box[id]');
    popupMenus.forEach(function(menu) {
        if (menu !== container) {
            menu.style.display = "none";
            menu.ariaExpanded = "false";
            if (box === "menu") {
                menuIcon.classList.replace("fa-times", "fa-bars")
            }
        }
    });

    if (container.style.display === "none"){
        container.style.display = display;
        updateBoxLeftPos(container,key);
        container.ariaExpanded = "true";
        if (box === "menu") {
            menuIcon.classList.replace("fa-bars", "fa-times")
        }

    } else{
        container.style.display = "none";
        container.ariaExpanded = "false";
        if (box === "menu") {
            menuIcon.classList.replace("fa-times", "fa-bars")
        }
    }
}


//resize event
window.addEventListener('resize', function() {
    // update box pos when resize window
    closeAllPopups();
    //extend or reduce elements when resize window
    toggleExtend();
});

function toggleExtend(){
    let containers = document.querySelectorAll('.popup-box, .app-bar, .today-box, .nav-obj, .nav-bar, #header-logo, .button,.buttons-box .button#subscribe,.subscribe-box,.hidden-box, .head-banner, .buttons-box, main');
    const extClassName = "extended";

    if (media1024px.matches) {
        containers.forEach(function (element) {

            if (window.scrollY < 100) {
                element.classList.add(extClassName);
            }
            else{
                element.classList.remove(extClassName);
            }
        });
    }
    else{
        containers.forEach(function (element) {
            element.classList.remove(extClassName);
        });
    }
}


//scroll event
window.addEventListener('scroll', function() {
    //resize navbar when scrolling
    toggleExtend();
});


