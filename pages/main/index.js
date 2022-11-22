window.onload = function () {
  const SLIDER = ".slider";
  const SLIDES = ".slides";
  const NEXT_BUTTON = ".slide__next";
  const PREV_BUTTON = ".slide__prev";

  function makeSlideshow(slides) {
    const slidesList = slides.querySelector(SLIDES);
    const imageGallery = slidesList.querySelectorAll(".slide");
    const nextButton = slides.querySelector(NEXT_BUTTON);
    const prevButton = slides.querySelector(PREV_BUTTON);

    console.log(slides);

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

    let transition = parseInt(slides.dataset.transition);

    if (slides.dataset.transition === null) {
      transition = 400;
    }

    slidesList.style.transition = `${transition}ms`;

    const slidesWidth = slides.clientWidth;
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
        index * -slidesWidth
      }px, 0, 0)`;
      console.log(index * -slidesWidth);
    };
  }

  const slideShows = document.querySelectorAll(SLIDER);

  for (let i = 0; i < slideShows.length; i += 1) {
    makeSlideshow(slideShows[i]);
  }
};
