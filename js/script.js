
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

    if (!media1024px.matches){
        document.getElementById("sign_in").textContent = "Sign in / sign up"
    }
    else{
        document.getElementById("sign_in").textContent = "Sign in"
    }
}

//media queries variables
let media1024px = window.matchMedia("(min-width: 1024px)");
changeSignInButton();
toggleExtend()
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


//resize event
window.addEventListener('resize', function() {
    // update box pos when resize window
    closeAllPopups();
    //extend or reduce elements when resize window
    toggleExtend();
});

function toggleExtend(){
    let containers = document.querySelectorAll('.popup_box, .app_bar, .today_box, .nav_obj, .nav_bar, #header_logo, .button,.buttons_box .button#subscribe,.subscribe_box,.hidden_box, .head_banner, .buttons_box, main');
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


