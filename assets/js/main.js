const ids = {
    navbar: "LWCp",
    nav_sections: {
        "home": "ZQJw",             // Home
        "about": "bIdh",            // About
        "qualifications": "ably",   // Projects
        // "contact": "6c6f",     // Contact
    },
    scroll: "8f78",
}

function selectDeselectNavBar(id) {
    if(id == null) {
        id = ids.nav_sections.home;
    }
    Object.values(ids.nav_sections).forEach(e => {
        var htmlElem = document.getElementById(e);
        if(htmlElem){
            if (e == id) {
                htmlElem.classList.add("navbar-a-active");
                htmlElem.classList.remove("navbar-a");
            }
            else {
                htmlElem.classList.remove("navbar-a-active");
                htmlElem.classList.add("navbar-a");
            }
        }
    });
}