$(document).ready(function () {
    svg4everybody({});
	 $('.slider').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
      dots: true,
      initialSlide: 7, 
	  asNavFor: '.preview',
	  adaptiveHeight: true,
	  responsive: [
	  	{
	      breakpoint: 767,
	      settings: {
	        arrows: false,
	        fade: true,
	        dots: false,
	      }
	    }
	  ]
	});
	$('.preview').slick({
	  mobileFirst: true,
	  slidesToShow: 3,
	  asNavFor: '.slider',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true,
	  initialSlide: 7,
	   responsive: [
	  	{
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 5
	      }
	    }
	  ]

	});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
   function init() {
	    var myMap = new ymaps.Map("map", {
	            center: [-37.813740, 144.963033],
	            zoom: 14,
	            controls: ['zoomControl',  'typeSelector',  'fullscreenControl']
	        }, {
	            searchControlProvider: 'yandex#search'
	        });

	    myMap.geoObjects

	        .add(new ymaps.Placemark([-37.813740, 144.963033], 
	        {
	            balloonContent: 'цвет <strong>голубой</strong>'
	        }, 
	        {
	            //preset: 'islands#redFoodIcon',
	            preset: 'islands#orangeFoodIcon',
	            iconCaptionMaxWidth: '10'
	        }));
	}


	//scrollspy


    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing');
    });


    //menu-close

    $('.nav-link').click(function(event) {
    	if ($(window).width() < 768) {
    		$('.navbar-toggler').click();
    	}
    });


	wow = new WOW(
        {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       20,          // default
          mobile:       true,       // default
          live:         true        // default
        })
    wow.init();


window.onload = function(){
	$('#preloader').css('display','none');
}


	








});


