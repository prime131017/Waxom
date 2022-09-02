$(document).ready(function() {
	$(".slider-one").owlCarousel({
	    loop:true,
	    nav:true,
	    navigation:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    autoplaySpeed:1500,
	    navSpeed:1500,
	    navText: [$('.prev'),$('.next')],
	    items:1,
	});

	$(".slider-two").owlCarousel({
		    loop:true,
		    nav:true,
		    navigation:true,
		    navText: [$('.am-prev'),$('.am-next')],
		    margin:30,
		    autoplay:false,
		    autoplaySpeed:1500,
	    	navSpeed:1500,
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},
				768:{
					items:2,
				},
				1440:{
					items:3,
				}
			}
	});



});
	
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});



$(document).ready(function(){
            var submitIcon = $('.searchbox-icon');
            var inputBox = $('.searchbox-input');
            var searchBox = $('.searchbox');
            var isOpen = false;
            submitIcon.click(function(){
                if(isOpen == false){
                    searchBox.addClass('searchbox-open');
                    inputBox.focus();
                    isOpen = true;
                } else {
                    searchBox.removeClass('searchbox-open');
                    inputBox.focusout();
                  inputBox.val('');
                    isOpen = false;
                }
            });  
             submitIcon.mouseup(function(){
                    return false;
                });
            searchBox.mouseup(function(){
                    return false;
                });
            $(document).mouseup(function(){
                    if(isOpen == true){
                        $('.searchbox-icon').css('display','block');
                        submitIcon.click();
                    }
                });
        });
            function buttonUp(){
                var inputVal = $('.searchbox-input').val();
                inputVal = $.trim(inputVal).length;
                if( inputVal !== 0){
                    $('.searchbox-icon').css('display','none');
                } else {
                    $('.searchbox-input').val('');
                    $('.searchbox-icon').css('display','block');
                }
            }