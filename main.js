$(document).on('ready', function() {

	var percentageViewed = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
	$(document).on('scroll', function(){
		var formatted = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));

		if (formatted > percentageViewed){
			percentageViewed = formatted;
		}
		// console.log(percentageViewed);
	});

});