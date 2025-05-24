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

/*menuicon */
function myFunction(x) {
  x.classList.toggle("change");
}
let menuicon = document.querySelector(".menuicon");
let navlist = document.querySelector(".navlist");

menuicon.addEventListener("click", () => {
  navlist.classList.toggle("hide");
});

const navItems = document.querySelectorAll(".navItem");

const mediaQuery = window.matchMedia("(max-width: 768px)");

function applyNavHighlighting(media) {
  if (media.matches) {
    navItems.forEach((el) => {
      el.addEventListener("click", () => {
        navItems.forEach((item) => (item.style.backgroundColor = ""));
        el.style.backgroundColor = "#644cff";
      });
    });
  } else {
    navItems.forEach((item) => (item.style.backgroundColor = ""));
  }
}
applyNavHighlighting(mediaQuery);
mediaQuery.addEventListener("change", applyNavHighlighting);

/*Preloader*/
let preloader = document.querySelector("#Preloader");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});

// timeline

document.addEventListener("DOMContentLoaded", () => {
  const timelineContainer = document.querySelector(".timeline-items");
  const line = document.createElement("div");
  line.classList.add("timeline-scroll-line");
  timelineContainer.appendChild(line);

  function updateLinePosition() {
    if (window.innerWidth <= 767) {
      line.style.left = "7px";
    } else {
      line.style.left = "calc(50% - 1px)";
    }
  }

  updateLinePosition();
  window.addEventListener("resize", updateLinePosition);

  function animateLine() {
    const containerTop =
      timelineContainer.getBoundingClientRect().top + window.scrollY;
    const containerHeight = timelineContainer.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const scrollCenter = scrollY + windowHeight / 2;
    const distanceIntoTimeline = scrollCenter - containerTop;

    let percentage = (distanceIntoTimeline / containerHeight) * 100;
    percentage = Math.max(0, Math.min(percentage, 100));

    line.style.height = `${percentage}%`;

    requestAnimationFrame(animateLine);
  }

  animateLine();
});

/*skill-animation */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".skills, .first, .second").forEach((el) => {
    observer.observe(el);
  });
});

//projects-animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document.querySelectorAll(".projects").forEach((project) => {
    observer.observe(project);
  });
});
