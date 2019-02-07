$(document).ready(function () {
    svg4everybody({});

   
    // Slideout menu
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
	 	'side': 'left'
	});
	// Toggle button
      document.querySelector('.navbar-toggler').addEventListener('click', function() {
        slideout.toggle();
     });

    //Close  button
     $('.slide_close').click(function(event) {
     	 slideout.close();
     });
	


});