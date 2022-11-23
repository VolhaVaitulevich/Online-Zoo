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

    slidesList.style.transition = `${transition}ms`;

    let slidesWidth = slides.offsetWidth;

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
      slidesList.style.transform = `translate3d(${
        index * -slides.offsetWidth
      }px, 0, 0)`;
    };
  }

  const slideShows = document.querySelectorAll(SLIDER);
  slideShows.forEach((elem) => makeSlideshow(elem));
});

window.onresize = function () {
  location.reload();
};
