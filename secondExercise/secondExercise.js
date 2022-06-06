const slider = document.querySelector("#slider");
slider.addEventListener("change", changeSlider)
function changeSlider() {
  const shape = document.querySelector("#shape");
  shape.style.borderRadius = `${slider.value}px`;
}
