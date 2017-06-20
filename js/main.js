$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 672) {
            $('.main-nav').addClass('sticky');
			   $('.content').css({display: 'block'});
			   
			  
        } else {
            $('.main-nav').removeClass('sticky');
			  $('.content').css({display: 'none'});
			  
			  
        }
    });
});


$(function() {
    $(".my-bar").each(function() {
        $(this)
        .data("width", $(this).width())
        .width(0)
        .animate({
            width: $(this).data("width")
        }, 1500);
    });
});



$('.carousel').carousel({
	interval: 5000,
	duration: 1000,
	pause: 'hover'
});
	

 $(document).ready(function () {

        $('.slide').click(function (e) {

            var link = $(this).attr('href');
            var sticky = $('.main-nav').outerHeight();


            $('html, body').animate({
               scrollTop: $(link).offset().top - sticky
            }, 1000);
			  $(this).addClass('sticky');

            e.preventDefault();
        });


    });

	
