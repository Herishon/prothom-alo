// Mobile Menu
const openMenu = document.getElementById("open-btn");
const closeMenu = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");


openMenu.addEventListener("click", function () {
    mobileMenu.style.marginLeft = "0"; 
});

closeMenu.addEventListener("click", function () {
    mobileMenu.style.marginLeft = "-30rem";
});

// Modal
document.ready($('#initText').modal());