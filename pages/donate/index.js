document.addEventListener("DOMContentLoaded", function () {
  const CONFIG = {
    1: {
      image: "url(../../assets/images/animals-widget-eagle.svg)",
      line1: "7",
      line2: "Something about eagles.",
    },
    2: {
      image: "url(../../assets/images/animals-widget-panda.svg)",
      line1: "4",
      line2: "Panda diet for the day.",
    },
    3: {
      image: "url(../../assets/images/animals-widget-gorilla.svg)",
      line1: "18",
      line2: "Something about gorillas.",
    },
    4: {
      image: "url(../../assets/images/animals-widget-panda.svg)",
      line1: "1",
      line2: "Something about pandas.",
    },
    5: {
      image: "url(../../assets/images/animals-widget-alligator.svg)",
      line1: "3",
      line2: "Something about alligators.",
    },
    6: {
      image: "url(../../assets/images/animals-widget-eagle.svg)",
      line1: "12",
      line2: "More info about eagles.",
    },
    7: {
      image: "url(../../assets/images/animals-widget-alligator.svg)",
      line1: "2",
      line2: "More info about alligators.",
    },
    8: {
      image: "url(../../assets/images/animals-widget-gorilla.svg)",
      line1: "1",
      line2: "More info about gorillas.",
    },
  };

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
    const currentValue = CONFIG[sliderValue];
    widgetImage.style.backgroundImage = currentValue.image;
    widgetTextLine1.innerHTML = currentValue.line1;
    widgetTextLine2.innerHTML = currentValue.line2;
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
