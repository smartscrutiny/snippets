/* 
------------------------------
Sometimes you want one div to change its width based on the width of another div.
If the divs are changing their dimensions based on the browser size, this can be tricky!
Here's a way to do it with jQuery. #div2ID is the div you want to resize, based on the
width of #div1ID. The same can be done with div height.
See it in action at https://jsfiddle.net/smartscrutiny/scbuy4hv/18/.
------------------------------
*/

jQuery(document).ready(function ($) {	

	//sets header at correct size to view all header elements
	let div1width = $('#div1ID').width();
	let div2width = div1width+"px";
	$("#div2ID").css("width", div2width);


	//handles broswer resizes
	$( window ).resize(function() {

	//sets header at correct size to view all header elements
	let div1width = $('#div1ID').width();
	let div2width = div1width+"px";
	$("#div2ID").css("width", div2width);

	});

});
