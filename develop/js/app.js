$(".owl-carousel.owl-carousel__first").owlCarousel({
  loop: true,
  dots: true,
  dotsData: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel.owl-carousel__second").owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel.owl-carousel__third").owlCarousel({
  loop: true,
  dots: false,
  nav: true,

  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],

  responsive: {
    0: {
      items: 1,
    },
    1536: {
      items: 2,
      margin: -670,
    },
  },
});

const btn = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const closeBtn = document.querySelector(".close");
function openNav() {
  navbar.classList.remove("navbar");
  document.body.style.overflow = "hidden";
  closeBtn.classList.add("rotate");
}

function closeNav() {
  navbar.classList.add("navbar");
  document.body.style.overflow = "auto";
}

btn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

window.addEventListener("resize", function () {
  if (window.innerWidth >= 1024) {
    closeNav();
  }
});

const accordion = document.querySelector(".accordion");
const accordion_arrow = document.querySelector(".accordion_arrow");
let accordionItemsArr = document.querySelectorAll(".accordion__hidden");

function toggleAccordion(e) {
  if (e.target.classList.contains("fa-chevron-up")) {
    accordionItemsArr.forEach((item) => {
      item.classList.add("accordion__hidden");
      item.previousElementSibling.lastElementChild.classList.add(
        "fa-chevron-up"
      );
    });
    e.target.parentElement.nextElementSibling.classList.remove(
      "accordion__hidden"
    );
    e.target.classList.remove("fa-chevron-up");
    e.target.classList.add("fa-chevron-down");
  } else if (e.target.classList.contains("fa-chevron-down")) {
    e.target.parentElement.nextElementSibling.classList.add(
      "accordion__hidden"
    );
    e.target.classList.add("fa-chevron-up");
    e.target.classList.remove("fa-chevron-down");
  }
}

accordion.addEventListener("click", toggleAccordion);

gsap.from(".about_us_heading", { x: -1000, duration: 1 });
gsap.to(".about_us_heading", { x: 0, duration: 1 });
