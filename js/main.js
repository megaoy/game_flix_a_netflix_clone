// setup carrosel basic
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:35,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        850:{
            items:3
        },
        1200:{
            items:5
        }
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });