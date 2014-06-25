//Disables top level menu links
$(document).ready(function() {
    $('.disabled a[href="#"]').click(function(e) {
        e.preventDefault();
    });
});