/* Rotating Imagess & Content For Home Page */
	var $pauseimage = 0;

function slideswitch(slideshow) {

    if ($pauseimage == 0){

    var $active = $('.'+slideshow+' li.active');

    if ( $active.length == 0 ) $active = $('.'+slideshow+' li:last');

    var $next =  $active.next().length ? $active.next()
        : $('.'+slideshow+' li:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 500, function() {
            $active.removeClass('active last-active');
        });
	}
}

$(function() {
        setTimeout(function() {
    	setInterval( "slideswitch('slideshow-1')", 5000 );
}, 500);
        setTimeout(function() {
    	setInterval( "slideswitch('slideshow-2')", 5000 );
}, 500);


$(".slideshow").mouseover(function() {
	$pauseimage = 1;
});

$(".slideshow").mouseout(function() {
	$pauseimage = 0;
});

});