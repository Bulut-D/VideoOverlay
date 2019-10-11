(function(videojs) {
  'use strict';
   videojs.plugin('videoOverlay', function() {
       var player = this;
       console.log(player);
   });
}(window.videojs));
