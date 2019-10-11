(function(videojs) {
  'use strict';
   videojs.registerPlugin('videoOverlay', function() {
      var player = this,
      overlay = document.createElement('p');
      overlay.className = 'vjs-overlay';
      overlay.innerHTML = "Becoming a plugin developer";
      player.el().appendChild(overlay);
   });
}(window.videojs));
