// FAQ Expanding Collapsing
const arrowDown = document.querySelectorAll(".fa-chevron-down");
const ul = document.querySelectorAll(".faq .faq-container .faqs ul");

for (i = 0; i < ul.length; i++) {
  ul[i].addEventListener("click", function () {
    this.classList.toggle("visible");
  });
}

// TiltJS
$(".item").tilt({
  glare: true,
  maxGlare: 0.8,
});

// GSAP
const tl = gsap.timeline({
  defaults: { duration: 0.75, ease: "Power3.easeOut" },
});

gsap.set(".cta", { display: "inline-block" });

tl.fromTo(
  ".hero-img",
  { opacity: 0 },
  {
    opacity: 1,
    delay: 0.7,
    duration: 1.5,
    // ease: "elastic.out(1.5,1)",
  }
);
tl.fromTo(
  ".cta",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 0.5,
    // ease: "back.out(2)",
  },
  "<"
);

// Features section counting incremental logic

// PurecounterJS library
new PureCounter({
  selector: ".purecounter1",
  start: 0,
  end: 11495,
  duration: 1,
  once: true,
  legacy: true,
});
new PureCounter({
  selector: ".purecounter2",
  start: 0,
  end: 25,
  duration: 1,
  once: true,
  legacy: true,
});
new PureCounter({
  selector: ".purecounter3",
  start: 0,
  end: 700,
  duration: 1,
  once: true,
  legacy: true,
});
new PureCounter({
  selector: ".purecounter4",
  start: 0,
  end: 24,
  duration: 1,
  once: true,
  legacy: true,
});

// Intersection Observer API
const featuresContainer = document.querySelector(
  ".features .features-container"
);

const options1 = {};

const observer1 = new IntersectionObserver(function (entries, observer1) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && width > 880) {
      featuresContainer.classList.add("visible");
    } else if (width < 880) {
      observer3.unobserve(featuresContainer);
    } else {
      featuresContainer.classList.remove("visible");
    }
  });
}, options1);

observer1.observe(featuresContainer);

const leftDescription = document.querySelector(
  ".description .description-container .left-description"
);
const options2 = {};

const observer2 = new IntersectionObserver(function (entries, observer2) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      leftDescription.classList.add("visible");
    } else {
      leftDescription.classList.remove("visible");
    }
  });
}, options2);

observer2.observe(leftDescription);

// Description Section Intersection Observer
const d1 = document.querySelector(
  ".description .description-container .right-description .grid-description .d1"
);
const d2 = document.querySelector(
  ".description .description-container .right-description .grid-description .d2"
);
const d3 = document.querySelector(
  ".description .description-container .right-description .grid-description .d3"
);
const d4 = document.querySelector(
  ".description .description-container .right-description .grid-description .d4"
);

const width = window.innerWidth;

const options3 = {};

const observer3 = new IntersectionObserver(function (entries, observer3) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && width > 880) {
      d1.classList.add("visible");
    } else if (width < 880) {
      observer3.unobserve(d1);
    } else {
      d1.classList.remove("visible");
    }
  });
}, options3);

observer3.observe(d1);

const options4 = {};

const observer4 = new IntersectionObserver(function (entries, observer4) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && width > 880) {
      d2.classList.add("visible");
    } else if (width < 880) {
      observer3.unobserve(d2);
    } else {
      d2.classList.remove("visible");
    }
  });
}, options4);

observer4.observe(d2);

const options5 = {};

const observer5 = new IntersectionObserver(function (entries, observer5) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && width > 880) {
      d3.classList.add("visible");
    } else if (width < 880) {
      observer3.unobserve(d3);
    } else {
      d3.classList.remove("visible");
    }
  });
}, options5);

observer5.observe(d3);

const options6 = {};

const observer6 = new IntersectionObserver(function (entries, observer6) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && width > 880) {
      d4.classList.add("visible");
    } else if (width < 880) {
      observer3.unobserve(d4);
    } else {
      d4.classList.remove("visible");
    }
  });
}, options6);

observer6.observe(d4);

// // Testimonials section Intersection Observer
const testimonialsHeading = document.querySelector(
  ".testimonials .testimonials-heading h2"
);
const testimonialsDescription = document.querySelector(
  ".testimonials .testimonials-desc p"
);
const testimonialsContainer = document.querySelectorAll(
  ".testimonials .testimonials-container"
);

const options7 = {};

const observer7 = new IntersectionObserver(function (entries, observer7) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      testimonialsHeading.classList.add("visible");
    } else {
      testimonialsHeading.classList.remove("visible");
    }
  });
}, options7);

observer7.observe(testimonialsHeading);

const options8 = {};

const observer8 = new IntersectionObserver(function (entries, observer8) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      testimonialsDescription.classList.add("visible");
    } else {
      testimonialsDescription.classList.remove("visible");
    }
  });
}, options8);

observer8.observe(testimonialsDescription);

const options9 = {};

const observer9 = new IntersectionObserver(function (entries, observer9) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      testimonialsContainer.classList.add("visible");
    } else {
      testimonialsContainer.classList.remove("visible");
    }
  });
}, options9);

// observer9.observe(testimonialsContainer);

// FAQs Intersection Observer
const faqHeading = document.querySelector(".faq .faq-heading h2");
const faqs = document.querySelector(".faq .faq-container .faqs");

const options10 = {};

const observer10 = new IntersectionObserver(function (entries, observer10) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      faqHeading.classList.add("visible");
    } else {
      faqHeading.classList.remove("visible");
    }
  });
}, options10);

observer10.observe(faqHeading);

const options11 = {};

const observer11 = new IntersectionObserver(function (entries, observer11) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      faqs.classList.add("visible");
    } else {
      faqs.classList.remove("visible");
    }
  });
}, options11);

observer11.observe(faqs);

// Navbar sticky on scroll
const navbar = document.querySelector(".navbar-container");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > navbar.offsetHeight - 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
