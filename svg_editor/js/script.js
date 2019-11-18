jQuery(document).ready(function($) {

//tabs
	$('.nav__icon').click(function(event) {
		var $this = $ (this);
		var  $nav__item =  $this.parent();
		if (!$nav__item.hasClass('last')) {			
			if ( !($nav__item.hasClass('active')) ) {
				$('.nav__item.active').removeClass('active');
				$nav__item.addClass('active');		
			}
		}	
	});


//range slider
	$('.counter__minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 0 ? 0 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.counter__plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

});