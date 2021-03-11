jQuery(document).ready(function($) {
	$('div.content-foto').css('display', 'block');
	var onMouseOutOpacity = 0.67;
	$('#thumbs ul.thumbs li, div.navigation a.pageLink').opacityrollover({
		mouseOutOpacity:   onMouseOutOpacity,
		mouseOverOpacity:  1.0,
		fadeSpeed:         'fast',
		exemptionSelector: '.selected'
	});
    var gallery = $('#thumbs').galleriffic({
        delay:                     2000, // in milliseconds
        numThumbs:                 4, // The number of thumbnails to show page
        preloadAhead:              4, // Set to -1 to preload all images
        enableTopPager:            false,
        enableBottomPager:         false,
        imageContainerSel:         '#slideshow', // The CSS selector for the element within which the main slideshow image should be rendered
        controlsContainerSel:      '#controls', // The CSS selector for the element within which the slideshow controls should be rendered
        captionContainerSel:       '#caption',
        renderSSControls:          true, // Specifies whether the slideshow's Play and Pause links should be rendered
        renderNavControls:         true, // Specifies whether the slideshow's Next and Previous links should be rendered
        prevLinkText:              'Previous',
        nextLinkText:              'Next',
        nextPageLinkText:          'Next &rsaquo;',
        prevPageLinkText:          '&lsaquo; Prev',
        enableHistory:             false, // Specifies whether the url's hash and the browser's history cache should update when the current slideshow image changes
        enableKeyboardNavigation:  true, // Specifies whether keyboard navigation is enabled
        autoStart:                 false, // Specifies whether the slideshow should be playing or paused when the page first loads
        syncTransitions:           true, // Specifies whether the out and in transitions occur simultaneously or distinctly
        defaultTransitionDuration: 500, // If using the default transitions, specifies the duration of the transitions
        onSlideChange: function(prevIndex, nextIndex) {
						// 'this' refers to the gallery, which is an extension of $('#thumbs')
						this.find('ul.thumbs').children()
							.eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
							.eq(nextIndex).fadeTo('fast', 1.0);
		},
		onPageTransitionOut: function(callback) {
			this.fadeTo('fast', 0.0, callback);
		},
		onPageTransitionIn: function() {
			var prevPageLink = this.find('a.prev').css('visibility', 'hidden');
			var nextPageLink = this.find('a.next').css('visibility', 'hidden');
			
			// Show appropriate next / prev page links
			if (this.displayedPage > 0)
				prevPageLink.css('visibility', 'visible');

			var lastPage = this.getNumPages() - 1;
			if (this.displayedPage < lastPage)
				nextPageLink.css('visibility', 'visible');

			this.fadeTo('fast', 1.0);
		}
    });
    gallery.find('a.prev').click(function(e) {
		gallery.previousPage();
		e.preventDefault();
	});

	gallery.find('a.next').click(function(e) {
		gallery.nextPage();
		e.preventDefault();
	});
});