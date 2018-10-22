"use strict";
/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
jQuery(document).on('ready', function() {
	/* -------------------------------------
			NAVIGATION
	-------------------------------------- */
	jQuery("#tg-navbutton").on('click', function(){
		jQuery(this).toggleClass("tg-navbuttonout");
		jQuery(".mobile-inner-nav").slideToggle(250);
	});
	jQuery(".tg-btnnavclose").on('click', function(){
		jQuery(this).toggleClass("tg-navbuttonoutclick tg-navbuttonout");
		jQuery(".mobile-inner-nav").slideToggle(250);
	});
	jQuery(".tg-navigation ul li a").each(function( index ) {
		jQuery( this ).css({'animation-delay': (index/10)+'s'});
	});
	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu(){
		jQuery('li.tg-hasdropdown').prepend('<span class="tg-dropdowarrow"><i class="fa fa-angle-right"></i></span>');
		jQuery('li.tg-hasdropdown span').on('click', function() {
			jQuery(this).next().next().slideToggle(300);
			jQuery(this).parent('li.tg-hasdropdown').toggleClass('tg-open');
		});
	}
	collapseMenu();
	/* -------------------------------------
			HOME BANNER 1
	-------------------------------------- */
	jQuery("#tg-homeslider").owlCarousel({
		autoPlay: false,
		pagination:false,
		navigation : true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
		itemsCustom : [
			[1200, 4],
			[1024, 3],
			[640, 2],
			[0, 1],
		],
	});
	/* -------------------------------------
			BANNER SLIDER 2
	-------------------------------------- */
	jQuery("#tg-mainslider").owlCarousel({
		autoPlay: false,
		singleItem: true,
		pagination:false,
		navigation : true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/*------------------------------------------
			SERVICES PAGE
	------------------------------------------*/
	setTimeout(function(){
		if(jQuery('#tg-multiscroll').length > 0){
			jQuery('#tg-multiscroll').multiscroll({
				css3: true,
				touchSensitivity: 5,
				leftSelector: '.tg-leftsection',
				rightSelector: '.tg-rightsection',
				sectionSelector: '.tg-sectioncontent',
				afterResize: function(){
					if (jQuery(window).width() <= 899){
						jQuery.fn.multiscroll.destroy();
					}else{
						jQuery.fn.multiscroll.build();
					}
				}
			});
			jQuery('body').addClass('tg-responsive');
		};
		/*------------------------------------------
				SERVICE SCROLL BAR
		------------------------------------------*/
		jQuery(".tg-servicesscroll").mCustomScrollbar({
			axis:"y",
		});
		/* -------------------------------------
				SERVICE HOVER
		-------------------------------------- */
		jQuery('.tg-service').on('mouseenter', function (event) {
			var _this = jQuery(this);
			var _current = _this.find('.tg-servicedata');
			jQuery(_current).slideToggle();
		});
		jQuery('.tg-service').on('mouseleave', function (event) {
			var _this = jQuery(this);
			var _current = _this.find('.tg-servicedata');
			jQuery(_current).slideToggle();
		});
		/* -------------------------------------
				PROFESSIONALS SLIDER
		-------------------------------------- */
		jQuery(".tg-ourprofessionalslider").owlCarousel({
			autoPlay: false,
			singleItem: true,
			pagination:false,
			navigation : true,
			navigationText: [
				"<i class='tg-btnnext fa fa-angle-left'></i>",
				"<i class='tg-btnprev fa fa-angle-right'></i>"
			],
		});
		/* -------------------------------------
				PROGRESS BAR
		-------------------------------------- */
		try {
			jQuery('.tg-skillgroups').appear(function () {
				jQuery('.tg-skillholder').each(function () {
					jQuery(this).find('.tg-skillbar').animate({
						width: jQuery(this).attr('data-percent')
					}, 2500);
				});
			});
		} catch (err) {}
	}, 1000);
	/* -------------------------------------
			TESTIMONIAL SLIDER
	-------------------------------------- */
	jQuery(".tg-testimonialslider").owlCarousel({
		navigation : false,
		singleItem: true,
		autoPlay: false,
		pagination:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			WHY CHOOSE US SLIDER
	-------------------------------------- */
	jQuery(".tg-whychooseusslider").owlCarousel({
		navigation : false,
		singleItem: true,
		autoPlay: false,
		pagination:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			CLIENT SLIDER
	-------------------------------------- */
	jQuery(".tg-clientslider").owlCarousel({
		paginationSpeed : 400,
		navigation : false,
		slideSpeed : 300,
		singleItem:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			PORTFOLIO SLIDER
	-------------------------------------- */
	jQuery("#tg-portfolioslider").owlCarousel({
		paginationSpeed : 400,
		navigation : false,
		slideSpeed : 300,
		singleItem:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			PORTFOLIO SLIDER
	-------------------------------------- */
	jQuery("#tg-portfolioslider2").owlCarousel({
		paginationSpeed : 400,
		navigation : false,
		slideSpeed : 300,
		singleItem:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			PORTFOLIO SLIDER
	-------------------------------------- */
	jQuery("#tg-portfolioslider3").owlCarousel({
		paginationSpeed : 400,
		navigation : false,
		slideSpeed : 300,
		singleItem:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			PORTFOLIO SLIDER
	-------------------------------------- */
	jQuery("#tg-portfolioslider4").owlCarousel({
		paginationSpeed : 400,
		navigation : false,
		slideSpeed : 300,
		singleItem:true,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	/* -------------------------------------
			PORTFOLIO MODAL SLIDER
	-------------------------------------- */
	var sync1 = jQuery("#tg-portfoliodetailslider");
	var sync2 = jQuery("#tg-portfoliosliderthumbs");
		sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: true,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200,
		navigationText: [
			"<i class='tg-btnnext fa fa-angle-left'></i>",
			"<i class='tg-btnprev fa fa-angle-right'></i>"
		],
	});
	sync2.owlCarousel({
		items : 5,
		itemsDesktop      : [1199,10],
		itemsDesktopSmall     : [979,10],
		itemsTablet       : [768,8],
		itemsMobile       : [479,4],
		pagination:false,
		responsiveRefreshRate : 100,
		afterInit : function(el){
		el.find(".owl-item").eq(0).addClass("synced");
		}
	});
	function syncPosition(el){
		var current = this.currentItem;
		jQuery("#tg-portfoliosliderthumbs")
		.find(".owl-item")
		.removeClass("synced")
		.eq(current)
		.addClass("synced")
		if(jQuery("#tg-portfoliosliderthumbs").data("owlCarousel") !== undefined){
		center(current)
		}
	}
	jQuery("#tg-portfoliosliderthumbs").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = jQuery(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});
	function center(number){
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for(var i in sync2visible){
			if(num === sync2visible[i]){
				var found = true;
			}
		}
		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		}else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		}else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}
	}
	/* -------------------------------------
			BLOG GRID SLIDER
	-------------------------------------- */
	jQuery("#tg-bloggridslider").owlCarousel({
		autoPlay: false,
		pagination:true,
		navigation : false,
		itemsCustom : [
			[1200,2],
			[992, 2],
			[768, 1],
			[481, 2],
			[0, 1],
		],
	});
	/* -------------------------------------
			BLOG LIST SLIDER
	-------------------------------------- */
	jQuery("#tg-bloglistslider").owlCarousel({
		autoPlay: false,
		pagination:true,
		navigation : false,
		singleItem:true
	});
	/* -------------------------------------
			CHECKBOX SCROLL
	-------------------------------------- */
	jQuery("#tg-themescrollbar").mCustomScrollbar({
		axis:"y",
	});
	/* --------------------------------------
			Google Map
	-------------------------------------- */
	var gmapStyles = [
		{"featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		{"featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }]},
		{"featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "on" }]},
		{"featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }]},
		{"featureType": "water", "elementType": "labels.text", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"},{"color": "#2b2b2b"}]},
		{"featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#333" }]},
		{"featureType": "administrative", "elementType": "labels", "stylers": [{ "color": "#333" }]},
		{"featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "color": "#333" }]},
		{"featureType": "transit.line", "stylers": [ { "visibility": "off" }]},
		{"featureType": "landscape.natural", "stylers": [ { "visibility": "off" }]},
		{"featureType": "landscape.natural", "stylers": [ { "visibility": "on" },{ "color": "#2b2b2b" }]},
		{"featureType": "administrative.province", "elementType": "geometry", "stylers": [{ "color": "#2b2b2b" }]},
		{"elementType": "geometry.fill", "stylers": [ { "color": "#2b2b2b" }]},
		{"featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "off" }]},
		{"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }]},
		{"featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
		{"featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
	]
	jQuery(".tg-location-map").gmap3({
		marker: {
			address: "1600 Elizabeth St, Melbourne, Victoria, Australia",
			options: {
				title: "Robert Frost Elementary School",
				icon: "images/mapmarker.png",
			}
		},
		map: {
			options: {
				zoom: 12,
				styles: gmapStyles,
				scaleControl: true,
				scrollwheel: false,
				mapTypeControl: false,
				disableDefaultUI: true,
				navigationControl: false,
				streetViewControl: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			COUNTER
	-------------------------------------- */
	try {
		jQuery('.tg-counters').appear(function () {
			jQuery('.tg-timer').countTo()
		});
	} catch (err) {}
});