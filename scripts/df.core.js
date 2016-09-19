var mPINEntering = [];
var maxCharCount = 600;
var selectedOfferID = '';
$(function () {

	//body click 
	$('body').on('click', function (e) {
		$('button.btn-quick-widget').removeClass('quick-widget-active');
		$('div.quick-widget-overlay').removeClass('widget-overlay-showing').animate({top:'-530px'}, 500, function () {
			//$(this).find('a.btn-quick-widget-close').fadeOut();
		});
	});

	//start your script here
	//quick menu options 
	$('body').on('click', 'div.header-actions button.btn-quick-widget', function (e) {
		e.stopPropagation();
		if (!$(this).hasClass('quick-widget-active')) {
			$(this).addClass('quick-widget-active');
			$('div.quick-widget-overlay').addClass('widget-overlay-showing').animate({top: '65px'}, 500, function () {
				//$(this).find('a.btn-quick-widget-close').show();
			});
		} else {
			$(this).removeClass('quick-widget-active');
			$('div.quick-widget-overlay').removeClass('widget-overlay-showing').animate({top:'-530px'}, 500, function () {
				//$(this).find('a.btn-quick-widget-close').fadeOut();
			});
		};
	});
	/*$('body').on('click', 'div.quick-widget a.btn-quick-widget-close', function (e) {
		/ *$(this).closest('div.quick-widget-overlay').find('a.btn-quick-widget-close').fadeOut(function(){
			$(this).closest('div.quick-widget-overlay').animate({top: '130px'});
		});* /
		$('div.quick-widget-overlay').animate({top:'-530px'}, 500, function () {
			$(this).find('a.btn-quick-widget-close').fadeOut();
		});
	});*/

	$('body').on('click', 'ul.lst-droid-tabs>li>a#tab-account', function (e) {
		if (!$(this).hasClass('tab-selected')) {
			$(this).closest('ul.lst-droid-tabs').find('a').removeClass('tab-selected');
			$(this).addClass('tab-selected');
			$(this).closest('div.tab-container').find('div.tab-section').hide();
			$('#tab-account-content').show();
			$('div#tab-recent-legend').hide();
		};
	});
	$('body').on('click', 'ul.lst-droid-tabs>li>a#tab-recent', function (e) {
		if (!$(this).hasClass('tab-selected')) {
			$(this).closest('ul.lst-droid-tabs').find('a').removeClass('tab-selected');
			$(this).addClass('tab-selected');
			$(this).closest('div.tab-container').find('div.tab-section').hide();
			$('#tab-recent-content').show();
			$('div#tab-recent-legend').show();
		};
	});
	$('body').on('click', 'a.show-autodismiss', function (e) {
		showMessages('error', 'Hey <b>User!</b><br/>Iam from FUTURE!!!', false);
	});
	//contact us selection
	$('body').on('click', 'ul.lst-contactus>li>a', function (e) {
		if (!$(this).hasClass('tab-selected')) {
			$(this).closest('ul.lst-droid-tabs').find('a').removeClass('tab-selected');
			$(this).addClass('tab-selected');
		}
	});

	var iOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if (iOSDevice) {
		//Form element watermark label animation
		$('body').on('touchstart', 'div.form-controller input, div.form-controller textarea', function (e) {
			$(this).addClass('input-focused').siblings('label').addClass('label-focused');
		});
		$('body').on('touchstart', 'div.form-controller label', function (e) {
			$(this).siblings('input, textarea').trigger('touchstart');
			//$(this).addClass('label-focused').siblings('input, textarea').addClass('input-focused').focus();
		});
		//lost focus input form element
		$('body').on('blur', 'div.form-controller input, div.form-controller textarea', function (e) {
			if (!$(this).val()) {
				$(this).removeClass('input-focused').siblings('label').removeClass('label-focused');
			};
		});

		//mPIN for iOS device 
		$('body').on('touchstart', 'div.btn-mpin-numbers button.btn-mpin-number', function(e) {
			//alert('mPINEntering = ' + mPINEntering.length);
			if (mPINEntering.length == 6) {
				//alert('mPINEntering DONE = ' + mPINEntering);
			} else {
				mPINEntering.push($(this).html());
				$('div.mpin-dots-line div.mpin-dot-' + mPINEntering.length).addClass('dot-filled');
			}
		});
		$('body').on('touchstart', 'div.mpin-dots-line button.btn-mpin-fill.btn-mpin-clear', function(e) {
			if (mPINEntering.length == 0) {
				//alert('ALL CLEARED');
			} else {
				$('div.mpin-dots-line div.mpin-dot-' + mPINEntering.length).removeClass('dot-filled');
				mPINEntering.pop();
			}
		});
		$('body').on('touchstart', 'div.btn-mpin-numbers button.btn-mpin-fill.btn-checknow', function(e) {
			getmPINEntered();
		});

	} else {
		//Form element watermark label animation
		$('body').on('click focus touchstart', 'div.form-controller input, div.form-controller textarea', function (e) {
			$(this).addClass('input-focused').siblings('label').addClass('label-focused');
		});
		$('body').on('click focus touchstart', 'div.form-controller label', function (e) {
			//$(this).siblings('input, textarea').trigger('focus, touchstart');
			$(this).addClass('label-focused').siblings('input, textarea').addClass('input-focused').focus();
		});
		//lost focus input form element
		$('body').on('blur', 'div.form-controller input, div.form-controller textarea', function (e) {
			if (!$(this).val()) {
				$(this).removeClass('input-focused').siblings('label').removeClass('label-focused');
			};
		});

		//mPIN 
		$('body').on('click', 'div.btn-mpin-numbers button.btn-mpin-number', function(e) {
			//alert('mPINEntering = ' + mPINEntering.length);
			if (mPINEntering.length == 6) {
				//alert('mPINEntering DONE = ' + mPINEntering);
			} else {
				mPINEntering.push($(this).html());
				$('div.mpin-dots-line div.mpin-dot-' + mPINEntering.length).addClass('dot-filled');
			}
		});
		$('body').on('click', 'div.mpin-dots-line button.btn-mpin-fill.btn-mpin-clear', function(e) {
			if (mPINEntering.length == 0) {
				//alert('ALL CLEARED');
			} else {
				$('div.mpin-dots-line div.mpin-dot-' + mPINEntering.length).removeClass('dot-filled');
				mPINEntering.pop();
			}
		});
		$('body').on('click', 'div.btn-mpin-numbers button.btn-mpin-fill.btn-checknow', function(e) {
			getmPINEntered();
		});
	};

	//char-counter
	$('body').on('keyup', 'div.form-controller.char-counter>textarea', function (e) {
		var currentCharCount = $(this).val().length;
		$(this).siblings('span.char-count').html(currentCharCount + '/' + maxCharCount);
	});
	//char-counter blur
	$('body').on('blur', 'div.form-controller.char-counter>textarea', function (e) {
		if ($(this).val().length == 0) {
			$(this).siblings('span.char-count').html('0/' + maxCharCount);
		};
	});

	//notification - remove list item 
	$('body').on('click', '.ux-listitem-close', function (e) {
		$(this).closest('li').remove();
	});

	 //Navigation Page Script // ---------- START---------------- 
	$('body').on('click', 'button.btn-menuitem-drop', function (e) {
		//console.log('btn-menuitem-drop clicked');
		// $('button.btn-menuitem-drop').toggleClass('anjana-btn-active');
		// $('div.menu-drop').toggleClass('anjana-div-active');

		if (!$(this).hasClass('btn-option-active')) {
			$(this).addClass('btn-option-active');
			$(this).siblings('div.menu-drop').addClass('menu-drop-showing');
			//console.log('sibling is showing');
		} else {
			$(this).removeClass('btn-option-active');
			$(this).siblings('div.menu-drop').removeClass('menu-drop-showing');
			//console.log('sibling is hiding');
		}
	});
	//Navigation Page Script // ---------- END---------------- 

	
	$('body').on('click', 'button.btn-navigation', function (e) {
		$('div.top-nav').show(1, function (e) {
			$('div.top-nav').animate({
			'top': 0
			}, 700, function (e) {
				//$('div.top-nav-close').css('position', 'fixed');
				$('body').css('overflow', 'hidden');
			});
		});
	});
	$('body').on('click', 'button.close-nav', function (e) {
		//$(this).closest('div.top-nav-close').css('position', 'absolute');
		$(this).closest('div.top-nav').animate({
			'top':'-700px'
		}, 700, function (e) {
			$(this).hide();
			$('button.btn-menuitem-drop').removeClass('btn-option-active');
			$('button.btn-menuitem-drop').siblings('div.menu-drop').removeClass('menu-drop-showing');
			$('body').css('overflow', 'auto');
		});
	});

	//offers details tab page
	/*$('body').on('click', 'div#offers-tabbing.tab-container ul.lst-droid-tabs>li>a', function (e) {
		var tabID = $(this).attr('id');
		if (!$(this).hasClass('tab-selected')) {
			$(this).closest('ul.lst-droid-tabs').find('a').removeClass('tab-selected');
			$(this).addClass('tab-selected');
			$(this).closest('div.tab-container').find('div.tab-section').hide();
			$('div#offers-tabbing.tab-container div#' + tabID + '-content').show();
		};
	});*/

	//offers sub tabs
	$('body').on('click', 'ul.lst-tabs-simple>li>a', function (e) {
		$('ul.lst-tabs-simple>li>a').removeClass('tab-selected');
		$(this).addClass('tab-selected');
		var tabIndex = $(this).parent('li').index();
		//console.log('$(this).parent(li).index()=' + );
		$(this).closest('div.tab2-container').find('div.tabs-simple-section div.tabs-simple-content').hide();
		$(this).closest('div.tab2-container').find('div.tabs-simple-section div.tabs-simple-content').eq(tabIndex).show();
	});

	//make payment card selection
	$('body').on('click', 'div.payment-card-selction>a.selection-tpin', function (e) {
		if (!$(this).hasClass('card-selection-active')) {
			$('div.payment-card-selction>a.selection-tpin').removeClass('card-selection-active');
			$('div.payment-card-selction div.card-tpin').slideUp();
			$(this).addClass('card-selection-active');
			$(this).siblings('div.card-tpin').slideDown();

			$('div.payment-card-selction').removeClass('payment-selected');
			$(this).closest('div.payment-card-selction').addClass('payment-selected');
		} else {
			$('div.payment-card-selction>a.selection-tpin').removeClass('card-selection-active');
			$('div.payment-card-selction div.card-tpin').slideUp();
			$('div.payment-card-selction').removeClass('payment-selected');
		}
	});

	//checkbox list
	$('body').on('click', 'div.options-check>ul.lst-options-check>li>a', function (e) {
		
		if ($(this).closest('ul.lst-options-check').hasClass('options-preselections')) {
			//alert('google');
			$(this).closest('ul.lst-options-check').find('a').removeClass('option-checked');
			$(this).closest('li').prevAll('li').andSelf().find('a').addClass('option-checked');
		} else if ($(this).closest('ul.lst-options-check').hasClass('options-singleselection')) {
			if (!$(this).hasClass('option-checked')) {
				$(this).closest('ul.lst-options-check').find('a').removeClass('option-checked');
				$(this).addClass('option-checked');
			} else {
				$(this).removeClass('option-checked');
			};
		} else {
			if (!$(this).hasClass('option-checked')) {
				$(this).addClass('option-checked');
			} else {
				$(this).removeClass('option-checked');
			};
		};
	});

	//scroll EPP tenure 
	/* //options-scrollable.options-check */
	$('div#modal-epp-calculator').on('shown.bs.modal', function() {
		checkListScrollable();
	})

	//talk to us 
	$('body').on('click', 'div.talk2us-section div.talk2us-button>a', function (e) {
		if (!$(this).hasClass('talk2us-active')) {
			$(this).addClass('talk2us-active');
			$(this).closest('div.talk2us-section').find('div.talk2us-content').addClass('talk2us-content-active').slideDown();
		} else {
			$(this).removeClass('talk2us-active');
			$(this).closest('div.talk2us-section').find('div.talk2us-content').removeClass('talk2us-content-active').slideUp();
		};
	});

	//offers - slide to offer category section 
	$('body').on('click', 'div.droid-tabs>ul#lst-offers-slide.lst-droid-tabs>li>a', function (e) {
		var categoryID = $(this).attr('id');
		var categoryName = categoryID.substring(categoryID.lastIndexOf('-') + 1);
		//alert('categoryName = ' + categoryName);
		var categoryHeading = '#section-' + categoryName;

		$('html, body').animate({scrollTop: $(categoryHeading).offset().top}, 500);
	});

	//offers - slide dropdown 
	$('body').on('change', 'div.offers-option-select select#select-offer-slide', function (e) {
		var categoryID = $(this).children('option:selected').attr('id');
		selectedOfferID = $(this).children('option:selected').attr('data-var');
		//alert(categoryID2);
		//callofferServiceCore(selectedOfferID);
		var categoryName = categoryID.substring(categoryID.lastIndexOf('-') + 1);
		//console.log('categoryName= ' + categoryName);
		var categoryHeading = '#section-' + categoryName;
		$('html, body').animate({scrollTop: $(categoryHeading).offset().top}, 500);
	});

	//Favorites 
	$('body').on('click', 'div.droid-tabs>ul#lst-favorite-list.lst-droid-tabs>li>a', function (e) {
		var categoryID = $(this).attr('id');
		var categoryName = categoryID.substring(categoryID.lastIndexOf('-') + 1);
		//alert('categoryName = ' + categoryName);
		var categoryHeading = '#section-' + categoryName;

		//$('html, body').animate({scrollTop: $(categoryHeading).offset().top}, 500);
	});

	$('body').on('click', 'ul.lst-droid-tabs.lst-favorite-play>li>a#tab-favall', function (e) {
		if (!$(this).hasClass('tab-selected')) {
			$(this).closest('ul.lst-droid-tabs').find('a').removeClass('tab-selected');
			$(this).addClass('tab-selected');
			$(this).closest('div.tab-container').find('div.tab-section').hide();
			$('div#tab-favall-content').show();
			$('div#add-fav-floater').show();
		};
	});
	$('body').on('click', 'ul.lst-droid-tabs.lst-favorite-play>li>a#tab-myfav', function (e) {
		if (!$(this).hasClass('tab-selected')) {
			$(this).closest('ul.lst-droid-tabs').find('a').removeClass('tab-selected');
			$(this).addClass('tab-selected');
			$(this).closest('div.tab-container').find('div.tab-section').hide();
			$('div#tab-myfav-content').show();
			$('div#add-fav-floater').hide();
		};
	});

	$('body').on('shown.bs.modal', '.modal', function (e) {
		$('body').css('overflow', 'hidden');
		$('div.page-wrapper').addClass('wrap-around');
	});
	$('body').on('hidden.bs.modal', '.modal', function (e) {
		$('body').css('overflow', 'auto');
		$('div.page-wrapper').removeClass('wrap-around');
	});

	mPINiP4fix();

	$('body').on('click', 'div.product-selector>ul.lst-product-selector>li>a', function (e) {
		if (!$(this).hasClass('product-selected')) {
			$(this).closest('div.product-hero').find('div.product-section').hide();
			$(this).closest('ul.lst-product-selector').find('a').removeClass('product-selected');
			$(this).addClass('product-selected');

			//$(this).find('img').attr('src', dfIconSource.replace(/-selected(\.[^.]+)?$/, '-static$1'));
			$('ul.lst-product-selector>li>a').each(function () {
				//console.log('=' + $(this).find('img').attr('src'));
				//var currentImageSourceEach = this.find('img').attr('src');
				var newSrcAttribute = $(this).find('img').attr('src');
				//console.log('newSrcAttribute = ' + newSrcAttribute);
				$(this).find('img').attr('src', newSrcAttribute.replace(/-selected(\.[^.]+)?$/, '-static$1'));
				//$(this).closest('ul.lst-product-selector').find('img').attr('src', currentImageSourceEach.replace(/-selected(\.[^.]+)?$/, '-static$1'));
			});

			var currentID = $(this).attr('id');
			productSelectorID = currentID.substring(9);

			// .replace(currentID, "selector-");
			$(this).closest('div.product-hero').find('div#prsec-' + productSelectorID).show();
			//nonDFDashboardNew();
			
			//console.log('productSelectorID = ' + productSelectorID);
			var productIndex = $(this).parent('li').index();
			
			var currentImageSource = $(this).find('img').attr('src');
			$(this).find('img').attr('src', currentImageSource.replace(/-static(\.[^.]+)?$/, '-selected$1'));
			
			//console.log('tabIndex = ' + tabIndex);

			/*if (currentID == 'selector-credit-cards') {
				createSliderNDFCreditCards();
			};

			if (currentID == 'selector-loan-cards') {
				createSliderNDFLoanCards();
			};

			if (currentID == 'selector-insurance-cards') {
				createSliderNDFInsuranceCards();
			};*/

			switch (productIndex) {
				case 0: 
					createSliderNDFCreditCards();
					//var dfIconSource = $(this).find('img').attr('src');
					//$(this).find('img').attr('src', currentImageSource.replace(/-static(\.[^.]+)?$/, '-selected$1'));
					break;
				case 1: 
					createSliderNDFLoanCards();
					//$(this).find('img').attr('src', currentImageSource.replace(/-static(\.[^.]+)?$/, '-selected$1'));
					break;
				case 2: 
					createSliderNDFInsuranceCards();
					//$(this).find('img').attr('src', currentImageSource.replace(/-static(\.[^.]+)?$/, '-selected$1'));
					break;
			}
		};
	});

	//apply card form - choose card type 
	$('body').on('click', 'div.applycard-selector>ul.lst-applycard-selector>li>label', function (e) {
		if ($(this).find('input').is(':checked')) {
			$(this).closest('ul.lst-applycard-selector').find('button').hide();
			$(this).closest('li').find('button').show();
		};
	});

	//go to login page 
	$('body').on('click', 'button#btn-gotodflogin', function (e) {
		$(this).html('Loading ...').addClass('ux-button-proccessing');
		setTimeout(gotologinpage, 1000);
	});

	$('body').on('click', 'button#btn-loginpageclose', function (e) {
		$('body').addClass('page-slideindown');
		setTimeout(gotolandingagain, 1000);
	});

	$('body').on('click', 'button#btn-gotodashboard', function (e) {
		$(this).html('Loading ...').addClass('ux-button-proccessing');
		setTimeout(function(){$('body').addClass('page-flipouty')}, 50);
		setTimeout(gotodashboard, 1000);
	});
});

function clearCharCount() {
	$('div.form-controller.char-counter>textarea').val('').removeClass('input-focused').siblings('label').removeClass('label-focused');
	$('div.form-controller.char-counter>textarea').siblings('span.char-count').html('0/200');
};

$( window ).resize(function() {
	//resize function
	fixFooterNonDF();
	fixMapHeight();
	mPINiP4fix();

	tabsScrollable();
});
function checkListScrollable () {
	//alert('it is');
	if ($('div.options-check').hasClass('options-scrollable')) {
		$('div.options-check.options-scrollable>ul.lst-options-check').each(function () {
			var sumofAllLi = 0;
			$(this).find('li').each(function () {
				sumofAllLi += $(this).width();
				sumofAllLi += 5;
			});
			$(this).width(sumofAllLi);
		});
	};
};
function mPINiP4fix () {
	if ($(window).width() <= 321) {
		$('div.colxsxs2').removeClass('col-xs-3').addClass('col-xs-2');
	} else {
		$('div.colxsxs2').addClass('col-xs-3').removeClass('col-xs-2');
	}
	/*if ($(window).height() >= 480) {
		$('div.btn-mpin-numbers').addClass('fix-at-bottom');
	} else {	
		$('div.btn-mpin-numbers').removeClass('fix-at-bottom');
	}*/
};
function closeAdBanner() {
	$('div#modal-adbanner').modal('hide');
};
function tabsScrollable() {
	/*var sumAllLi = 0;
	$('ul.lst-droid-tabs li').each( function () {
		sumAllLi += $(this).width();
	});
	sumAllLi += $('ul.lst-droid-tabs li').length * 20;
	$('ul.lst-droid-tabs').width(sumAllLi);*/
	if (!$('ul.lst-droid-tabs').hasClass('tabs-full')) {
		$('ul.lst-droid-tabs').each(function () {
			var sumAllLi = 0;
			$(this).find('li').each(function () {
				sumAllLi += $(this).width();
				sumAllLi += 20;
			});
			$(this).width(sumAllLi);
		});
	};
	if ($('ul.lst-droid-tabs').hasClass('tabs-full')) {
		$('ul.lst-droid-tabs').each(function () {
			var numOfLis = $(this).find('li').length;
			$(this).find('li').width(parseInt(96/numOfLis) + '%');
		});
	};
};
function offersSlider() {
	$('ul.lst-offers-slider.offers-full').each(function () {
		var sumAllOffersLi = 0;
		$(this).find('li').each(function () {
			sumAllOffersLi += $(this).width();
			sumAllOffersLi += 35;
		});
		$(this).width(sumAllOffersLi);
	});
};
offersSlider();
function newsSlider() {
	// var current
	// $('div.news-slider>ul.lst-news-slider>li').width();
	$('ul.lst-news-slider').each(function () {
		var sumAllLi = 0
				$(this).find('li').each(function () {
			sumAllLi += $(this).width();
			sumAllLi += 20;
		});
		$(this).width(sumAllLi);
	});
};
function createSlider(cardSlider) {
	/*var uxNextButton = $(cardSlider).find('div.swiper-button-next');
	var uxPrevButton = $(cardSlider).find('div.swiper-button-prev');*/
	var uxPagination = $(cardSlider).find('div.swiper-pagination');

	var swiper = new Swiper(cardSlider, {
		/*nextButton: uxNextButton,
		prevButton: uxPrevButton,*/
		pagination: uxPagination,
		paginationClickable: true
	});
	
	swiper.on('slideChangeStart', function () {
		var activeCard = $(cardSlider).find('div.swiper-slide-active').attr('id');
		console.log('slide change start = ' + activeCard);
		//console.log('swiper.activeIndex= ' + swiper.activeIndex);
	});
};
function fixFooterNonDF() {
	//fix-at-bottom.df-dash-footer
	($(window).height()>= 490) ? $('div.df-dash-footer').addClass('fix-at-bottom') : $('div.df-dash-footer').removeClass('fix-at-bottom');
	($(window).height()>= 490) ? $('div.fix-space-bottom').show() : $('div.fix-space-bottom').hide();
};

/* //ON PAGE LOAD SCRIPTS - WHERE YOU CALL THIS ? */
tabsScrollable();
newsSlider();
fixFooterNonDF();

//createSlider('div#NDFCardSlider');
//createSlider('div#NDFCardDetailSlider');

openAdBanner();

/*var timeToDisable = 3000; //mili-seconds
setTimeout(function(){ closeAdBanner(); }, timeToDisable);*/

function openAdBanner() {
	$('div#modal-adbanner').modal();
};
function showMessages(msgType, msgText, isAutoDismiss) {
	//dismiss current ALL in screen
   
	$('em.msg.msg-airfloat').remove();
	var setmsgClasses = ' msg msg-airfloat';
	var setmsgHTML = msgText;
	setmsgClasses += ' msg-' + msgType;
	if (isAutoDismiss) {
		setmsgClasses += ' msg-autodismiss';
	};
	$('<em>').attr('class', setmsgClasses).html(setmsgHTML).appendTo('body').hide().fadeIn();
	if (isAutoDismiss) {
		setTimeout(autoDismissMsgs, 4000);
		//$('.msg-autodismiss').fadeOut('slow');
	};
};
function fixMapHeight() {
	var windowHeight = $(window).height();
	
	/*$('div.page-wrapper').height(windowHeight);
	var pageWrapper = $('div.page-wrapper').height();

	console.log(windowHeight);
	console.log(pageWrapper);

	var sectionPageContent = parseInt(pageWrapper) - parseInt();
	$('div.tab-container').height(sectionPageContent);
	console.log(sectionPageContent);*/
	var headerHeight = $('header.global-header').innerHeight();
	var tabsHeight = $('div.droid-tabs').innerHeight();
	
	$('div.map-controller').height(windowHeight - (headerHeight + tabsHeight + 30));
}

function newsDetailsSlider() {
	var mySwiper = new Swiper('#news-details-slider', {
		speed: 400,
		spaceBetween: 100,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});
};

function pageProgressShow() {
	$('div.page-loader').fadeIn();
	$('body').css('overflow', 'hidden');
};
//hide loading overlay screen 
function pageProgressDone() {
	$('div.page-loader').fadeOut();
	$('body').css('overflow', 'auto');
};
var seconds = 10 * 1; //seconds x minutes 
var countdownTimer;
function secondPassed() {
	var minutes = Math.round((seconds - 30)/60);
	var remainingSeconds = seconds % 60;
	if (remainingSeconds < 10) {
		remainingSeconds = "0" + remainingSeconds;  
	}
	var countdownElement = document.getElementById('countdown');
	if (countdownElement) 
		countdownElement.innerHTML = minutes + ":" + remainingSeconds;
	else 
		return false;

	if (seconds == 0) {
		clearInterval(countdownTimer);
		//alert("OTP session timed out");
	} else {
		seconds--;
	}
};

function autoDismissMsgs(){
	//alert("autoDismissMsgs");
	$('.msg-autodismiss').fadeOut('slow');
	
};
/* //NEW MPIN code */
//btn-mpin-fill btn-checknow
//btn-mpin-numbers
//btn-mpin-number

/*$('body').on('click', 'div.btn-mpin-numbers>button.btn-mpin-number', function(e) {
	alert('emtgeromg');
	if (mPINEntering.length == 6) {
		alert('mPINEntering DONE = ' + mPINEntering);
	} else {
		mPINEntering.push($(this).html());
		$('div.mpin-dots-line div.mpin-dot-' + mPINEntering.length).addClass('dot-filled');
	}
});
$('body').on('click', 'div.mpin-dots-line button.btn-mpin-fill.btn-mpin-clear', function(e) {
	if (mPINEntering.length == 0) {
		alert('ALL CLEARED');
	} else {
		$('div.mpin-dots-line div.mpin-dot-' + mPINEntering.length).removeClass('dot-filled');
		mPINEntering.pop();
	}
});
$('body').on('click', 'div.btn-mpin-numbers button.btn-mpin-fill.btn-checknow', function(e) {
	getmPINEntered();
});

var mPINEntering = [];
*/
function getmPINEntered() {
	if (mPINEntering.length == 6) {
		//alert('Your Entered PIN is = ' + mPINEntering);
	} else {
		//alert('Please enter 6-digit PIN');
	}
};
function autoLogoutPopup() {
	var minutes = Math.round((seconds - 30)/60);
	var remainingSeconds = seconds % 60;
	if (remainingSeconds < 10) {
		remainingSeconds = "0" + remainingSeconds;  
	}
	var countdownElement = document.getElementById('countdown');
	if (countdownElement) 
		countdownElement.innerHTML = minutes + ":" + remainingSeconds;
	else 
		return false;

	if (seconds == 0) {
		clearInterval(countdownTimer);
		//alert("OTP session timed out");
	} else {
		seconds--;
	}
};
function callofferServiceCore() {
	//callofferService(selectedOfferID);
	selectedOfferIDparam = selectedOfferID;
	return selectedOfferIDparam;
};
function gototop () {
	$('html, body').animate({scrollTop: 0}, 0);
};

function nonDFDashboardNew() {
	createSliderNDFCreditCards();
	createSliderNDFLoanCards();
	createSliderNDFInsuranceCards();
};
function createSliderNDFCreditCards() {
	//swiper for credit cards 
	var swiperCreditCards = new Swiper('#mainslider-credit-cards', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	//swiperCreditCards.update();
	// alert('swiperCreditCards');
};
function createSliderNDFLoanCards() {
	//swiper for loan 
	var swiperLaonCards = new Swiper('#mainslider-loan-cards', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	//swiperLaonCards.update();
	// alert('swiperLaonCards');
};
function createSliderNDFInsuranceCards() {
	//swiper for insurance 
	var swiperInsuranceCards = new Swiper('#mainslider-insurance-cards', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	//swiperInsuranceCards.update();
	// alert('swiperInsuranceCards');
};
function nonDFDashOffers() {
	//swiper for credit cards 
	var swiperDashOffer = new Swiper('#dash-offerslider', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay: 2500
	});
	//swiperDashOffer.update();
};
function startPage() {
	$('div.splash-center-logo').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
		$('body').addClass('page-zoomout');
		setTimeout(function(){pageTwo();}, 800);
	});
};
function gotonextpage(pagename) {
	//console.log('gotonextpage');
};
function pageTwo() {
	$('body').removeClass().load('landing.html');
};
function gotologinpage() {
	$('body').removeClass().load('login.html');
};
function gotolandingagain() {
	$('body').removeClass().load('landing.html');
};
function gotodashboard() {
	$('body').removeClass().load('dashboard.html');
};
function favOverlayActions() {
	//Favorite list toggle 
	$('body').on('click', 'div.fav-overlay>div.fav-action>a.btn-fav-action', function (e) {
		if (!$(this).hasClass('fav-is-active')) {
			$(this).addClass('fav-is-active');
			$('div.fav-overlay-bg').fadeIn();
			$(this).closest('div.fav-overlay').animate({right: 0}, 380);
			$('body').css('overflow', 'hidden');
		} else {
			$(this).removeClass('fav-is-active');
			$(this).closest('div.fav-overlay').animate({right: '-80%'}, 380);
			$('div.fav-overlay-bg').fadeOut();
			$('body').css('overflow', 'auto');
		};
	});
	$('body').on('click', 'div.fav-overlay-bg', function (e) {
		$('div.fav-overlay>div.fav-action>a.btn-fav-action').trigger('click');
	});
};
function moreOptionLanding() {
	//dashboard new more options 
	$('body').on('click', 'div.quick-access-options>div.quick-access-icon>a.btn-quick-access', function (e) {
		if (!$(this).hasClass('quickaccess-is-active')) {
			$(this).addClass('quickaccess-is-active');
			$('div.quick-access-options-overlay-bg').fadeIn();
			$(this).closest('div.quick-access-options').animate({bottom: '-1px'}, 380);
			$('body').css('overflow', 'hidden');
		} else {
			$(this).removeClass('quickaccess-is-active');
			$(this).closest('div.quick-access-options').animate({bottom: '-230px'}, 380);
			$('div.quick-access-options-overlay-bg').fadeOut();
			$('body').css('overflow', 'auto');
		};
	});
	$('body').on('click', 'div.quick-access-options-overlay-bg', function (e) {
		$('div.quick-access-options>div.quick-access-icon>a.btn-quick-access').trigger('click');
	});
};
function quickBalanceCheck() {
	//quick widget available balance
	$('body').on('click', 'div.widget-balance a.widget-button', function (e) {
		//$(this).siblings('div.balance-details').show();
		if (!$(this).hasClass('balance-showing')) {
			$(this).addClass('balance-showing');
			$(this).siblings('div.balance-details').show();
		} else {
			$(this).removeClass('balance-showing');
			$(this).siblings('div.balance-details').hide();
		}
	});
};