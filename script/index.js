$(document).ready(function(){
    $('.menu__burger').click(function(event){
        $('.menu__burger,.menu__links,.span,.menu__entry,.menu__line').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

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



