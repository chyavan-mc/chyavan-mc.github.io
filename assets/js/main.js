const ids = {
    navbar: "LWCp",
    nav_sections: {
        "home": "ZQJw",             // Home
        "about": "bIdh",            // About
        "qualifications": "ably",   // Projects
        // "contact": "6c6f",     // Contact
    },
    scroll: "8f78",
    qualifications: {
        "5nIr": "I1bI",
        "2dO1": "INmn"
    }
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

function selectDeselectQualification(id) {
    Object.keys(ids.qualifications).forEach(e => {
        var htmlElem = document.getElementById(ids.qualifications[e]);
        if(htmlElem){
            if (e == id) {
                htmlElem.classList.remove("d-none");
            }
            else {
                htmlElem.classList.remove("d-none");
                htmlElem.classList.add("d-none");
            }
        }

        var htmlElem = document.getElementById(e);
        if(htmlElem){
            if (e == id) {
                htmlElem.classList.remove("single-tab-inactive");
                htmlElem.classList.add("single-tab-active");
            }
            else {
                htmlElem.classList.remove("single-tab-active");
                htmlElem.classList.add("single-tab-inactive");
            }
        }
    });
}