$(document).ready(function () {
    $('.button-collapse').sideNav();
    $(".header-fixed").headroom({
        tolerance: {
            up: 10,
            down: 15
        }
    });
    $('.parallax').parallax();
    $.adaptiveBackground.run({
        normalizeTextColor: false,
        normalizedTextColors: {
            light: "#000",
            dark: "#fff"
        }, success: function ($img, data) {
            console.log('Success!', $img, data);
        }
    });

});

