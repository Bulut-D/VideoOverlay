(function(videojs) {
  'use strict';
   videojs.registerPlugin('videoOverlay', function() {
      var player = this,
      overlay = document.createElement('div');
      overlay.id = 'video_overlay';
      overlay.innerHTML = "<div id='videoOverlayInner'></div>";
      player.el().appendChild(overlay);
     
     function checkForOverlay() {
          var dataObj = player.mediainfo.customFields;
          if (dataObj && (dataObj.video_overlay_product_icon || dataObj.video_overlay_title || dataObj.video_overlay_subtext)) {
            console.log("trueeee");  
            //videoOverlay.classList.add("overlay-fade-in");
          }
      }
   });
}(window.videojs));
