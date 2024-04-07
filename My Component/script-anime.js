const imgContainers = document.querySelectorAll(
  "#grid .grid-container .grid .img-container"
);
const heading = document.querySelector("#grid .heading-container h1");

imgContainers.forEach((imgContainer) => {
  const timeout = setTimeout(() => {
    imgContainer.classList.remove("skeleton");
  }, 5000);
});

const timeout2 = setTimeout(() => {
  heading.classList.remove("skeleton");
}, 5000);
