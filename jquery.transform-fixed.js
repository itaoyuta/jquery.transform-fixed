/**
 * author Itao
 *    - based on the idea of protonet, https://github.com/protonet/jquery.inview
 */
(function (factory) {
  if (typeof define == 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS
    module.exports = factory(require('jquery'));
  } else {
      // Browser globals
    factory(jQuery);
  }
}(function ($) {

  $.fn.trfixed = function(opt){
    // opt.trdom -> transformするdom    
    // target - default 
    console.log('hogehoge trfixed: ' + opt.target);
    // return this;
  };




  var inviewObjects = [], viewportSize, viewportOffset,
      d = document, w = window, documentElement = d.documentElement, timer;

  $.event.special.trfixed = {
    add: function(data) {
      console.log('add しちゃう');
      inviewObjects.push({ data: data, $element: $(this), element: this });
      // Use setInterval in order to also make sure this captures elements within
      // "overflow:scroll" elements or elements that appeared in the dom tree due to
      // dom manipulation and reflow
      // old: $(window).scroll(checkInView);
      //
      // By the way, iOS (iPad, iPhone, ...) seems to not execute, or at least delays
      // intervals while the user scrolls. Therefore the inview event might fire a bit late there
      //
      // Don't waste cycles with an interval until we get at least one element that
      // has bound to the inview event.
      if (!timer && inviewObjects.length) {
         timer = setInterval(checkInView, 250);
      }
    },

    remove: function(data) {
      for (var i=0; i<inviewObjects.length; i++) {
        var inviewObject = inviewObjects[i];
        if (inviewObject.element === this && inviewObject.data.guid === data.guid) {
          inviewObjects.splice(i, 1);
          break;
        }
      }

      // Clear interval when we no longer have any elements listening
      if (!inviewObjects.length) {
         clearInterval(timer);
         timer = null;
      }
    }
  };

  // function getViewportSize() {
  //   var mode, domObject, size = { height: w.innerHeight, width: w.innerWidth };
  //
  //   // if this is correct then return it. iPad has compat Mode, so will
  //   // go into check clientHeight/clientWidth (which has the wrong value).
  //   if (!size.height) {
  //     mode = d.compatMode;
  //     if (mode || !$.support.boxModel) { // IE, Gecko
  //       domObject = mode === 'CSS1Compat' ?
  //         documentElement : // Standards
  //         d.body; // Quirks
  //       size = {
  //         height: domObject.clientHeight,
  //         width:  domObject.clientWidth
  //       };
  //     }
  //   }
  //
  //   return size;
  // }
  //
  // function getViewportOffset() {
  //   return {
  //     top:  w.pageYOffset || documentElement.scrollTop   || d.body.scrollTop,
  //     left: w.pageXOffset || documentElement.scrollLeft  || d.body.scrollLeft
  //   };
  // }
  //
  //
  // function getOffset(obj){
  //
  //   var rtObj = {
  //       "top": 0
  //     , "left": 0
  //   };
  //
  //   function recursive(_obj){
  //     rtObj.top += _obj.offsetTop;
  //     rtObj.left += _obj.offsetLeft;
  //     if(_obj.offsetParent !== null){
  //       recursive(_obj.offsetParent);
  //     }
  //
  //     return;
  //   }
  //
  //   recursive(obj);
  //
  //   return rtObj;
  // }
  //
  //
  function checkInView() {
    console.log('check absolute');
  //   if (!inviewObjects.length) {
  //     return;
  //   }
  //
  //   var i = 0, $elements = $.map(inviewObjects, function(inviewObject) {
  //     var selector  = inviewObject.data.selector,
  //         $element  = inviewObject.$element;
  //     return selector ? $element.find(selector) : $element;
  //   });
  //
  //   viewportSize   = viewportSize   || getViewportSize();
  //   viewportOffset = viewportOffset || getViewportOffset();
  //
  //   for (; i<inviewObjects.length; i++) {
  //     // Ignore elements that are not in the DOM tree
  //     if (!$.contains(documentElement, $elements[i][0])) {
  //       continue;
  //     }
  //
  //     var $element      = $($elements[i]),
  //         elementSize   = { height: $element[0].offsetHeight, width: $element[0].offsetWidth },
  //         elementOffset = getOffset($element[0]),
  //         inView        = $element.data('inview'),
  //         cZoom = $('body').css('zoom') != 1 ? $('body').css('zoom') : $('html').css('zoom');
  //     if(cZoom == undefined || cZoom == null || cZoom == false){
  //       cZoom = 1;
  //
  //       // if firefox
  //       var ua = window.navigator.userAgent.toLowerCase();
  //       if(ua.indexOf('firefox') !== -1){
  //         var tr = $('body')[0].style.transform != '' ? $('body')[0].style.transform : $('html')[0].style.transform;
  //         if(tr != ''){
  //           // if only scale...
  //           cZoom = tr.match(/\((.+)\)/)[1];
  //         }
  //       }
  //     }
  //
  //     // Don't ask me why because I haven't figured out yet:
  //     // viewportOffset and viewportSize are sometimes suddenly null in Firefox 5.
  //     // Even though it sounds weird:
  //     // It seems that the execution of this function is interferred by the onresize/onscroll event
  //     // where viewportOffset and viewportSize are unset
  //     if (!viewportOffset || !viewportSize) {
  //       return;
  //     }
  //
  //     if ((elementOffset.top + elementSize.height) * cZoom > viewportOffset.top &&
  //         elementOffset.top * cZoom  < viewportOffset.top + viewportSize.height &&
  //         (elementOffset.left + elementSize.width) * cZoom > viewportOffset.left &&
  //         elementOffset.left  * cZoom < viewportOffset.left + viewportSize.width) {
  //
  //       if (!inView) {
  //         $element.data('inview', true).trigger('inview', [true]);
  //       }
  //     } else if (inView) {
  //       $element.data('inview', false).trigger('inview', [false]);
  //     }
  //   }
  // }
  //
  // $(w).on("scroll resize scrollstop", function() {
  //   viewportSize = viewportOffset = null;
  // });
  //
  // // IE < 9 scrolls to focused elements without firing the "scroll" event
  // if (!documentElement.addEventListener && documentElement.attachEvent) {
  //   documentElement.attachEvent("onfocusin", function() {
  //     viewportOffset = null;
  //   });
  }
}));
