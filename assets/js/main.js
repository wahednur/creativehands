

/* Category carousel start */
$('.owl-carousel').owlCarousel({
    
    margin:10,
    nav:false,
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
}) /* Category carousel end */

/* Show cart start */
$(function() {
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart-info-base");
    const closeBtn = document.getElementById("close-btn")
    const closeDiv = document.getElementById("cart-info-base")

    cartInfo.addEventListener("click", function(){
        cart.classList.toggle("cart-info-base-view");
        
        
        
    });

    closeBtn.addEventListener("click", function(){
        closeDiv.classList.toggle("cart-info-base");
        document.getElementById("cart-info-base").style.display = "none";
        
    });


})();

/* Show cart end */
