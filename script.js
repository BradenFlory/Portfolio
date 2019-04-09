$(document).ready(function () {
    $(".sidenav").sidenav();
})

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.parallax').parallax();
});

// Old Carousel
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.carousel').carousel();
});

// Old Carousel

