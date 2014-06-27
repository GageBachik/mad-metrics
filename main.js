	/*Healtmap*/

	window.onload = function(){
 
    // heatmap configuration
    var config = {
        element: document.body,
        radius: 30,
        opacity: 50  
    };
    
    //creates and initializes the heatmap
    var heatmap = h337.create(config);
 
    var active = true,
        idle = false,
        over = false,
        x = 0,
        y = 0,
        simulate = false;
 
    // activate capture mode
    setInterval(function(){
        active = true;
    }, 80);
 
    // check whether the mouse is idling
    var idlechecker = setInterval(function(){
        if(over && !simulate){
            // if it's idling -> start the simulation 
            // and add the last x/y coords
            simulate = setInterval(function(){
                heatmap.store.addDataPoint(x, y, 1);
            }, 1000);
        }
    }, 150);
        
    var add = function(e){
        x = e.layerX;
        y = e.layerY
        heatmap.store.addDataPoint(x, y, 1);
    };
 
    var element = document.body;
 
    element.onmousemove = function(e){
        over = true;
        if(simulate){
            clearInterval(simulate);
            simulate = false;
        }
 
        if(active){
            add(e);
            active = false;
        }
    };
    element.onclick = function(e){
        add(e);
    };
    element.onmouseout = function(){
        over = false;
    };
};

$(document).on('ready', function() {
	setTimeout(function(){
		$('canvas').hide();
		var distanceScrolled = 0;
		var percentageViewed = ((((window.scrollY + $(window).height()) / $(document).height())*100).toFixed(2));
		var initialScroll = window.scrollY;
		var timeBeforeSignUp = 0;
		var sections = [0,0,0,0];
		var fourth = ($(document).height()-$(window).height()) / 4 ;

		var section = setInterval(function(){
			sections[0] += 1;
		},999);

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
				if(formatted >= 98){
					percentageViewed = 100;
				} else{
					percentageViewed = formatted;
				}
			}
			// console.log(percentageViewed);
			// console.log(distanceScrolled);
			// clearInterval(section);
			// console.log(sections);
		});

		$('a').on('click', function(e){
			e.preventDefault();
			var total = 0;
			console.log(sections);
			$.each(sections,function() {
			    total += this;
			});
			if(timeBeforeSignUp === 0){
				timeBeforeSignUp = total;
			}
		});

		$('button').on('click', function(){
			var total = 0;
			console.log(sections);
			$.each(sections,function() {
			    total += this;
			});
			var formatted = '--- Time Spent On Each Section --- \n Section 1: ' + sections[0] + ' Seconds \n' + 'Section 2: ' + sections[1] + ' Seconds \n' + 'Section 3: ' + sections[2] + ' Seconds \n' + 'Section 4: ' + sections[3] + ' Seconds \n'
			$('canvas').toggle();
			alert('Distance Scrolled: '+distanceScrolled +' Pixels\n Percentage Viewed: '+percentageViewed+ ' %\nTime Before Signup: '+timeBeforeSignUp+' Seconds \n Time Spent On Page: ' + total + ' Seconds \n \n' + formatted );
			$('canvas').toggle();
		});
	},1);
});