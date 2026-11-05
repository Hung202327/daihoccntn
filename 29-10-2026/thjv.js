
function showSlide(sliderClass, index) {

    var slider = document.querySelector("." + sliderClass);
    var slides = slider.querySelectorAll(".slide");
    var dots = slider.querySelectorAll(".dot");
    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function changeSlide(sliderClass, direction) {

    var slider = document.querySelector("." + sliderClass);
    var slides = slider.querySelectorAll(".slide");

    var current = 0;
    for (var i = 0; i < slides.length; i++) {

        if (slides[i].classList.contains("active")) {
            current = i;
            break;
        }

    }
    showSlide(sliderClass, current + direction);
}
setInterval(function () {
    changeSlide("banner-slider", 1);
}, 3000);
setInterval(function () {
    changeSlide("development-slider", 1);
}, 4000);
function toggleMobileMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}