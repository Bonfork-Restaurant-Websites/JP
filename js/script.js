// Main menu
$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $('body').toggleClass('nav-open');
    });
});

$(document).ready(function () {
    $('#nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});


// Carousel
let carouselLength = $('header .carousel-item').length;

if (carouselLength < 10) {
    $(".nr-img-header").text("0" + carouselLength);
}
else {
    $(".nr-img-header").text(carouselLength);
}

$("header .carousel").on('slid.bs.carousel', function () {
    $('header .carousel-inner').children('.carousel-item').each(function () {
        if ($(this).hasClass('active')) {
            let heightBar = 80 / carouselLength * ($(this).index() + 1);
            $('.vr-fill').css('height', heightBar + 'px');
        }
    });
});


if ($('#subscribe-form').length) {
    $('#subscribe-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail-2.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-subscribe').style.display = 'block';
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-subscribe').style.display = 'block';
                        console.log("Fail");
                    }
                });
            }
        });
    });
}