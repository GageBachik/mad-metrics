$(document).on('ready', function() {
	setTimeout(function(){
		var distanceScrolled = 0;
		var percentageViewed = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
		var initialScroll = window.scrollY;
		var totalTimeSpent = 0;
		var timeBeforeSignUp = 0;
		var sections = [];
		var sectionCount = 0;

		var section = setInterval(function(){
			sectionCount++;
			sections[0] = sectionCount;
		},1000);

		$('.content-container:nth-child(3n+3)').on('mouseleave', function(){
			clearTimeout(section);
			sectionCount = 0;
			section = setInterval(function(){
				sectionCount++;
				sections[sections.length] = sectionCount;
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
			console.log(sections);
		});

		$('a').on('click', function(e){
			e.preventDefault();
			if(timeBeforeSignUp === 0){
				timeBeforeSignUp = totalTimeSpent;
			}
		});

	},1);
});