const slider = document.getElementById("slider");
const velocidad = 2;

function autoScroll() {
  slider.scrollLeft += velocidad;

  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  }
}

setInterval(autoScroll, 20);
