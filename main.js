const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav_active");
  burger.classList.toggle("burger_active");
});

function slider(elem) {
  const parent = document.querySelector(`[data-slider="${elem}"]`);
  const sliderList = parent.querySelector("[data-slider-list]");
  const prev = parent.querySelector('[data-slider-btn="prev"]');
  const next = parent.querySelector('[data-slider-btn="next"]');
  const slideWidth = sliderList.firstElementChild.offsetWidth + 30;

  next.addEventListener("click", () => {
    sliderList.scrollBy(slideWidth, 0);
    if (sliderList.scrollLeft + slideWidth * 4 > sliderList.scrollWidth) {
      next.classList.add("lock");
    }
  });

  prev.addEventListener("click", () => {
    next.classList.remove("lock");
    sliderList.scrollBy(-slideWidth, 0);
  });
}

slider("service");
