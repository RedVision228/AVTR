$(function(){
    $('.design__slider').slick({
        dots: false,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: ' <img class="arrow arrow-left" src="/images/arrow-left.svg" alt=""></img> ' , 
        nextArrow: ' <img class="arrow arrow-right" src="/images/arrow-right.svg" alt=""></img> ', 
        responsive:[{
            breakpoint: 361,
            settings:{
                variableWidth: false,
                slidesToShow: 1
            }
        }]
        
    });
});


     

