"use strict";

var sliders = document.querySelectorAll(".slider");

var _loop = function _loop(i) {
  var slider = sliders[i];
  slider.addEventListener('click', function () {
    toggleSlider(slider);
  });
};

for (var i = 0; i < sliders.length; i++) {
  _loop(i);
}

function toggleSlider(slider) {
  var status = slider.getAttribute("slider-status");
  var newStatus = status == "on" ? "off" : "on";

  slider.setAttribute("slider-status", newStatus);
  var round = slider.querySelector(".round");
  console.log(round);

  if (newStatus == "on") {
    round.style.left = "64px";
    slider.classList.add("active");
  } else {
    round.style.left = "0px";
    slider.classList.remove("active");
  }

  if (activeSliders() === 3) {
    if (slider.classList.contains('good')) {
      toggleSlider(document.querySelector('.fast'));
    } else if (slider.classList.contains('cheap')) {
      toggleSlider(document.querySelector('.good'));
    } else if (slider.classList.contains('fast')) {
      toggleSlider(document.querySelector('.cheap'));
    }
  }
}

function activeSliders() {
  var activeSliders = document.querySelectorAll(".slider.active");
  return activeSliders.length;
}

function swich(i) {
  var sliders = document.querySelectorAll(".slider");
  toggleSlider(sliders[i % 3]);

  if (i > 0) {
    setTimeout(swich.bind(this, i - 1), 500);
  }
}
swich(5);