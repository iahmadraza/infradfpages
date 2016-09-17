//df.animate.js
(function($){
	//
})(jQuery);
function startPage() {
	//local storage check

	//1- start
	//animation end 
	/*$('div.splash-center-logo').on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		console.log('transition done...');
	});*/

	$('div.splash-center-logo').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		console.log('animation done...');

		//go to next page (pagename)
		//setTimeout($('body').addClass('page-bounceindown'), 3000);
		//setTimeout($('body').addClass('page-zoomin'), 3000);
		//setTimeout($('div.splash-center-logo').addClass('el-zoomfade'), 3000);
		pageTwo();
		//setTimeout(gotonextpage('landing.html'), 3000);
	});

	$('div.sp-skyline2').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		console.log('animation SKYLINE done...');
	});

	/*$('div.splash-center-logo').load('dashboard.html', function() {
		alert('Load was performed.');
	});*/
};
function gotonextpage(pagename) {
	//console.log('gotonextpage');
	//window.location.href = pagename;
};
function pageTwo() {
	//
	$('body').load('dashboard.html');
};