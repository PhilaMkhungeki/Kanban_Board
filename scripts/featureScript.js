//hide side bar
const hide_sidebar = document.getElementById("hide-sideBar");
const sidebar = document.getElementById("side-bar-div");
const show_sidebar = document.getElementById("show-sidebar");

hide_sidebar.addEventListener('click', () => {
    sidebar.style.display = 'none';
    show_sidebar.style.display = 'block';
});

show_sidebar.addEventListener('click', () => {
    sidebar.style.display = 'block';
    show_sidebar.style.display = 'none';
});

//Mobile menu toogle feature
const mobileMenu = document.querySelector(".logo-mobile");
const mobile_menu_feature = document.querySelector(".menu-hidden");
const closeMenu = document.querySelector(".close-btn")
const menu = document.querySelector(".mobile-menu");
const mobilebBackdrop = document.getElementById("mobileMenu-modal-backdrop");

mobileMenu.addEventListener('click', () => {
    mobile_menu_feature.style.display = 'block';
    mobilebBackdrop.style.display = "block";
});

closeMenu.addEventListener('click', () => {
    mobile_menu_feature.style.display = 'none';
    mobilebBackdrop.style.display = "none";
});

const mobileThemeToogle = document.getElementById("mobileThemeToogle");
const mobileTheme = document.getElementById("mobileTheme");

mobileThemeToogle.addEventListener('change', () => {
    if(mobileThemeToogle.checked) {
        document.body.style.backgroundColor = "#000112";
        sideBarBackground.style.backgroundColor = "#20212C";
        headerBackground.style.backgroundColor = "#20212C";
        headerBackground.style.color = "#ffffff";
        menu.style.backgroundColor =  "#20212C";
        mobileTheme.style.backgroundColor = "#635fc7";
        document.body.classList.toggle("dark-mode", themeToogle.checked);
    } else {
        headerBackground.style.backgroundColor = "#ffffff";
        headerBackground.style.color = "#000000";
        mobileTheme.style.backgroundColor = "#f4f7fd";
        menu.style.backgroundColor =  "#ffffff";
        document.body.style.backgroundColor = "#f4f7fd";
        document.body.classList.toggle("light-mode");
    }
    
});

//Light and dark mode toogle feature
const lightModeLogo = document.getElementById("logo");
const hideSidebar = document.querySelector(".hide-sidebar");
const sideBarBackground = document.querySelector(".side-bar");
const headerBackground = document.querySelector(".sticky-header");
const theme = document.getElementById("theme");
const themeToogle = document.getElementById("themeToogle");

themeToogle.addEventListener('change', () => {
    if(themeToogle.checked) {
        document.body.style.backgroundColor = "#000112";
        hideSidebar.style.backgroundColor = "#635fc7";
        lightModeLogo.src = "./assets/logo-dark.svg";
        hideSidebar.style.color = "#ffffff";
        sideBarBackground.style.backgroundColor = "#20212C";
        headerBackground.style.backgroundColor = "#20212C";
        headerBackground.style.color = "#ffffff";
        theme.style.backgroundColor = "#635fc7";
        menu.style.backgroundColor =  "#20212C";
        document.body.classList.toggle("dark-mode", themeToogle.checked);
    } else {
        hideSidebar.style.backgroundColor = "#f4f7fd";
        hideSidebar.style.color = "#605f69ff";
        lightModeLogo.src = "./assets/logo-light.svg";
        sideBarBackground.style.backgroundColor = "#ffffff";
        headerBackground.style.backgroundColor = "#ffffff";
        headerBackground.style.color = "#000000";
        theme.style.backgroundColor = "#f4f7fd";
        menu.style.backgroundColor =  "#ffffff";
        document.body.style.backgroundColor = "#f4f7fd";
        document.body.classList.toggle("light-mode");
    }
    
});

