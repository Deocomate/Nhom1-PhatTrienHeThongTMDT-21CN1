$(document).ready(async function () {
    let navItemList = document.querySelectorAll(".nav-control")
    navItemList.forEach(nav => {
        if (window.location.href === nav.getAttribute("href")) {
            console.log("Is active")
            nav.classList.add("active")
            nav.closest(".collapse").classList.add("show")
            let menuItem = nav.closest(".menu-item-control")
            menuItem.querySelector(".nav-link-control").classList.add("active")
        }
    })
});
