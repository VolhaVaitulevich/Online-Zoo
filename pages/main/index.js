document.addEventListener("DOMContentLoaded", function () {
  const SLIDER = ".slider";
  const SLIDES = ".slides";
  const NEXT_BUTTON = ".slide__next";
  const PREV_BUTTON = ".slide__prev";

  function makeSlideshow(slides) {
    const slidesList = slides.querySelector(SLIDES);
    const imageGallery = slidesList.querySelectorAll(".slide");
    const nextButton = slides.querySelector(NEXT_BUTTON);
    const prevButton = slides.querySelector(PREV_BUTTON);

    if (nextButton !== null) {
      nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        nextSlide();
      });
    }

    if (prevButton !== null) {
      prevButton.addEventListener("click", function (e) {
        e.preventDefault();
        prevSlide();
      });
    }

    let transition =
      parseInt(slides.dataset.transition) === null
        ? 400
        : parseInt(slides.dataset.transition);
    let slidesWidth = slides.clientWidth;
    let index = 0;

    const nextSlide = () => {
      index += 1;
      if (index === imageGallery.length) {
        index = 0;
      }
      showSlide();
    };

    const prevSlide = () => {
      index -= 1;
      if (index < 0) {
        index = imageGallery.length - 1;
      }
      showSlide();
    };

    const showSlide = () => {
      slidesList.style.transition = `${transition}ms`;
      slidesList.style.transform = `translate3d(${
        index * -slidesWidth
      }px, 0, 0)`;
    };

    const showSlideResize = () => {
      slidesWidth = slides.clientWidth;
      slidesList.style.transition = `0ms`;
      slidesList.style.transform = `translate3d(${
        index * -slidesWidth
      }px, 0, 0)`;
    };

    window.addEventListener("resize", showSlideResize);
  }

  const slideShows = document.querySelectorAll(SLIDER);
  slideShows.forEach((elem) => makeSlideshow(elem));

  const activePage = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
    }
  });
});
