$(document).on('ready', function() {
  

	$('.input-name').on('click', function(){
		$(this).hide().replaceWith('<input>').css

	});

	$('.about-me').on('click', function(){
		$(this).hide().replaceWith('<textarea class="about-me-box"></textarea>')
			$('.about-me').on('blur', function(){
				$(this).val()
			});
	});











});