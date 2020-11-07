$(document).ready(function () {

	$('#nav-toggle').click(function (event) {
		$('#nav-list').slideToggle('slow');
	});

	// $('.nav-list-item').hover(function() {
	// 	$('.nav-list-item').each(function(index, el) {
	// 		$(this).removeClass(' list-item-active  ', 500);
	// 	});
	// 	$(this).addClass('list-item-active ', 500);
	// }, function() {
	// 	$('.nav-list-item').each(function(index, el) {
	// 		$(this).removeClass(' list-item-active', 2000);
	// 	});
	// 	$('#home-a').addClass(' list-item-active',2000);
	// }).click(function(event) {
	// 	$('#nav-list').slideUp('slow');
	// });



	var btn_more = $('#load-more')
	btn_more.click(function (event) {
		if (btn_more.html() == 'загрузить ещё') {
			btn_more.html('скрыть');
		}
		else {
			btn_more.html('загрузить ещё');
		}
		$('#port-load').slideToggle(600);
	});




	var btn_up = $('.btn-up');
	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= 250) {
			btn_up.fadeIn();
		}
		else {
			btn_up.fadeOut();
		}
	});

	btn_up.on('click', function (event) {
		$('html,body').animate({ 'scrollTop': 0 }, 900);
	});





	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 1,
		center: true,
		margin: 10,
		nav: false,
		dotsEach: true,
		startPosition: 1,
		dotClass: 'dot'

	});


	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 100;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});


	// let ctx = document.getElementById('myChart');


	// let user_a = new Image();
	// user_a.src = 'http://i.imgur.com/fwhrCBs.png';


	// <td><img src="img/xd.png" alt=""></td>
	// <td><img src="img/ae.png" alt=""></td>
	// <td><img src="img/ps.png" alt=""></td>
	// <td><img src="img/ai.png" alt=""></td>

	// let myChart = new Chart(ctx, {
	// 	type: 'bar',
	// 	data: {
	// 		labels: ['XD', 'AE', 'PS', 'Ai',],
	// 		datasets: [{
	// 			// label: '# of Votes',
	// 			data: [80, 90, 70, 60],
	// 			backgroundColor: [
	// 				'rgba(255, 99, 132, 0.2)',
	// 				'rgba(54, 162, 235, 0.2)',
	// 				'rgba(255, 206, 86, 0.2)',
	// 				'rgba(75, 192, 192, 0.2)',

	// 			],
	// 			borderColor: [
	// 				'rgba(255, 99, 132, 1)',
	// 				'rgba(54, 162, 235, 1)',
	// 				'rgba(255, 206, 86, 1)',
	// 				'rgba(75, 192, 192, 1)',

	// 			],
	// 			borderWidth: 1
	// 		}]
	// 	},
	// 	options: {
	// 		scales: {
	// 			yAxes: [{
	// 				ticks: {
	// 					// Include a dollar sign in the ticks
	// 					callback: function (value, index, values) {
	// 						return '$' + value;
	// 					}
	// 				}
	// 			}]
	// 		},
	// 		legendCallback: function (chart) {
	// 			let a = generateLegend();
	// 			console.log(a);

	// 		}
	// 	}
	// });






});


