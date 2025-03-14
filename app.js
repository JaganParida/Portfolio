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

/*Preview*/
let previewContainer = document.querySelector(".projects-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll("#project-list .projects").forEach((projects) => {
  projects.onclick = () => {
    previewContainer.style.display = "flex";
    let name = projects.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-xmark").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});
