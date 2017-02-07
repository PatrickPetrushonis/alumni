$(document).ready(function() {
	$(document).on('click', '.header__nav-toggle input', function() {
		var nav = $(this).closest('.main__container').find('.nav__container');

		if($(this).prop('checked') == true) {
			nav.addClass('nav__visible');
		}
		else {
			nav.removeClass('nav__visible');
		}
	});
});