
$(document).ready(function(){
	// Sticky elements
    $("#sticker").sticky({topSpacing:30,getWidthFrom:'.large-2'});
    $("#stickersub").sticky({topSpacing:30,getWidthFrom:'.right-sidebar'});
    $("#content").fitVids();
    
	 // Scroll to top  
	$('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});

	// jPanel mobile menu
	var jPM = $.jPanelMenu({
	    menu: '#menu',
	    trigger: '.menu-trigger',
	    duration: 300
	});
	jPM.on();

	// Cloning for mobile browsers
	var $clonelogo = $('#logo').clone();
	$("#mobile-header").append($clonelogo);

	var $cloneintro = $('#intro').clone();
	$("#mobile-header").append($cloneintro);

	var $cloneintro = $('#social-icons').clone();
	$("#jPanelMenu-menu").append($cloneintro);

 });
  