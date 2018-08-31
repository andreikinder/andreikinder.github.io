$(document).ready(function(){
  
  //плавная якорная прокрутка
	$("body").on('click', '.navbar [href*="#"]', function(e){
  		var fixed_offset = 100;
  		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  		e.preventDefault();
	});


$('.navbar-toggle').click(function(event) {
	$('.navbar').slideToggle(1000);
});

$('.portfolio_control').click(function(event) {
	var get_id = this.id;
	console.log(get_id);
	var get_currenet = $('.gallery_port .'+ get_id);
	console.log(get_currenet);
	$('.gallery_port-item').not(get_currenet).fadeOut(500);
	 get_currenet .fadeIn(500);
});

$('#all-c').click(function(event) {
	$('.gallery_port-item').fadeIn(500);
});

	//кнопка наверх
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



	$('.wdo .btn').click(function(event) {
		$(".modal").modal({
	  	fadeDuration: 300,
	 	fadeDelay: 300
		});/* Act on the event */
	});

	
 //owl-carousel
  $(".owl-carousel").owlCarousel({
  	loop: true,
  	items: 1,
  	nav: true,

  });


});