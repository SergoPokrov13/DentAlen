$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive:[
            {
                breakpoint: 1250,
                settings:{
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 1
                }
            }
        ],
    });
})



