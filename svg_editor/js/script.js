jQuery(document).ready(function($) {


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
});