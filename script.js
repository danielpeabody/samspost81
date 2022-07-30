


let hamburger = document.querySelector(".fa-solid");
let navmenu = document.querySelector(".navbar__links");
let navcontainer = document.querySelector(".navbar__container");
let navbar = document.querySelector(".navbar");

let screenwith = window.matchMedia("(min-width: 900px)");


hamburger.addEventListener("mouseover",()=>{
    hamburger.style.cursor = "pointer";
})

hamburger.addEventListener("click",()=>{
    navmenu.classList.toggle("hide");
})

if(screenwith.matches){
    navmenu.classList.remove("hide");
    navcontainer.appendChild(navmenu);
}
else {
    navmenu.classList.add("hide");
    navcontainer.removeChild(navmenu);
    navbar.appendChild(navmenu);
}

window.addEventListener("resize",()=>{
    if(screenwith.matches){
        navmenu.classList.remove("hide");
        navcontainer.appendChild(navmenu);
    }
    else {
        navmenu.classList.add("hide");
        navcontainer.removeChild(navmenu);
        navbar.appendChild(navmenu);
    }
})
