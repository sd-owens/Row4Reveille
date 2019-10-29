$(document).ready(function() {
	// const headerHeight = $('.navbar').outerHeight(); // Target your header navigation here

	$('#logo-splash a').click(function(e) {
		const targetHref = $(this).attr('href');

		$('html, body').animate(
			{
				scrollTop: $(targetHref).offset().top // - headerHeight
			},
			500
		);

		e.preventDefault();
	});
});

// jQuery(document).ready(function() {
// 	$('#test').click(function(e) {
// 		alert('Clicked');

// 		e.preventDefault();
// 	});
// });
