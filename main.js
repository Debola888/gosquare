// Animate Smooth Scroll
$('#View-work').on('Click', function() {
    const images = $('#Images').position().top;

    $('html, body').animate({
    scrollTop: images
    }, 
    900
    );
});