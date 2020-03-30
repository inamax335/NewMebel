$(function() {

	$('input, textarea').focus(function(){
	  $(this).parents('.form-group').addClass('focused');
	});

	$('input, textarea').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
	    $(this).removeClass('filled');
	    $(this).parents('.form-group').removeClass('focused');  
	  } else {
	    $(this).addClass('filled');
	  }
	});

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".main-mnu").slideToggle();
	  return false;
	});

	var owl = $('.reviews_carusel');
	owl.owlCarousel({
    loop: true,
		dots: true,
		items: 1,
		navContainerClass: "owl-nav",
		responsiveClass:true,
		center: true,
		stagePadding: 100,
		margin: 40,
    responsive:{
        0:{
            items:1,
            margin: 0,
            stagePadding: 0,
        },
        576:{
            items:1,
        },
        768:{
            items:3,
        },
        992:{
            items:3,
        },
        1200:{
            items:3,
        },
    }
	});
	// Go to the next item
	$('.owl-next').click(function() {
	    owl.trigger('next.owl.carousel');
	});
	// Go to the previous item
	$('.owl-prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	//owl2row plugin
;(function ($, window, document, undefined) {
    Owl2row = function (scope) {
        this.owl = scope;
        this.owl.options = $.extend({}, Owl2row.Defaults, this.owl.options);
        //link callback events with owl carousel here

        this.handlers = {
            'initialize.owl.carousel': $.proxy(function (e) {
                if (this.owl.settings.owl2row) {
                    this.build2row(this);
                }
            }, this)
        };

        this.owl.$element.on(this.handlers);
    };

    Owl2row.Defaults = {
        owl2row: false,
        owl2rowTarget: 'item',
        owl2rowContainer: 'owl2row-item',
        owl2rowDirection: 'utd' // ltr
    };

    //mehtods:
    Owl2row.prototype.build2row = function(thisScope){
    
        var carousel = $(thisScope.owl.$element);
        var carouselItems = carousel.find('.' + thisScope.owl.options.owl2rowTarget);

        var aEvenElements = [];
        var aOddElements = [];

        $.each(carouselItems, function (index, item) {
            if ( index % 2 === 0 ) {
                aEvenElements.push(item);
            } else {
                aOddElements.push(item);
            }
        });

        carousel.empty();

        switch (thisScope.owl.options.owl2rowDirection) {
            case 'ltr':
                thisScope.leftToright(thisScope, carousel, carouselItems);
                break;

            default :
                thisScope.upTodown(thisScope, aEvenElements, aOddElements, carousel);
        }

    };

    Owl2row.prototype.leftToright = function(thisScope, carousel, carouselItems){

        var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
        var owlMargin = thisScope.owl.options.margin;

        var carouselItemsLength = carouselItems.length;

        var firsArr = [];
        var secondArr = [];

        //console.log(carouselItemsLength);

        if (carouselItemsLength %2 === 1) {
            carouselItemsLength = ((carouselItemsLength - 1)/2) + 1;
        } else {
            carouselItemsLength = carouselItemsLength/2;
        }

        //console.log(carouselItemsLength);

        $.each(carouselItems, function (index, item) {


            if (index < carouselItemsLength) {
                firsArr.push(item);
            } else {
                secondArr.push(item);
            }
        });

        $.each(firsArr, function (index, item) {
            var rowContainer = $('<div class="' + o2wContainerClass + '"/>');

            var firstRowElement = firsArr[index];
                firstRowElement.style.marginBottom = owlMargin + 'px';

            rowContainer
                .append(firstRowElement)
                .append(secondArr[index]);

            carousel.append(rowContainer);
        });

    };

    Owl2row.prototype.upTodown = function(thisScope, aEvenElements, aOddElements, carousel){

        var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
        var owlMargin = thisScope.owl.options.margin;

        $.each(aEvenElements, function (index, item) {

            var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
            var evenElement = aEvenElements[index];

            evenElement.style.marginBottom = owlMargin + 'px';

            rowContainer
                .append(evenElement)
                .append(aOddElements[index]);

            carousel.append(rowContainer);
        });
    };

    /**
     * Destroys the plugin.
     */
    Owl2row.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.owl.dom.$el.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins['owl2row'] = Owl2row;
})( window.Zepto || window.jQuery, window,  document );
//end of owl2row plugin

	//init carousel
	var owl2 = $('.materials_carusel');
	owl2.owlCarousel({
    loop: true,
		dots: false,
		items: 9,
		 autoplay: true,
		navContainerClass: "owl-nav",
		responsiveClass: true,
		margin: 10,
		owl2row: true,
    responsive:{
        0:{
            items:2,
        },
        576:{
            items:3,
        },
        768:{
            items:3,
        },
        992:{
            items:9,
        },
        1200:{
            items:9,

        },
    }
	});

	var owl3 = $('.our_works_carousel');
	owl3.owlCarousel({
    loop: true,
		dots: true,
		items: 1,
		navContainerClass: "owl-nav",
		responsiveClass:true,
		center: true,
		stagePadding: 300,
		margin: 100,
    responsive:{
        0:{
            items:1,
            stagePadding: 0,
						margin: 0
        },
        576:{
            items:1,
        },
        768:{
            items:1,
        },
        992:{
            items:1,
        },
        1200:{
            items:1,
        },
    }
	});
	// Go to the next item
	$('.owl-next').click(function() {
	    owl3.trigger('next.owl.carousel');
	});
	// Go to the previous item
	$('.owl-prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl3.trigger('prev.owl.carousel', [300]);
	});

});
