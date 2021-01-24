$(function() {
    $('.slider').slick ({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
             {
                breakpoint: 1210,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
            }
        },
        {
            breakpoint: 792,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

$('.menu__btn').on('click', function(){
    $('.header-menu__list').toggleClass('header-menu__list--active');
});