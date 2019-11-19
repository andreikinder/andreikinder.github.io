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


//range 
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



//slider
	var $slider = $(".slider");
	$slider.on('input', function() {
		$this = $(this);
		$bar = $this.prev();
		$fill = $bar.find('.fill');

		$value = $this.parent().parent().parent().find('.slider-input ');

		var value = $this.val();
		$fill.css("width", value + "%");

		$value.val(value); 
	});


	var $slider_input = $(".slider-input");
	$slider_input.on('input', function() {
		$this = $(this);
		var value = $this.val();
		$slider = $this.parent().find('.slider');
		$fill = $this.parent().find('.fill');

		$slider.val(value);
		$fill.css("width", value + "%");

	})

// select

$('.select').selectize({
    create: true,
    sortField: 'text'
});



});