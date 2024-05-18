let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}

/*dark light */
function darkMode()
{
    const imgDark = document.getElementById("img-dark");
    imgDark.classList.add("active");

    const imgLight = document.getElementById("img-light");
    imgLight.classList.remove("active");

    const bodyElement= document.getElementById("body");
    bodyElement.className = "theme-dark";
}

function lightMode()
{
    const imgDark = document.getElementById("img-dark");
    imgDark.classList.remove("active");

    const imgLight = document.getElementById("img-light");
    imgLight.classList.add("active");

    const bodyElement= document.getElementById("body");
    bodyElement.className = "theme-light";
}