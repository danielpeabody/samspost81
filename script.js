// navigation
let hamburger = document.querySelector(".fa-solid");
let navmenu = document.querySelector(".navbar__links");
let navcontainer = document.querySelector(".navbar__container");
let navbar = document.querySelector(".navbar");

let screenwith = window.matchMedia("(min-width: 900px)");

hamburger.addEventListener("mouseover", () => {
  hamburger.style.cursor = "pointer";
});

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("hide");
});

if (!screenwith.matches) {
  navmenu.addEventListener("click", () => {
    navmenu.classList.toggle("hide");
  });
}

if (screenwith.matches) {
  navmenu.classList.remove("hide");
  navcontainer.appendChild(navmenu);
}

window.addEventListener("resize", () => {
  if (screenwith.matches) {
    navmenu.classList.remove("hide");
    navcontainer.appendChild(navmenu);
  } else {
    navmenu.classList.add("hide");
    navbar.appendChild(navmenu);
  }
});

// hq

// variable set
let hqCards = document.querySelectorAll(".hq__wrapper");
let hqCardsArr = Array.prototype.slice.call(hqCards);
let next = document.querySelectorAll(".next");
let back = document.querySelectorAll(".back");
let nextArr = Array.prototype.slice.call(next);
let backArr = Array.prototype.slice.call(back);

cardCount = 0;
// iterate on next button click
nextArr.forEach((element) => {
  element.addEventListener("click", () => {
    if (cardCount < 4) {
      let current = hqCardsArr[cardCount];
      cardCount += 1;
      let next = hqCardsArr[cardCount];
      current.classList.add("hidden");
      next.classList.remove("hidden");
    }
  });
});

// iterate on back button click
backArr.forEach((element) => {
  element.addEventListener("click", () => {
    if (cardCount > 0) {
      let current = hqCardsArr[cardCount];
      cardCount -= 1;
      let back = hqCardsArr[cardCount];
      current.classList.add("hidden");
      back.classList.remove("hidden");
    }
  });
});
