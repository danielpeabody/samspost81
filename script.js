// Navigation

let navButton = document.querySelector(".navbar__mobilenav");


navButton.addEventListener('mouseover',()=> {
    navButton.style.cursor = "pointer";
})

navButton.addEventListener('click',()=> {
    let nav_items = document.querySelectorAll(".navbar__listitem");
    nav_items.forEach((item)=>{
        item.classList.toggle("hide");
    })
})