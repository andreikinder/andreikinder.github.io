$(document).ready(function () {
    //svg4everybody({});
    $('.carousel').carousel();
    $('body').scrollspy({ target: '#navbar' });

     ymaps.ready(function () {  
    var map = new ymaps.Map("mapCont__map", {
      center: [55.664538, 37.473483], 
      zoom: 17,
      controls: []

    });

  	var myPlacemark = new ymaps.Placemark([55.664538, 37.473483], 
  		{
  			// balloonContentHeader: 'Bargain',
   	 // 		balloonContentBody: '<p>Юридическая фирма «Bargain» объединяет высококвалифицированных юристов и адвокатов. </p>',
    	// 	balloonContentFooter: 'г. Москва, ул. Покрышкина, д.23',
    	// 	hintContent: 'Нажмите, чтобы узнать больше.'
    	},
    	{
   			preset: 'islands#violetDotIcon'
		}
	);



  	var zoomControl = new ymaps.control.ZoomControl({
    options: {
        layout: 'round#zoomLayout'
    }
	});
	map.controls.add(zoomControl);
  	map.behaviors.disable('scrollZoom');
  	map.behaviors.disable('drag');
  	map.geoObjects.add(myPlacemark); 



  });



$("a.scrollto").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1300);
    return false;
  });


      // grab the initial top offset of the navigation 
        var stickyNavTop = $('.navWrapper').offset().top;
        
        // our function that decides weather the navigation bar should have "fixed" css position or not.
        var stickyNav = function(){
          var scrollTop = $(window).scrollTop(); // our current vertical position from the top
               
          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) { 
              $('.navWrapper').addClass('sticky');
          } else {
              $('.navWrapper').removeClass('sticky'); 
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });


     $('.scrollto').click(function(event) {
      if ($('.navbar-collapse').hasClass('show')){
        $('.navbar-collapse').removeClass('show');
      };
  
     });














   var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       40,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();


});