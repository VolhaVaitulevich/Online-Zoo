let slideNumber = 1;
const changeSlide = (n) => showSlides((slideNumber += n));

const currentSlide = (n) => showSlides((slideNumber = n));

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNumber - 1].style.display = "block";
};

showSlides(slideNumber);
