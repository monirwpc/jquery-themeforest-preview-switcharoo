/**
 * Product iframe
 * 
 * @Global Variable
 */
var iframeTarget = jQuery('.product-iframe'),
	winH         = jQuery(window).height(),
	frameH       = jQuery('.frame-wrap').height(),
	duration     = 500,
	easing       = 'linear';


/**
 * Document Ready Handler
 *
 * @these functions will be fire when ready window
 */
jQuery(document).ready(function(){
	"use strict";
	iframeHeight();
	viewportDesktop();
	viewportTablet();
	viewportMobile();
	iframeRemove();
});


/**
 * Window Resize Handler
 *
 * @these functions will be fire when resize window
 */
jQuery(window).on("resize", function(){
	iframeHeight();
});


/**
 * iframe Height
 *
 * @control iframe height when document ready
 */
function iframeHeight() {
	winH  = jQuery(window).height();
	iframeTarget.animate({ height: winH - frameH }, 250, easing);
}


/**
 * Desktop Viewport
 *
 * @iframe width will be changed to viewport width
 */
function viewportDesktop() {
	jQuery('.icon-desktop').click(function(e){
		e.preventDefault();
		iframeTarget.animate({ width: '100%' }, duration, easing);
	});
}


/**
 * Tablet Viewport
 *
 * @iframe width will be changed to tablet device | 768px width
 */
function viewportTablet() {
	jQuery('.icon-tablet').click(function(e){
		e.preventDefault();
		iframeTarget.animate({ width: "767px" }, duration, easing);
	});
}


/**
 * Mobile Viewport
 *
 * @iframe width will be changed to mobile device | 480px width
 */
function viewportMobile() {
	jQuery('.icon-mobile').click(function(e){
		e.preventDefault();
		iframeTarget.animate({ width: "480px" }, duration, easing);
	});
}


/**
 * Remove Viewport
 *
 * @remove iframe viewport and redirect to product main URI
 */
function iframeRemove() {
	jQuery('.icon-remove').click(function(e){
		if( confirm("Are you sure to remove this bar?") === false ) {
			e.preventDefault();
		} else {
			return;
		}
	});
}