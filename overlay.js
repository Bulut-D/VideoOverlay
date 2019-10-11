(function(videojs) {
  'use strict';
   videojs.registerPlugin('videoOverlay', function() {
       var player = this;
       player.el().appendChild('<p>hello</p>');
       console.log("hit");
       console.log(player);
   });
}(window.videojs));
