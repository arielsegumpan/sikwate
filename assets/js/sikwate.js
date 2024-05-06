(function($){
    $(document).ready(function () {

        // cat carousel
        $('#featured_prod_slide.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            center:true,
            dots:false,
            autoplayTimeout: 10000,
            autoplay:true,
            fluidSpeed: true,
            autoplaySpeed: 6000,
            navText : false,
            fluidSpeed:true,
            responsive:{
                0:{
                    items:1,
                    margin: 30
                },
                600:{
                    items:2
                },
                768:{
                    items:3,
                    center:false,
                },
                1200:{
                    items:4
                }
            }
        })
        
        // featured products
        $('#prod_featured_carousel.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:false,
            center:true,
            dots:false,
            autoplayTimeout: 10000,
            autoplay:true,
            fluidSpeed: true,
            autoplaySpeed: 6000,
            navText : false,
            fluidSpeed:true,
            responsive:{
                0:{
                    items:1,
                    margin: 30
                },
                600:{
                    items:2
                },
                768:{
                    items:3,
                    center:false,
                },
                1200:{
                    items:4
                }
            }
        })

        var owl = $('#prod_featured_carousel.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('#nextBtn').click(function() {
            owl.trigger('next.owl.carousel',[1500]);
        })
        // Go to the previous item
        $('#prevBtn').click(function() {
            // With optional speed parameter,
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [1500]);
        })

    })
})(jQuery);