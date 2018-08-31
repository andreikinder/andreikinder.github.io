$(document).ready(function() {
		
	$('#nav-toggle').click(function(event) {
		 $('#nav-list').slideToggle('slow');		
		});

	$('.nav-list-item').hover(function() {
		$('.nav-list-item').each(function(index, el) {
			$(this).removeClass(' list-item-active  ', 500);
		});
		$(this).addClass('list-item-active ', 500);
	}, function() {
		$('.nav-list-item').each(function(index, el) {
			$(this).removeClass(' list-item-active', 2000);
		});
		$('#home-a').addClass(' list-item-active',2000);
	}).click(function(event) {
		$('#nav-list').slideUp('slow');
	});



	var btn_more =$('#load-more')
	btn_more.click(function(event) {
		if (btn_more.html()=='load more') {
			btn_more.html('hide');
		}
		else{
			btn_more.html('load more');
		}
		$('#port-load').slideToggle(600);
	});



	
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




	
$('.owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    center: true,
    margin:10,
    nav:false,
    dotsEach: true,
    startPosition: 1,
    dotClass: 'dot'
    
	});


	$("body").on('click', '[href*="#"]', function(e){
  		var fixed_offset = 100;
  		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  		e.preventDefault();
	});


	

});	


	