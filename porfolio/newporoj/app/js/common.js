$(function() {
	 $('.header-slider').slick({
	 	prevArrow: '<button type="button" class="slick-prev"> <span class="pe-7s-angle-left"></span></button>',
	 	nextArrow: '<button type="button" class="slick-next"><span class="pe-7s-angle-right"></span></button>',
	 });

	 $('#anSlider').slick({
	 	prevArrow: '<button type="button" class="slick-prev"> <span class="pe-7s-angle-left"></span></button>',
	 	nextArrow: '<button type="button" class="slick-next"><span class="pe-7s-angle-right"></span></button>',
	 	mobileFirst: true,
 	 	infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		 responsive: [
					    {
					      breakpoint: 767,
					      settings: {
					        slidesToShow: 2,
					        slidesToScroll: 1,
					        infinite: true
					      }
					    },
					    {
					      breakpoint: 1023,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 1,
					         infinite: true
					      }
					    }
					    // You can unslick at a given breakpoint now by adding:
					    // settings: "unslick"
					    // instead of a settings object
					 ]
	 });

	 $('#mainWorker').slick({
	 	arrows: false,
	 	dots: true,
	 	appendDots: '.dots_block',
	 	asNavFor: '#helpWorker'


	 });

	 $('#helpWorker').slick({
	 	arrows: false,
	 	asNavFor: '#mainWorker'
	 });
	 $('.slick-dots li button').html(' ');


	 // var slideout = new Slideout({
  //       'panel': document.getElementById('panel'),
  //       'menu': document.getElementById('menu'),
  //       'padding': 256,
  //       'tolerance': 70,
  //       'side': 'right'
  //     });

  //     // Toggle button
  //     document.querySelector('.toggle-button').addEventListener('click', function() {
  //       slideout.toggle();
  //     });


	$(window).resize(function(event) {
		if ($(this).width()>=768)
			$('.categories').css({
				display : 'flex'
			});
		else 
			$('.categories').css({
				display : 'none'
			});
	}); 

	 $('#controll-works__toggle').click(function(event){
	 	$('#categories').slideToggle(500);
	 	$('.toggle-ico').toggleClass(' pe-7s-angle-up');
	 	$('.toggle-ico').toggleClass(' pe-7s-angle-down');
	 });
	 $('.categories__item').click(function(event) {

	 	var categories_name = $(this).html();

	 	$('.categories__item').removeClass('item_active');

	 	$(this).addClass('item_active');
	 	$('.toggle-name').text(categories_name);

	 	var catId = categories_name.substr(0,1);
	 	if (catId != 'a'){
	 			var get_currenet = $('.our_works__content .' + catId);
	 			$('.work-item').not(get_currenet).fadeOut(500);
	 			get_currenet .fadeIn(500);
	 	}
	 	else $('.work-item').fadeIn(500);
	 	if ($(window).width()<768)  $('#controll-works__toggle').click();
	 
	 });



 	$('.post__img').mouseover(function(event) {
 		var post__photo = $(this).parent();
  		var photoControl =  post__photo.find('.photoControl');
 		$(this).stop().css({
 			'filter' : 'blur(3px)',
 			'-webkit-filter ' : 'blur(3px)'
 		});
 		photoControl.css('display', 'flex');
 	});
 	 $('.photoControl').mouseleave(function(event) {
 	 	var post__photo = $(this).parent();
 		var post__img =  post__photo.find('.post__img');
 		post__img.stop().css({
 			'filter' : 'blur(0px)',
 			'-webkit-filter ' : 'blur(0px)'
 		});
 	$(this).css('display', 'none');
 	});




	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.head--locationOnMap').click(function(event) {
		$('.toggle-ico').toggleClass(' pe-7s-angle-up');
	 	$('.toggle-ico').toggleClass(' pe-7s-angle-down');
		$('.map').slideToggle(400);
	});


});