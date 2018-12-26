import $ from "jquery"

const timelinejs = () => {

	var timelines = $('.cd-horizontal-timeline'),
		ideastormeventsMinDistance = 500;

	(timelines.length > 0) && initTimeline(timelines);

	function initTimeline(timelines) {
		timelines.each(function () {
			var timeline = $(this),
				timelineComponents = {};
			//cache timeline components 
			timelineComponents['timelineWrapper'] = timeline.find('.ideastormevents-wrapper');
			timelineComponents['ideastormeventsWrapper'] = timelineComponents['timelineWrapper'].children('.ideastormevents');
			timelineComponents['fillingLine'] = timelineComponents['ideastormeventsWrapper'].children('.filling-line');
			timelineComponents['timelineideastormevents'] = timelineComponents['ideastormeventsWrapper'].find('a');
			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineideastormevents']);
			timelineComponents['ideastormeventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
			timelineComponents['ideastormeventsContent'] = timeline.children('.ideastormevents-content');

			//assign a left postion to the single ideastormevents along the timeline
			setDatePosition(timelineComponents, ideastormeventsMinDistance);
			//assign a width to the timeline
			var timelineTotWidth = setTimelineWidth(timelineComponents, ideastormeventsMinDistance);
			//the timeline has been initialize - show it
			timeline.addClass('loaded');

			//detect click on the next arrow
			timelineComponents['timelineNavigation'].on('click', '.next', function (event) {
				event.preventDefault();
				// updateSlide(timelineComponents, timelineTotWidth, 'next');
				showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			//detect click on the prev arrow
			timelineComponents['timelineNavigation'].on('click', '.prev', function (event) {
				event.preventDefault();
				// updateSlide(timelineComponents, timelineTotWidth, 'prev');
				showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});
			//detect click on the a single event - show new event content
			timelineComponents['ideastormeventsWrapper'].on('click', 'a', function (event) {
				event.preventDefault();
				timelineComponents['timelineideastormevents'].removeClass('selected');
				$(this).addClass('selected');
				updateOlderideastormevents($(this));
				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
				updateVisibleContent($(this), timelineComponents['ideastormeventsContent']);
			});

			//on swipe, show next/prev event content
			timelineComponents['ideastormeventsContent'].on('swipeleft', function () {
				var mq = checkMQ();
				(mq === 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'next');
			});
			timelineComponents['ideastormeventsContent'].on('swiperight', function () {
				var mq = checkMQ();
				(mq === 'mobile') && showNewContent(timelineComponents, timelineTotWidth, 'prev');
			});

			//keyboard navigation
			$(document).keyup(function (event) {
				if (event.which === '37' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'prev');
				} else if (event.which === '39' && elementInViewport(timeline.get(0))) {
					showNewContent(timelineComponents, timelineTotWidth, 'next');
				}
			});
		});
	}

	// function updateSlide(timelineComponents, timelineTotWidth, string) {
	// 	//retrieve translateX value of timelineComponents['ideastormeventsWrapper']
	// 	var translateValue = getTranslateValue(timelineComponents['ideastormeventsWrapper']),
	// 		wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
	// 	//translate the timeline to the left('next')/right('prev') 
	// 	(string === 'next')
	// 		? translateTimeline(timelineComponents, translateValue - wrapperWidth + ideastormeventsMinDistance, wrapperWidth - timelineTotWidth)
	// 		: translateTimeline(timelineComponents, translateValue + wrapperWidth - ideastormeventsMinDistance);
	// }

	function showNewContent(timelineComponents, timelineTotWidth, string) {
		//go from one event to the next/previous one
		var visibleContent = timelineComponents['ideastormeventsContent'].find('.selected'),
			newContent = (string === 'next') ? visibleContent.next() : visibleContent.prev();

		if (newContent.length > 0) { //if there's a next/prev event - show it
			var selectedDate = timelineComponents['ideastormeventsWrapper'].find('.selected'),
				newEvent = (string === 'next') ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');

			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
			updateVisibleContent(newEvent, timelineComponents['ideastormeventsContent']);
			newEvent.addClass('selected');
			selectedDate.removeClass('selected');
			updateOlderideastormevents(newEvent);
			updateTimelinePosition(string, newEvent, timelineComponents);
		}
	}

	function updateTimelinePosition(string, event, timelineComponents) {
		//translate timeline to the left/right according to the position of the selected event
		var ideastormeventstyle = window.getComputedStyle(event.get(0), null),
			eventLeft = Number(ideastormeventstyle.getPropertyValue("left").replace('px', '')),
			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
			timelineTotWidth = Number(timelineComponents['ideastormeventsWrapper'].css('width').replace('px', ''));
		var timelineTranslate = getTranslateValue(timelineComponents['ideastormeventsWrapper']);

		if ((string === 'next' && eventLeft > timelineWidth - timelineTranslate) || (string === 'prev' && eventLeft < - timelineTranslate)) {
			translateTimeline(timelineComponents, - eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
		}
	}

	function translateTimeline(timelineComponents, value, totWidth) {
		var ideastormeventsWrapper = timelineComponents['ideastormeventsWrapper'].get(0);
		value = (value > 0) ? 0 : value; //only negative translate value
		value = (!(typeof totWidth === 'undefined') && value < totWidth) ? totWidth : value; //do not translate more than timeline width
		setTransformValue(ideastormeventsWrapper, 'translateX', value + 'px');
		//update navigation arrows visibility
		(value === 0) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
		(value === totWidth) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
	}

	function updateFilling(selectedEvent, filling, totWidth) {
		//change .filling-line length according to the selected event
		var ideastormeventstyle = window.getComputedStyle(selectedEvent.get(0), null),
			eventLeft = ideastormeventstyle.getPropertyValue("left"),
			eventWidth = ideastormeventstyle.getPropertyValue("width");
		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
		var scaleValue = eventLeft / totWidth;
		setTransformValue(filling.get(0), 'scaleX', scaleValue);
	}

	function setDatePosition(timelineComponents, min) {
		for (var i = 0; i < timelineComponents['timelineDates'].length; i++) {
			var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
				distanceNorm = Math.round(distance / timelineComponents['ideastormeventsMinLapse']) + 2;
			timelineComponents['timelineideastormevents'].eq(i).css('left', distanceNorm * min + 'px');
		}
	}

	function setTimelineWidth(timelineComponents, width) {
		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length - 1]),
			timeSpanNorm = timeSpan / timelineComponents['ideastormeventsMinLapse'],
			timeSpanNorm = Math.round(timeSpanNorm) + 4,
			totalWidth = timeSpanNorm * width;
		timelineComponents['ideastormeventsWrapper'].css('width', totalWidth + 'px');
		updateFilling(timelineComponents['ideastormeventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
		updateTimelinePosition('next', timelineComponents['ideastormeventsWrapper'].find('a.selected'), timelineComponents);

		return totalWidth;
	}

	function updateVisibleContent(event, ideastormeventsContent) {
		var eventDate = event.data('date'),
			visibleContent = ideastormeventsContent.find('.selected'),
			selectedContent = ideastormeventsContent.find('[data-date="' + eventDate + '"]'),
			selectedContentHeight = selectedContent.height();

		if (selectedContent.index() > visibleContent.index()) {
			var classEnetering = 'selected enter-right',
				classLeaving = 'leave-left';
		} else {
			var classEnetering = 'selected enter-left',
				classLeaving = 'leave-right';
		}

		selectedContent.attr('class', classEnetering);
		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
			visibleContent.removeClass('leave-right leave-left');
			selectedContent.removeClass('enter-left enter-right');
		});
		ideastormeventsContent.css('height', selectedContentHeight + 'px');
	}

	function updateOlderideastormevents(event) {
		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
	}

	function getTranslateValue(timeline) {
		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
				timelineStyle.getPropertyValue("-moz-transform") ||
				timelineStyle.getPropertyValue("-ms-transform") ||
				timelineStyle.getPropertyValue("-o-transform") ||
				timelineStyle.getPropertyValue("transform");

		if (timelineTranslate.indexOf('(') >= 0) {
			var timelineTranslate = timelineTranslate.split('(')[1];
			timelineTranslate = timelineTranslate.split(')')[0];
			timelineTranslate = timelineTranslate.split(',');
			var translateValue = timelineTranslate[4];
		} else {
			var translateValue = 0;
		}

		return Number(translateValue);
	}

	function setTransformValue(element, property, value) {
		element.style["-webkit-transform"] = property + "(" + value + ")";
		element.style["-moz-transform"] = property + "(" + value + ")";
		element.style["-ms-transform"] = property + "(" + value + ")";
		element.style["-o-transform"] = property + "(" + value + ")";
		element.style["transform"] = property + "(" + value + ")";
	}

	//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	function parseDate(ideastormevents) {
		var dateArrays = [];
		ideastormevents.each(function () {
			var singleDate = $(this),
				dateComp = singleDate.data('date').split('T');
			if (dateComp.length > 1) { //both DD/MM/YEAR and time are provided
				var dayComp = dateComp[0].split('/'),
					timeComp = dateComp[1].split(':');
			} else if (dateComp[0].indexOf(':') >= 0) { //only time is provide
				var dayComp = ["2000", "0", "0"],
					timeComp = dateComp[0].split(':');
			} else { //only DD/MM/YEAR
				var dayComp = dateComp[0].split('/'),
					timeComp = ["0", "0"];
			}
			var newDate = new Date(dayComp[2], dayComp[1] - 1, dayComp[0], timeComp[0], timeComp[1]);
			dateArrays.push(newDate);
		});
		return dateArrays;
	}

	function daydiff(first, second) {
		return Math.round((second - first));
	}

	function minLapse(dates) {
		//determine the minimum distance among ideastormevents
		var dateDistances = [];
		for (var i = 1; i < dates.length; i++) {
			var distance = daydiff(dates[i - 1], dates[i]);
			dateDistances.push(distance);
		}
		return Math.min.apply(null, dateDistances);
	}

	/*
		How to tell if a DOM element is visible in the current viewport?
		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	*/
	function elementInViewport(el) {
		var top = el.offsetTop;
		var left = el.offsetLeft;
		var width = el.offsetWidth;
		var height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		);
	}

	function checkMQ() {
		//check if mobile or desktop device
		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
	}
}
export default timelinejs;