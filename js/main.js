// toggle class scroll 
$(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
    	$('#img-brand').removeClass('img-brand');
        $('#img-brand').addClass('afterscroll');

    } else
    {
        $('#img-brand').addClass('img-brand');
        $('#img-brand').removeClass('afterscroll');
    }  

});

$(window).scroll(function() {
    if($(this).scrollTop() > 250)
    {
        $('#icon-hover').addClass('animation');
    }
});


  
// demo only 
// open link in new tab without ugly target="_blank"
// $("a[href^='http']").attr("target", "_blank");


// Slider screemshoot

$('#screemshoot').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

jQuery(document).ready(function($) {
    var spin = $('preload-background');
    spin.addClass('active-spin');
});
$(document).ready(function(){
    $('preload-background').fadeOut();
    $('preload-background').removeClass('active-spin');
});