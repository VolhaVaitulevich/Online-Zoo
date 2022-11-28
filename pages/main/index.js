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

  //highlight active tab in the navigation menu
  const activePage = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("active");
    }
  });

  //update value in Amount field
  const rangeValue = () => {
    sliderValue = document.getElementById("pick-animal__randeSlider").value;
    document.getElementById("input-amount").value = document.querySelector(
      'option[data-value="' + sliderValue + '"]'
    ).value;
    changeWidgetInfo();
  };
  //update range input based in Amount field
  const rangeValueFromInput = () => {
    const options = [...rangeOptions].map((elem) => elem.value);
    if (options.includes(amountField.value)) {
      inputRange.value = document
        .querySelector('option[value="' + amountField.value + '"]')
        .getAttribute("data-value");
    }
    sliderValue = document.getElementById("pick-animal__randeSlider").value;
    changeWidgetInfo();
  };

  const changeWidgetInfo = () => {
    switch (sliderValue) {
      case "1":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-eagle.svg)";
        widgetTextLine1.innerHTML = "7";
        widgetTextLine2.innerHTML = "Something about eagles.";
        break;
      case "2":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-panda.svg)";
        widgetTextLine1.innerHTML = "4";
        widgetTextLine2.innerHTML = "Panda diet for the day.";
        break;
      case "3":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-gorilla.svg)";
        widgetTextLine1.innerHTML = "18";
        widgetTextLine2.innerHTML = "Something about gorillas.";
        break;
      case "4":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-panda.svg)";
        widgetTextLine1.innerHTML = "1";
        widgetTextLine2.innerHTML = "Something about pandas.";
        break;
      case "5":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-alligator.svg)";
        widgetTextLine1.innerHTML = "3";
        widgetTextLine2.innerHTML = "Something about alligators.";
        break;
      case "6":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-eagle.svg)";
        widgetTextLine1.innerHTML = "12";
        widgetTextLine2.innerHTML = "More info about eagles.";
        break;
      case "7":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-alligator.svg)";
        widgetTextLine1.innerHTML = "2";
        widgetTextLine2.innerHTML = "More info about alligators.";
        break;
      case "8":
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-gorilla.svg)";
        widgetTextLine1.innerHTML = "1";
        widgetTextLine2.innerHTML = "More info about gorillas.";
        break;
      default:
        widgetImage.style.backgroundImage =
          "url(../../assets/images/animals-widget-panda.svg)";
        widgetTextLine1.innerHTML = "4";
        widgetTextLine2.innerHTML = "More info about pandas.";
    }
  };

  const inputRange = document.querySelector('input[type="range"]');
  const amountField = document.getElementById("input-amount");
  const rangeOptions = document.querySelectorAll("datalist option");

  //show cotent depend on sliderValue
  const widgetImage = document.querySelector(".animals-widget__image");
  const widgetTextLine1 = document.querySelector(".animal-widget__info-line1");
  const widgetTextLine2 = document.querySelector(".animal-widget__info-line2");

  //set start value for Amount field
  let sliderValue = document.getElementById("pick-animal__randeSlider").value;
  rangeValue();

  inputRange.addEventListener("input", rangeValue);
  amountField.addEventListener("input", rangeValueFromInput);
});
