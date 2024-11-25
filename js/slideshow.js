let slideIndex = 0; // initialize the slide index to 0
showSlides(); // call the function to show the slides

function showSlides() {
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((slide) => {
    slide.style.display = "none"; // hide all slides
  });

  slideIndex++; // increment the slide index

  if (slideIndex > slides.length) {
    slideIndex = 1; // if the slide index exceeds the number of slides, reset it to 1
  }

  dots.forEach((dot) => {
    dot.classList.remove("active"); // remove the 'active' class from all dots
  });

  slides[slideIndex - 1].style.display = "block"; // display the current slide
  dots[slideIndex - 1].classList.add("active"); // add the 'active' class to the current dot

  setTimeout(showSlides, 3000); // call the function again after 3 seconds to change the slide
}

function currentSlide(n) {
  slideIndex = n;
  showSlidesManual();
}

function showSlidesManual() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // hide all slides
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // remove the 'active' class from all dots
  }

  slides[slideIndex - 1].style.display = "block"; // display the current slide
  dots[slideIndex - 1].className += " active"; // add the 'active' class to the current dot
}
