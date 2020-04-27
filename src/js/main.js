// --------------search input top---------------
const searchBtn = document.querySelector(".form-inline img");

searchBtn.addEventListener("click", () => {
    const input = document.querySelector(".form-control");
    input.classList.toggle("active");
    input.focus();
    input.value = "";
});

// --------------left menu---------------
const arrowBtn = document.querySelector(".hide button img");

let flag = false;

arrowBtn.addEventListener("click", () => {
    const leftMenu = document.querySelector(".left-menu");
    const text = document.querySelector(".text");

    const index = document.querySelector(".hide");

    if (!flag) {
        function menuFixed(x) {
            if (x.matches) {
                leftMenu.style.left = "-145px";
            }
        }

        function menuFixed2(y) {
            if (y.matches) {
                leftMenu.style.left = "-97px";
            }
        }

        leftMenu.style.left = "-155px";
        text.textContent = "menu";
        arrowBtn.src = "images/header/side-menu-2.png";

        index.style.zIndex = "4"

        flag = true;
    } else if (flag) {
        leftMenu.style.left = "0";
        text.textContent = "";
        arrowBtn.src = "images/header/side-menu-1.png";

        index.style.zIndex = "0"
        flag = false;
    }

    let x = window.matchMedia("(max-width: 1280px)");
    menuFixed(x);
    x.addListener(menuFixed);

    let y = window.matchMedia("(max-width: 767px)");
    menuFixed2(y);
    y.addListener(menuFixed2);
});

// -------------slider top--------------
const slideList = [{
    img: "images/slider/slider-1.png",
}, {
    img: "images/slider/slider-2.png",
}, {
    img: "images/slider/slider-3.png",
}, {
    img: "images/slider/slider-2.png",
}];


const image = document.querySelector('.slider-img');
const dots = [...document.querySelectorAll('.rectangle')];

let time = 1500;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('activeSlider'));
    dots[activeDot].classList.remove('activeSlider');
    dots[active].classList.add('activeSlider');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    changeDot();
}
let indexInterval = setInterval(changeSlide, time);

// -------------carousel aktualnosci-----------------
$(document).ready(function() {
    $('.customer-logos-a').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<i class="slick-prev"><img src="images/aktualnosci/aktualnosci-5.png" alt=""></i>',
        nextArrow: '<i class="slick-next"><img src="images/aktualnosci/aktualnosci-6.png" alt=""></i>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// -------------carousel kontakt-----------------
$(document).ready(function() {
    $('.customer-logos-k').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<i class="slick-prev"><img src="images/arrow-left-white.png" alt="a"></i>',
        nextArrow: '<i class="slick-next"><img src="images/arrow-right-white.png" alt="a"></i>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});


$(window).resize(function() {
    var widthWindow = $(window).width();
    if (widthWindow <= '1500') {
        $('div.customer-logos-k').removeClass('row');
    } else {
        $('div.customer-logos-k').addClass('row');
    }
});
$(window).trigger('resize');

// -------------carousel footer-----------------
$(document).ready(function() {
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        prevArrow: '<i class="slick-prev"><img src="images/aktualnosci/aktualnosci-5.png" alt=""></i>',
        nextArrow: '<i class="slick-next"><img src="images/aktualnosci/aktualnosci-6.png" alt=""></i>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

// ----------------RWD newsletter------------------
$(window).resize(function() {
    var widthWindow = $(window).width();
    if (widthWindow < '768') {
        $('.rectangle-left').removeClass('col-10');
        $('.rectangle-left').addClass('col-8');

        $('.newsletter').removeClass('col-10');
        $('.newsletter').addClass('col-8');

        $('.rectangles-right').removeClass('col-2');
        $('.rectangles-right').addClass('col-4');

        $('.btn-right').removeClass('col-2');
        $('.btn-right').addClass('col-4');

    }
});
$(window).trigger('resize');

// ----------RWD newsletter placeholder----------------------
function input(z) {
    if (z.matches) {
        document.querySelector('.newsletter .panel input').placeholder = "Newsletter?";
    }
}

let z = window.matchMedia("(max-width: 767px)");
input(z);
y.addListener(input);
