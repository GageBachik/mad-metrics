$(document).on('ready', function() {
	var distanceScrolled = 0;
	var percentageViewed = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
	var initialScroll = window.scrollY;

	
	$(document).on('scroll', function(){
		var formatted = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
		var movedTo = window.scrollY;
		if(initialScroll !== movedTo){
			distanceScrolled += Math.abs(initialScroll-movedTo);
			console.log(distanceScrolled);
			initialScroll = movedTo;
		}
		if (formatted > percentageViewed){
			percentageViewed = formatted;
		}
		// console.log(percentageViewed);
		// console.log(distanceScrolled);
	});

});