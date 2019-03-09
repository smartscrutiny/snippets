/* 
------------------------------
Bootstrap's grid handles most browser resize issues beautifully, but I ran into a situation 
where I really needed a div with a col-md-9 class to change dynamically to a div with a col-md-12 class at certain
browser sizes only. I gave these divs an id of #jquery-target. This jQuery snippet did the trick. See it in action at http://jsfiddle.net/smartscrutiny/b3q0gwds/10/.
------------------------------
*/

jQuery(document).ready(function ($) {	

	//changes Bootstrap column class at certain browser sizes
	if (($(window).width() > 676) && ($(window).width() < 1414)) {
  		$("#jquery-target").attr('class', 'col-md-12');
	}
	else {
	$("#jquery-target").attr('class', 'col-md-9');
	}


	//handles broswer resizes
	$( window ).resize(function() {

		//changes Bootstrap column class at certain browser sizes
		if (($(window).width() > 676) && ($(window).width() < 1414)) {
	  		$("#jquery-target").attr('class', 'col-md-12');
		}
		else {
		$("#jquery-target").attr('class', 'col-md-9');
		}

	});

});
