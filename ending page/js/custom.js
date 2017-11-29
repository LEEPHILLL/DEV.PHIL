
/*********************************************************************************
                                    WOW
***********************************************************************************/
$(function() {
  // Handler for .ready() called.
    new WOW().init();
});

/*********************************************************************************
                               Magnific Popup
http://dimsemenov.com/plugins/magnific-popup/documentation.html#initializing-popup
***********************************************************************************/
$(function () {
 // Handler for .ready() called.
    $('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
  }
  // other options
    });
});


/*

$('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector gor gallery item
        type: 'image',
        gallery: {
            enabled:true
        }
    });
});*/

/**************************************************************
                        carousel

$(function() {
  // Handler for .ready() called.
  #customers-testimonials
  items;1
});
***************************************************************/
$(function (){
    // Handler for .ready() called.
    $("#team-members").owlCarousel({
        items : 3,
        autoPlay : true,
        smartSpeed : 700,
        loop: true,
        autoplayHoverPause:true
    });
});

$(function (){
    // Handler for .ready() called.
    $("#customers-testimonials").owlCarousel({
        items : 1,
        autoPlay : true,
        smartSpeed : 700,
        loop: true,
        autoplayHoverPause:true
    });
});