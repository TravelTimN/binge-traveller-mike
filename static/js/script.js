/* ----- jshint esversion: 11, jquery: true ----- */


/* ----- BOOTSTRAP COMPONENTS ----- */

// tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});


/* ----- PRELOADER ----- */

// remove preloader animation once page is fully loaded
$(document).ready(function() {
    $("body").addClass("page-load-complete");
});


/* ----- TO TOP BUTTON ----- */

// scroll to top button
let btnTop = document.getElementById("btn-top");
window.addEventListener("load", viewportMagic, true);
window.addEventListener("resize", viewportMagic, true);
window.addEventListener("scroll", viewportMagic, true);
function viewportMagic() {
    if (window.scrollY > 750) {
        btnTop.style.cssText = "bottom: 0.25em;";
    } else {
        btnTop.style.cssText = "bottom: -3em;";
    }
}


/* ----- NAVBAR LINKS ----- */

// update nav-links with 'active' state
let activeLink;
if (location.pathname.includes("/about/")) {
    activeLink = "about";
} else if (location.pathname.includes("/destinations/")) {
    activeLink = "destinations";
} else if (location.pathname.includes("/faqs/")) {
    activeLink = "faqs";
} else if (location.pathname.includes("/gallery/")) {
    activeLink = "gallery";
} else if (location.pathname.includes("/resources/")) {
    activeLink = "resources";
} else if (location.pathname.includes("/reviews/")) {
    activeLink = "reviews";
} else if (location.pathname.includes("/contact/")) {
    activeLink = "contact";
} else if (location.pathname.includes("/bookings/")) {
    activeLink = "bookings";
} else {
    activeLink = "home";
}
// apply classes and aria-current to relevant page link
$(`[id^="nav-link-${activeLink}"]`).removeClass("list-group-item-dark").addClass("active list-group-item-light").prop("aria-current", true);


/* ----- COPYRIGHT ----- */

// update copyright year
document.getElementById("year").innerText = new Date().getFullYear();


/* ----- ALERTS ----- */

// auto-hide alerts
const alerts = document.querySelectorAll("aside.alert");
let overlay = document.getElementById("overlay");
if (alerts.length > 0) {
    // only if any alerts found on DOM
    overlay?.classList.remove("hide");
    for (let i = 0; i < alerts.length; i++) {
        setTimeout(() => {
            // start after 2500ms
            setTimeout(() => {
                // slight delay between each alert
                alerts[i].classList.add("alert-slide");
                setTimeout(() => {
                    // remove from DOM entirely
                    alerts[i].style.display = "none";
                }, 1000);
            }, i * 100);
            // remove the overlay background
            setTimeout(() => {
                overlay?.classList.add("hide");
            }, 500);
        }, 2500);
    }
}


/* ----- CRUD Functionality ----- */

// disable first <option> in each <select> input
$("select").each(function() {
    $(this).children("option:first").prop("disabled", true);
});
