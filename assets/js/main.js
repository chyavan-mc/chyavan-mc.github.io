const ids = {
    navbar: "LWCp",
    nav_sections: {
        "home": "ZQJw",             // Home
        "about": "bIdh",            // About
        "skills": "X2dm",           // Skills
        "projects": "N2nK",         // Projects
        "fun-stuff": "igN5",         // Pet Projects
        "background": "ably",       // Qualifications
        // "contact": "6c6f",     // Contact
    },
    scroll: "8f78",
    pet_projects: {
        "DWMl" : "https://chyavan-mc.github.io/Creative-Coding/6_Raytracing.html",           // Ray Tracing
        "0VNu" : "https://chyavan-mc.github.io/Creative-Coding/14_life.html",                // Game of Life
        "0IhW" : "https://chyavan-mc.github.io/Creative-Coding/linedance.html",              // Line Dance - Attractors
        "naLb" : "https://chyavan-mc.github.io/Creative-Coding/4_LineartExtended.html",      // Line Art
        "m87K" : "https://chyavan-mc.github.io/Creative-Coding/sinCircle.html",              // Sine Circle
        "ol5f" : "https://chyavan-mc.github.io/Creative-Coding/particles.html",              // Particles
        "MkPr" : "https://chyavan-mc.github.io/Creative-Coding/squares.html",                // Square Waves
        "Wqxe" : "https://chyavan-mc.github.io/Creative-Coding/13_cubes.html",               // Cubes
        "B80J" : "https://chyavan-mc.github.io/Creative-Coding/3_Rain.html",                 // Rain
        "rSyP" : "https://chyavan-mc.github.io/Creative-Coding/11_Starfield.html",           // Warp Drive
        "jaRI" : "https://chyavan-mc.github.io/Creative-Coding/5_Moon.html",                 // Moon
        "rFtH" : "https://chyavan-mc.github.io/Creative-Coding/15_fireworks.html",           // Fireworks
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

function fitToContainer(iframe){
    iframe.style.width ='100%';
    iframe.style.height='100%';
    iframe.width  = iframe.offsetWidth;
    iframe.height = 0.98*iframe.offsetHeight;
}
let iframe = document.getElementById("26ah");
fitToContainer(iframe);
iframe.src = Object.values(ids.pet_projects)[0];

function selectDeselectJavaScript(id) {
    if(id == null) {
        id = Object.keys(ids.pet_projects)[0];
    }
    Object.keys(ids.pet_projects).forEach(e => {
        var htmlElem = document.getElementById(e);
        if(htmlElem){
            if (e == id) {
                htmlElem.classList.add("btn-active");
                htmlElem.classList.remove("btn-inactive");
            }
            else {
                htmlElem.classList.remove("btn-active");
                htmlElem.classList.add("btn-inactive");
            }
        }
    });
    iframe.src = ids.pet_projects[id];
}

window.onscroll = function() {
    top_bottom = Object.keys(ids.nav_sections).map(e => {
        const rect = document.getElementById(e).getBoundingClientRect();
        return [rect.top, rect.bottom];
    });
    mid_idx = top_bottom.findIndex(x => x[0] > 0);
    if (mid_idx == 0) {
        selectDeselectNavBar(Object.values(ids.nav_sections)[0]);
    }
    else {
        if (top_bottom[mid_idx-1][1] > (window.innerHeight || document.documentElement.clientHeight)/2) {
            selectDeselectNavBar(Object.values(ids.nav_sections)[mid_idx-1]);
        }
        else {
            selectDeselectNavBar(Object.values(ids.nav_sections)[mid_idx]);
        }
    }
};