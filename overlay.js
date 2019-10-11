(function(videojs) {
  'use strict';
   videojs.registerPlugin('videoOverlay', function() {
      var overlayIconList = {
          sensatori: "https://content.tui.co.uk/adamtui/2019_10/10_12/b2ffa42c-bc55-4e9d-bdec-aae200d196b7/OPTI_SENSATORI.png",
          suneo: "https://content.tui.co.uk/adamtui/2019_10/10_12/cfda577d-4eee-49a8-bcba-aae200d19593/OPTI_TUI_SUNEO.png",
          tui_blue: "https://content.tui.co.uk/adamtui/2019_10/10_12/1991beb6-e2a8-4d30-82a1-aae200d197c7/OPTI_TUI_BLUE.png",
          riu: "https://content.tui.co.uk/adamtui/2019_10/11_9/1c10e194-db34-4a91-b9c9-aae3009d6de7/OPTI_RIU.png",
          robinson: "https://content.tui.co.uk/adamtui/2019_10/11_9/552b2bec-8228-49e2-b6f4-aae3009d68cb/OPTI_ROBINSON.png",
          magic_life: "https://content.tui.co.uk/adamtui/2019_10/11_9/6efe7298-251c-4e60-a3ad-aae3009d6e6b/OPTI_MAGIC_LIFE.png"
      }
      var player = this,
      overlay = document.createElement('div'),
      dataObj = player.mediainfo.customFields;
      overlay.id = 'video_overlay';
      overlay.innerHTML = "<div id='videoOverlayInner'>"+ setHTML() +"</div>";
      player.el().appendChild(overlay);
     
       function checkForOverlay() {
            if (dataObj && (dataObj.video_overlay_product_icon || dataObj.video_overlay_title || dataObj.video_overlay_subtext)) {
              console.log("trueeee");

            }
        }
       function setHTML() {
            var overlayHTML = '';
            overlayHTML += dataObj.video_overlay_product_icon && overlayIconList[dataObj.video_overlay_product_icon] ? "<div class='video-overlay-image-container'><img src='"+ overlayIconList[dataObj.video_overlay_product_icon] +"'/></div>" : "";
            overlayHTML += dataObj.video_overlay_title ? "<h2>"+ dataObj.video_overlay_title +"</h2>" : "";
            overlayHTML += dataObj.video_overlay_title && dataObj.video_overlay_subtext ? "<hr/>" : "";
            overlayHTML += dataObj.video_overlay_subtext ? "<p>"+ dataObj.video_overlay_subtext +"</p>" : "";
            return overlayHTML;
        }
   });
}(window.videojs));
