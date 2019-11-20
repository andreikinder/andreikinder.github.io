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


//colorpicker


$('#table_color').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#table_color .color__bg').css('backgroundColor', '#' + hex);
		$('#table_color .color_input').val(hex);
	}
});

$('#zone_color_name').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#zone_color_name .color__bg').css('backgroundColor', '#' + hex);
		$('#zone_color_name .color_input').val(hex);
	}
});



$('#settings_stroke').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#settings_stroke .color__bg').css('backgroundColor', '#' + hex);
		$('#settings_stroke .color_input').val(hex);
	}
});



$('#settings_table').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#settings_table .color__bg').css('backgroundColor', '#' + hex);
		$('#settings_table .color_input').val(hex);
	}
});

$('#icon_color').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#icon_color .color__bg').css('backgroundColor', '#' + hex);
		$('#icon_color .color_input').val(hex);
	}
});






});