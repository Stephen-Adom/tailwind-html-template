let navbarDropdownBtn = document.querySelector(".dropdown .dropdown-btn");
let navbarDropdownMenu = document.querySelector(".dropdown .dropdown-menu");

let toggleButton = document.querySelector(".toggle-btn");
let navbarNavs = document.querySelector(".navbar-navs");
let tabContents = document.querySelector(".tab-content");

let navTabs = document.querySelectorAll(
  "#projects-section .nav-tabs .nav-item"
);

navbarDropdownBtn.addEventListener("click", (e) => {
  if (navbarDropdownMenu.classList.contains("hidden")) {
    navbarDropdownMenu.classList.remove("hidden");
    navbarDropdownMenu.classList.add("flex");
  } else {
    navbarDropdownMenu.classList.add("hidden");
  }
});

toggleButton.addEventListener("click", (e) => {
  if (navbarNavs.classList.contains("hidden")) {
    navbarNavs.classList.remove("hidden");
  } else {
    navbarNavs.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("dropdown-btn") ||
    e.target.classList.contains("toggle-btn-icon")
  ) {
    return;
  } else {
    navbarNavs.classList.add("hidden");
    navbarDropdownMenu.classList.add("hidden");
  }
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

function initialiseTabs() {
  let activeTabContentAttribute = "";
  navTabs[0].children[0].classList.add("active");

  navTabs.forEach((child) => {
    child.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.tagName === "A") {
        clearActiveFromTabs(navTabs);
        e.target.classList.add("active");
        activeTabContentAttribute = e.target.getAttribute("href");
        setTabContent(activeTabContentAttribute);
      }
    });
  });
}

function clearActiveFromTabs(tabs) {
  tabs.forEach((li) => {
    li.children[0].classList.remove("active");
  });
}

function setTabContent(activeTabContentAttribute) {
  Array.from(tabContents.children).forEach((tabPane) => {
    if (tabPane.classList.contains("show")) {
      tabPane.classList.remove("show");
    }
  });

  Array.from(tabContents.children).forEach((tabPane) => {
    if (
      tabPane.getAttribute("id") === activeTabContentAttribute.split("#")[1]
    ) {
      tabPane.classList.add("show");
    }
  });
}

initialiseTabs();
