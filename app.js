var typed = new Typed(".auto-type", {
  strings: [
    "CSE Student",
    "Problem Solver",
    "UI Designer",
    "Programmer",
    "Fullstack Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let menuicon = document.querySelector("#menuicon");
let navlist = document.querySelector(".navlist");

menuicon.addEventListener("click", () => {
  navlist.classList.toggle("hide");
});
