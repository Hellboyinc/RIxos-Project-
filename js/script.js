var turnOffAnimation = false;

var rixos = {
	init: function(){
		self = this;
		
		$(document).ready(function(){
			self.preloader();

			self.sectionType_1();
			self.sectionType_2();
			self.sectionType_3();
			self.sectionType_4();
			self.sectionType_5();
			self.sectionType_6();
			self.sectionType_7();
			self.sectionType_8();
			self.sectionType_10();

			self.sectionType_18();
			self.smoothScroll();
		});
	},
	preloader: function(){
		if ($('.preloader')[0]) {
			TweenLite.set($('.preloader'), {display:'none'});
		}
	},
	sectionType_1: function(){
		if ($('section.type-1')[0]) {
			// SLIDER
			var $objectSlider = $('section.type-1.var-a .slider');

			$objectSlider.each(function(){

				var $controls = $(this).parents('.part-type-1').find('.controls > *');;

				var slider = $(this).lightSlider({
				    item:1,
				    controls:false,
				    pager:false,
				    loop:true,
				    slideMove:1,
				    slideMargin:0,
				    speed:600,
				    enableDrag:true,
				    enableTouch:true
				});

				$controls.on('click', function(){
					if ($(this).hasClass('reverse')) {
						slider.goToPrevSlide();
					} else {
						slider.goToNextSlide();
					}
				});
				console.log('objectSlider')
			});
			// SLIDER END


			// ANIMATION
			var	$sectionType_1 = $('section.type-1'),
				timeLinesArray = [];

			$sectionType_1.each(function(index){
			    $(this).attr('data-index', index);

			    var $title = $(this).find('.el-title .g__title');

			    $title.html(divideSentenceIntoRows($title));

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .to($(this).find('.el-image-1 .g__image-overflow'), 1.6, {width:0, ease:Power2.easeOut}, 'one')
			       	.from($(this).find('.el-text-block .icon'), 0.6, {delay:0.4, opacity:0, y:-10, ease:Power2.easeOut}, 'one')
			       	.from($(this).find('.line-2'), 1.8, {delay:0.6, height:0, ease:Power2.easeOut}, 'one')
			       	.staggerFrom($(this).find('.el-title-2, .el-title, .el-text, .el-button'), 1.2, {delay:0.8, opacity:0, x:30, ease:Power2.easeOut}, 0.2, 'one')

			        .to($(this).find('.el-image-2 .g__image-overflow'), 1.6, {delay:1.8, width:0, ease:Power2.easeOut}, 'one')
			        .from($(this).find('.el-text-icon-1'), 1.6, {delay:2.2, opacity:0, x:20, ease:Power2.easeOut}, 'one')
			        .from($(this).find('.el-text-icon-2'), 1.6, {delay:2.4, opacity:0, x:20, ease:Power2.easeOut}, 'one')
			        .from($(this).find('.el-text-icon-3 .line'), 1.6, {delay:2.6, width:0, ease:Power2.easeOut}, 'one')
			    
			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_1, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_2: function(){
		if ($('section.type-2')[0]) {
			// SLIDER
			var slider = new SerjiSlyder({
				$controls: $('section.type-2 .slider .controls .slider-arrow'),
				$slides: $('section.type-2 .slider .slide'),
				$pagination: undefined,
				$paginationElements: undefined,
				$paginationClass: undefined,
				$actionField: $('.never'),
				animFn: function(direction, $slides, $actionField, oldIndex, index){
					if (direction == 'right') {
						TweenLite.fromTo($slides.eq(oldIndex), 1.5, {width:'100%'}, {display:'none', width:'0%', right:0, left:'initial', ease:Power2.easeOut});
						TweenLite.fromTo($slides.eq(oldIndex), 0.0001, {zIndex:44}, {delay:1.5, zIndex:33});
						TweenLite.fromTo($slides.eq(oldIndex).find('.slide-inner'), 0.0001, {}, {right:0, left:'initial'});
						TweenLite.fromTo($slides.eq(oldIndex).find('.slider-content'), 1.5, {x:0, y:0}, {x:50, y:0, ease:Power2.easeOut});

						TweenLite.fromTo($slides.eq(index), 1.5, {width:'100%'}, {display:'block', width:'100%', ease:Power2.easeOut});
						TweenLite.fromTo($slides.eq(index), 0.0001, {zIndex:33}, {delay:1.5, zIndex:44});
						TweenLite.fromTo($slides.eq(index).find('.slider-content'), 1.5, {opacity:0.7, x:0, y:30}, {opacity:1, x:0, y:0, ease:Power2.easeOut});
						TweenLite.fromTo($slides.eq(index).find('.slide-image'), 2.5, {scale:1.1}, {scale:1, ease:Power2.easeOut});
					} else {
						TweenLite.fromTo($slides.eq(oldIndex), 1.5, {width:'100%'}, {display:'none', width:'0%', right:'initial', left:0, ease:Power2.easeOut});
						TweenLite.fromTo($slides.eq(oldIndex), 0.0001, {zIndex:44}, {delay:1.5, zIndex:33});
						TweenLite.fromTo($slides.eq(oldIndex).find('.slide-inner'), 0.0001, {}, {right:'initial', left:0});
						TweenLite.fromTo($slides.eq(oldIndex).find('.slider-content'), 1.5, {x:0, y:0}, {x:-30, y:0, ease:Power2.easeOut});

						TweenLite.fromTo($slides.eq(index), 1.5, {width:'100%', zIndex:33}, {display:'block', width:'100%', ease:Power2.easeOut});
						TweenLite.fromTo($slides.eq(index), 0.0001, {zIndex:33}, {delay:1.5, zIndex:44});
						TweenLite.fromTo($slides.eq(index).find('.slider-content'), 1.5, {opacity:0.7, x:0, y:30}, {opacity:1, x:0, y:0, ease:Power2.easeOut});
						TweenLite.fromTo($slides.eq(index).find('.slide-image'), 2.5, {scale:1.1}, {scale:1, ease:Power2.easeOut});
					}
				}
			});
			// SLIDER END

			// ANIMATION
			var	$sectionType_2 = $('section.type-2'),
				timeLinesArray = [];

			$sectionType_2.each(function(index){
			    $(this).attr('data-index', index);

			    var $title = $(this).find('.el-title .g__title');

			    $title.html(divideSentenceIntoRows($title));

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .fromTo($(this).find('.slider'), 2.5, {opacity:0}, {opacity:1, ease:Power2.easeOut}, 'one')
			        .to($(this).find('.slider-slides-overflow'), 1.2, {width:0, ease:Power2.easeOut}, 'one')
			        .staggerFromTo($title.find('span span'), 1.2, {opacity:0, y:60}, {delay:1, opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')
			        .staggerFromTo($(this).find('.play-button-outer'), 1.2, {opacity:0, y:30}, {delay:2, opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')
			        .staggerFromTo($(this).find('.block-item .list'), 0.6, {opacity:0, y:30}, {delay:3, opacity:1, y:0, ease:Power2.easeOut}, 0.4, 'one')
			        .staggerFromTo($(this).find('.block-item .list ul'), 0.8, {opacity:0, y:30}, {delay:3.3, opacity:1, y:0, ease:Power2.easeOut}, 0.4, 'one')
			    
			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_2, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_3: function(){
		if ($('section.type-3')[0]) {
			// SLIDER
			var sliderImageListTranslateX = 0,
				$sliderContentListItem = $('section.type-3 .block-content-item-element');

			var slider = new SerjiSlyder({
				$controls: $('section.type-3 .controls .slider-arrow'),
				$slides: $('section.type-3 .block-img-list .block-img-item'),
				$pagination: $('section.type-3 .block-list .pager'),
				$paginationElements: $('section.type-3 .block-list .pager .pager-dot'),
				$paginationClass: 'pager-dot',
				$actionField: $('.never'),
				animFn: function(direction, $slides, $actionField, oldIndex, index){
					sliderChangeActiveSlide();

					if (direction == 'right') {
						sliderImageListTranslateX += $sliderImage.width();

						TweenLite.fromTo($sliderContentListItem.eq(oldIndex), 0, {opacity:1, display:'block', position:'relative', y:0}, {opacity:0, display:'none', position:'absolute', y:-30, ease:Power2.easeOut});
						TweenLite.fromTo($sliderContentListItem.eq(index), 1.5, {opacity:0, display:'none', position:'absolute', y:50}, {opacity:1, display:'block', position:'relative', y:0, ease:Power2.easeOut});
					} else {
						sliderImageListTranslateX -= $sliderImage.width();

						TweenLite.fromTo($sliderContentListItem.eq(oldIndex), 0, {opacity:1, display:'block', position:'relative', y:0}, {opacity:0, display:'none', position:'absolute', y:-30, ease:Power2.easeOut});
						TweenLite.fromTo($sliderContentListItem.eq(index), 1.5, {opacity:0, display:'none', position:'absolute', y:30}, {opacity:1, display:'block', position:'relative', y:0, ease:Power2.easeOut});
					}

					// loop fixes
					if (sliderCurrentSlideIndex == 0) {
						sliderImageListTranslateX = 0;
					}

					if (sliderCurrentSlideIndex == sliderMaxSlideCount && oldIndex == 0) {
						sliderImageListTranslateX = 0;
						sliderImageListTranslateX -= $sliderImage.width() * sliderMaxSlideCount;
					}
					// loop fixes end

					TweenLite.set($sliderImageList, {x:sliderImageListTranslateX});
				}
			});

			var $sliderImage = $('section.type-3 .block-img-list .block-img-item'),
				$sliderImageList = $('section.type-3 .block-img-list-inner'),
				sliderCurrentSlideIndex = slider.settings.index,
				sliderMaxSlideCount = $('section.type-3 .block-list .pager .pager-dot').length - 1;

			function sliderChangeActiveSlide() {
				sliderCurrentSlideIndex = slider.settings.index;

				$sliderImage.removeClass('active');
				$sliderImage.eq(sliderCurrentSlideIndex).addClass('active');
			}

			sliderChangeActiveSlide();
			// SLIDER END

			// ANIMATION
			var	$sectionType_3 = $('section.type-3'),
				timeLinesArray = [];

			$sectionType_3.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .staggerFromTo($(this).find('.section-title-outer').find('.el-title-2, .el-title'), 1.2, {opacity:0, y:60}, {opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')
			    	.from($(this).find('.block-img-list'), 2.5, {delay:0.4, opacity:0, y:100, ease:Power2.easeOut}, 'one')
			    	.from($(this).find('.block-content-item'), 2.1, {delay:0.8, opacity:0, y:100, ease:Power2.easeOut}, 'one')
			    	.staggerFrom($(this).find('.block-content-item').find('.el-title-2, .el-title, .el-text-1, .el-button'), 1.2, {delay:1.2, opacity:0, x:-30, ease:Power2.easeOut}, 0.2, 'one')

			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_3, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_4: function(){
		if ($('section.type-4')[0]) {
			// HOVER
			var $item = $('section.type-4 .block');

			setTimeout(function(){
				var timeLinesArray = [];

				$item.each(function(){
					var textHeight = $(this).find('.el-text-2').height(),
						timeLine = new TimelineLite();

					timeLine
						.to($(this).find('.icon-item'), 0.6, {y:-20, ease:Power2.easeOut}, 'first')
						.to($(this).find('.el-text-1'), 0.6, {delay:0.05, y:-20, ease:Power2.easeOut}, 'first')
						.to($(this).find('.line'), 0.6, {delay:0.1, y:-20, rotation:90, ease:Power2.easeOut}, 'first')
						.fromTo($(this).find('.el-text-2'), 0.6, {height:0}, {delay:0.15, height:textHeight, y:-20, ease:Power2.easeOut}, 'first');
					timeLine.pause();

					timeLinesArray.push(timeLine);
				});

				$item.hover(function(){
					timeLinesArray[$(this).index()].play();
				}, function(){
					timeLinesArray[$(this).index()].reverse();
				});
			}, 10);
			// HOVER END

			// ANIMATION
			var	$sectionType_4 = $('section.type-4'),
				$item = $('section.type-4 .block'),
				timeLinesArray = [],
				timeLinesItemsListArray = [];

			// animation part 1
			$sectionType_4.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .staggerFromTo($(this).find('.el-title-2, .el-title'), 1.2, {opacity:0, y:60}, {opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')
			        .from($(this).find('.background'), 2.5, {delay:0.4, opacity:0, y:100, ease:Power2.easeOut}, 'one')

			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_4, timeLinesArray);
			// animation part 1 end

			// animation part 2
			$item.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .fromTo($(this), 2.1, {opacity:0, x:30}, {opacity:1, x:0, ease:Power2.easeOut}, 'one')

			    timeLinesItemsListArray.push(timeLine);
			});

			onScrollAnimationPlay($item, timeLinesItemsListArray);
			// animation part 2 end

			// parallax
			$(window).bind('scroll',function(e){
				parallaxScroll($('section.type-4 .background img'), 0.88, 'bottom', $('section.type-4').height() - $('section.type-4 .background img').height() - 200);
			});
			// parallax end
			// ANIMATION END
		}
	},
	sectionType_5: function(){
		if ($('section.type-5')[0]) {
			// ANIMATION
			var	$sectionType_5 = $('section.type-5'),
				timeLinesArray = [];

			$sectionType_5.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .staggerFromTo($(this).find('.el-title-2, .el-title'), 1.2, {opacity:0, y:60}, {opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')
			    	.from($(this).find('.el-image img'), 2.5, {delay:0.4, opacity:0, y:100, ease:Power2.easeOut}, 'one')
			    	.from($(this).find('.part-type-2'), 1.2, {delay:1.2, y:134, ease:Power2.easeOut}, 'one')
			    	.staggerFrom($(this).find('.part-type-2').find('.el-text, .el-text-1'), 1.2, {delay:1.6, opacity:0, y:30, ease:Power2.easeOut}, 0.2, 'one')
			    	.fromTo($(this).find('.slider-content-flex-container-inner'), 1.2, {opacity:0, y:30}, {delay:1.6, opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')

			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_5, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_6: function(){
		if ($('section.type-6')[0]) {
			// SLIDER
			var	$sliderOuter = $('section.type-6 .block-list-outer'),
				$sliderItem = $('section.type-6 .block');

			$sliderItem.width(parseInt(($sliderOuter.width() / 3)) - parseInt(parseInt($sliderItem.css('margin-right')) / 1.5));

			var $frame  = $('section.type-6 .block-list-outer');
			var $slidee = $frame.find('ul');
			var $wrap   = $frame.parent();

			$frame.sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				activateOn: 'click',
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				scrollBar: $('section.type-6 .scrollbar-inner'),
				scrollBy: 1,
				speed: 1000,
				elasticBounds: 1,
				easing: 'swing',
				dragHandle: 1,
				dynamicHandle: 0,
				clickBar: 1,
				scrollBy: 0,
				prev: $('section.type-6 .controls .prev'),
				next: $('section.type-6 .controls .next')
			});

			$frame.sly('next');
			// SLIDER END

			// HOVER
			var $item = $('section.type-6 .block');

			setTimeout(function(){
				var timeLinesArray = [];

				$item.each(function(){
					var textHeight = $(this).find('.el-text-2').height(),
						timeLine = new TimelineLite();

					timeLine
						.from($(this).find('.icon-item'), 0.6, {opacity:0, x:10, ease:Power2.easeOut}, 'first')
						.from($(this).find('.line'), 0.8, {delay:0.2, width:0, ease:Power2.easeOut}, 'first')
						.fromTo($(this).find('.el-text-2-1'), 0.6, {height:0}, {delay:0.05, height:textHeight, ease:Power2.easeOut}, 'first')
						.from($(this).find('.el-link .link-outer'), 0.6, {delay:0.25, x:21, ease:Power2.easeOut}, 'first')
						.from($(this).find('.el-link svg'), 0.6, {delay:0.3, opacity:0, x:10, ease:Power2.easeOut}, 'first')
					timeLine.pause();

					timeLinesArray.push(timeLine);
				});

				$item.hover(function(){
					timeLinesArray[$(this).index()].play();
				}, function(){
					timeLinesArray[$(this).index()].reverse();
				});
			}, 10);
			// HOVER END

			// ANIMATION
			var	$sectionType_6 = $('section.type-6'),
				timeLinesArray = [];

			$sectionType_6.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .staggerFromTo($(this).find('.el-title-2, .el-title'), 1.2, {opacity:0, y:60}, {opacity:1, y:0, ease:Power2.easeOut}, 0.3, 'one')
			    	.from($(this).find('.block-list-outer'), 2.5, {delay:0.4, opacity:0, y:100, ease:Power2.easeOut}, 'one')
			    	.from($(this).find('.scrollbar'), 2.1, {delay:0.8, opacity:0, y:100, ease:Power2.easeOut}, 'one')

			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_6, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_7: function(){
		if ($('section.type-7')[0]) {
			// ANIMATION
			var	$sectionType_7 = $('section.type-7'),
				timeLinesArray = [];

			$sectionType_7.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			    	.from($(this).find('.background'), 2.5, {opacity:0, y:100, ease:Power2.easeOut}, 'one')
			    	.from($(this).find('.block'), 2.1, {delay:0.4, opacity:0, y:100, ease:Power2.easeOut}, 'one')

			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_7, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_8: function(){
		if ($('section.type-8')[0]) {
			// ANIMATION
			var	$sectionType_8 = $('section.type-8'),
				timeLinesArray = [];

			$sectionType_8.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .fromTo($(this).find('.part-type-1'), 2.1, {opacity:0, x:30}, {opacity:1, x:0, ease:Power2.easeOut}, 'one')
			        .fromTo($(this).find('.part-type-2'), 2.1, {opacity:0, x:-30}, {opacity:1, x:0, ease:Power2.easeOut}, 'one')

			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_8, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_10: function(){
		if ($('section.type-10')[0]) {
			// ANIMATION
			var	$sectionType_10 = $('section.type-10'),
				timeLinesArray = [];

			$sectionType_10.each(function(index){
			    $(this).attr('data-index', index);

			    var timeLine = new TimelineLite();

			    timeLine.pause();
			    timeLine
			        .from($(this).find('.icon-1'), 0.6, {delay:0.3, opacity:0, x:10, ease:Power2.easeOut}, 'one')
			        .from($(this).find('.line-1'), 1.8, {delay:0.6, width:0, ease:Power2.easeOut}, 'one')

			        .from($(this).find('.icon-2'), 0.6, {delay:0.3, opacity:0, x:-10, ease:Power2.easeOut}, 'one')
			        .from($(this).find('.line-2'), 1.8, {delay:0.6, width:0, ease:Power2.easeOut}, 'one')

			    	.from($(this).find('.el-button'), 1.2, {opacity:0, y:-30, ease:Power2.easeOut}, 'one')

			    timeLine.pause();
			    timeLinesArray.push(timeLine);
			});

			onScrollAnimationPlay($sectionType_10, timeLinesArray);
			// ANIMATION END
		}
	},
	sectionType_18: function(){
		if ($('section.type-18')[0]) {
			$('.grid').isotope({
			  itemSelector: '.grid-item',
			  percentPosition: true,
			  masonry: {
			    columnWidth: '.grid-sizer',
  				gutter: '.gutter-sizer'
  				},
  				itemSelector: '.grid-item',
				percentPosition: true })
		}
	},
	smoothScroll: function(){
		init();

		function init() {
			new SmoothScroll(document,120,12)
		}

		function SmoothScroll(target, speed, smooth) {
			if (target === document)
				target = (document.scrollingElement 
		              || document.documentElement 
		              || document.body.parentNode 
		              || document.body) // cross browser support for document scrolling
		      
			var moving = false
			var pos = target.scrollTop
		  var frame = target === document.body 
		              && document.documentElement 
		              ? document.documentElement 
		              : target // safari is the new IE
		  
			target.addEventListener('mousewheel', scrolled, { passive: false })
			target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

			function scrolled(e) {
				e.preventDefault(); // disable default scrolling

				var delta = normalizeWheelDelta(e)

				pos += -delta * speed
				pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

				if (!moving) update()
			}

			function normalizeWheelDelta(e){
				if(e.detail){
					if(e.wheelDelta)
						return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
					else
						return -e.detail/3 // Firefox
				}else
					return e.wheelDelta/120 // IE,Safari,Chrome
			}

			function update() {
				moving = true
		    
				var delta = (pos - target.scrollTop) / smooth
		    
				target.scrollTop += delta
		    
				if (Math.abs(delta) > 0.5)
					requestFrame(update)
				else
					moving = false
			}

			var requestFrame = function() { // requestAnimationFrame cross browser
				return (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(func) {
						window.setTimeout(func, 1000 / 50);
					}
				);
			}()
		}
	}
}

rixos.init();

function divideSentenceIntoRows($objWithText) {
	if ($objWithText[0]) {
		$objWithText.addClass('divided-text-outer');

		var	text = $objWithText.html();
			textSplitted = text.split('<br>');
			rows = '';

		for (var i = 0; textSplitted.length > i; i++) {
			rows += '<span style="display: block; position: relative; overflow: hidden;">' + '<span style="display: inline-block">' + textSplitted[i] + '</span>' + '</span> ';
		};

		return rows;
	}
}

function onScrollAnimationPlay($item, timeLinesArray) {
	var animationDelay = 1;

	for (var i = 0; i < $item.length; i++) {
	    new Waypoint({
	        element: $item[i],
	        handler: function(direction) {
	            var index = $(this.element).data('index');

	            if(direction == 'down') {
	                setTimeout(function(){
	                    timeLinesArray[index].play();
	                }, animationDelay*100);
	            } else {
	                
	            }

	            animationDelay += 1;

	            setTimeout(function(){
	                animationDelay = 1;
	            }, 10);
	        },
	        offset: '80%'
	    })

	    if (turnOffAnimation == true) {
	    	timeLinesArray[i].play();
	    	timeLinesArray[i].timeScale(9999);
	    }
	}
}

function parallaxScroll($obj, _speed, _direction, _limit){
	if($(window).width() < 768) {
		return;
	}

    var scrollTop = window.pageYOffset,
        $Section = $obj.parents('section');

    var top         = $Section.offset().top,
        bottom      = $Section.height()+top,
        scrolled    = top - scrollTop,
        speed       = _speed,
        direction   = _direction,
        limit       = _limit;

    top = top - $(window).height();

    if((scrollTop > top) && (scrollTop < bottom)) {
        if (!($Section.hasClass('visible'))) {
            $Section.addClass('visible');              
        }
    } else {
        $Section.removeClass('visible');
        return;
    }

    if(speed == undefined) {speed = 0.44;}
    if(direction == undefined) {direction = 'bottom';}
    if(limit == undefined) {limit = 9999;}

    if(direction == 'bottom' && limit >= 0-(scrolled*speed)) {
    	if ((0-(scrolled*speed)) > 0) {
        	TweenLite.set($obj,{y:(0-(scrolled*speed))});
    	}
    }

    if(direction == 'top' && limit >= 0-(scrolled*speed)) {
        TweenLite.set($obj,{y:((scrolled*speed)-$obj.height())});
    }
}