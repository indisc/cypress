
$(document).ready(function(){
	// Sticky elements
    $("#sticker").sticky({topSpacing:30,getWidthFrom:'.large-2'});
    $("#stickersub").sticky({topSpacing:30,getWidthFrom:'.right-sidebar'});
    $("#content").fitVids();

	// jPanel mobile menu
	var jPM = $.jPanelMenu({
	    menu: '#menu',
	    trigger: '.menu-trigger',
	    duration: 300,
        excludedPanelContent: "#barley-bar, .barley-bar-modal"
	});
	jPM.on();

	// Cloning for mobile browsers
	var $clonelogo = $('#logo').clone();
	$("#mobile-header").append($clonelogo);

	var $cloneintro = $('#intro p').clone();
	$("#mobile-header").append($cloneintro);

	var $cloneintro = $('#social-icons').clone();
	$("#jPanelMenu-menu").append($cloneintro);

	var $clonefooter = $('#footer').clone();
	$("#mobile-footer").append($clonefooter);

	// Scroll to top
	$('.scrollup').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});

	var div = $(".main-content").height();
    var doc = $(window).height();

    if (div > doc ) {
        $(".main-content").addClass('tall');
    }

    if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}

	// The function that sorts items
	(function($){
		   $.fn.sortChildrenByDataKey = function(key, desc){
		      var i, els = this.children().sort(function(a, b) {
		      	return (desc?1:-1)*($(a).data(key) - $(b).data(key));
		      });
		      for (i = 0; i < els.length; i++) {
		          this.prepend($(els[i]).detach());
		      }
		      return this;
		  };
		})(jQuery);

	// After the page loads, reorder the items based on the data-order attribute
	$('.homepagegallery').sortChildrenByDataKey('order', false);

 });
