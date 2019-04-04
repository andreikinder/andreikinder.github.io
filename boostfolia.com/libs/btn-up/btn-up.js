var btn_up = $('.btn-up');
	$(window).on('scroll', function(){
		if($(window).scrollTop() >= 250){
			btn_up.fadeIn();
		}
		else{
			btn_up.fadeOut();
		}
	});

	btn_up.on('click', function(event){
		$('html,body').animate({'scrollTop':0}, 900);
	});
