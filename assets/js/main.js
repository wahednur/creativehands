$('.owl-carousel').owlCarousel({
    
    margin:10,
    nav:true,
    autoplay:true,
    loop:true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1000:{
            items:5
        }
    }
})
