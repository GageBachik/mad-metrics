$(document).on('ready', function() {
	setTimeout(function(){
		var distanceScrolled = 0;
		var percentageViewed = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
		var initialScroll = window.scrollY;
		var totalTimeSpent = 0;
		var timeBeforeSignUp = 0;
		var sections = [0,0,0,0];
		var fourth = ($(document).height()-$(window).height()) / 4 ;

		var section = setInterval(function(){
			sections[0] += 1;
		},1000);

		var interval = setInterval(function() {
			clearInterval(section);
			var movedTo = window.scrollY;
			if (movedTo === 0){
				section = setInterval(function(){
					sections[0] += 1;
				},1000);
			}else if(movedTo > fourth && movedTo < (fourth*2)){
				section = setInterval(function(){
					sections[1] += 1;
				},1000);				
			}else if(movedTo >= (fourth*2) && movedTo < (fourth*3)){
				section = setInterval(function(){
					sections[2] += 1;
				},1000);	
			} if(movedTo <= (fourth*4) && movedTo > (fourth*3)){
				section = setInterval(function(){
					sections[3] += 1;
				},1000);
			}
		}, 1001);

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
			// clearInterval(section);
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