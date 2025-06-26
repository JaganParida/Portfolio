const toggle = document.getElementById("toggleDark");
const html = document.documentElement;

// Check for saved preference in localStorage
if (localStorage.getItem("mode") === "dark") {
  html.classList.add("theme-dark");
  toggle.classList.remove("bi-brightness-high-fill");
  toggle.classList.add("bi-moon");
}

toggle.addEventListener("click", function () {
  const isDark = html.classList.toggle("theme-dark");

  if (isDark) {
    this.classList.remove("bi-brightness-high-fill");
    this.classList.add("bi-moon");
    localStorage.setItem("mode", "dark");
  } else {
    this.classList.remove("bi-moon");
    this.classList.add("bi-brightness-high-fill");
    localStorage.setItem("mode", "light");
  }
});

//type-writer
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
    if (window.innerWidth <= 765) {
      line.style.left = "7px";
    } else {
      line.style.left = "calc(50% - 1px)";
    }
  }

  updateLinePosition();
  window.addEventListener("resize", updateLinePosition);

  let lastScrollY = window.scrollY;

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

    // Smooth height transition
    line.style.transition = "height 0.2s ease-out";
    line.style.height = `${percentage}%`;

    lastScrollY = scrollY;
    requestAnimationFrame(animateLine);
  }

  animateLine();
});

//animation on scroll-view
document.addEventListener("DOMContentLoaded", () => {
  // Utility to create observer with a threshold
  const handleIntersect = (threshold) => {
    return new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      { threshold }
    );
  };

  // Observer for skills section
  const skillsObserver = handleIntersect(0.4);
  document.querySelectorAll(".skills, .first, .second").forEach((el) => {
    skillsObserver.observe(el);
  });

  // Observer for projects section
  const projectsObserver = handleIntersect(0.2);
  document.querySelectorAll(".projects").forEach((project) => {
    projectsObserver.observe(project);
  });

  // Observer for resume button
  const resumeObserver = handleIntersect(0.3);
  document.querySelectorAll(".resume").forEach((btn) => {
    resumeObserver.observe(btn);
  });

  // Observer for the single proficiency container
  const proficiencyObserver = handleIntersect(0.3);
  const proficiencyEl = document.querySelector(".proficiency-container");
  if (proficiencyEl) {
    proficiencyObserver.observe(proficiencyEl);
  }
});

/*go-to-top-button */
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunctionBottom();
  scrollFunctionTop();
};

function scrollFunctionBottom() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}

function scrollFunctionTop() {
  const header = document.querySelector("header");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }
}

//slider
let slideIndex = 0;
let timer;

function showSlides(indexChange = 0) {
  clearTimeout(timer);

  const slides = document.querySelectorAll(".mySlides");
  const dotsContainer = document.getElementById("dots-container");

  // Create dots only once
  if (dotsContainer.children.length === 0) {
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => moveToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  slideIndex += indexChange;
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // Hide all slides and reset dot states
  slides.forEach((slide, i) => {
    slide.classList.remove("slide-in");
    slide.style.display = "none";
    dotsContainer.children[i].classList.remove("active");
    dotsContainer.children[i].innerHTML = "";
  });

  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("slide-in");

  // Add active dot and animate fill
  const activeDot = dotsContainer.children[slideIndex];
  activeDot.classList.add("active");
  const fillDiv = document.createElement("div");
  fillDiv.classList.add("fill");
  activeDot.appendChild(fillDiv);

  timer = setTimeout(() => showSlides(1), 2000);
}

function plusSlides(n) {
  showSlides(n);
}

function moveToSlide(n) {
  slideIndex = n - 1;
  showSlides(1);
}

window.onload = () => {
  showSlides();
};
