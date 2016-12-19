$(document).ready(function () {
    $('.button-collapse').sideNav();
    $(".header-fixed").headroom({
        tolerance: {
            up: 10,
            down: 15
        }
    });
    $('.parallax').parallax();
    if (lightGallery) {
        console.log('he');
        lightGallery(document.getElementById('lightgallery'));
    }

});

