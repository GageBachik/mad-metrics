$(document).on('ready', function() {
	setTimeout(function(){
		var distanceScrolled = 0;
		var percentageViewed = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
		var initialScroll = window.scrollY;
		var totalTimeSpent = 0;
		var timeBeforeSignUp = 0;
		var sections = [];

		$('.content-container:nth-child(3n+3)').on('mouseover', function(){
			if(sections.length === 0){
				sections.push('Section1:')
			}else{
				sections.push('Section' + (1 + sections.length) + ':');
			}
			var pause = setInterval(function(){
				
			},1000);

		});


		$(document).on('scroll', function(){
			var formatted = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
			var movedTo = window.scrollY;
			if(initialScroll !== movedTo){
				distanceScrolled += Math.abs(initialScroll-movedTo);
				// console.log(distanceScrolled);
				initialScroll = movedTo;
			}
			if (formatted > percentageViewed){
				percentageViewed = formatted;
			}
			// console.log(percentageViewed);
			// console.log(distanceScrolled);
			// clearTimeout(pause);
		});

		$('a').on('click', function(){
			if(timeBeforeSignUp === 0){
				timeBeforeSignUp = totalTimeSpent;
			}
		});

	},1);
});