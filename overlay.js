var overlayIconList = {
    sensatori: "https://content.tui.co.uk/adamtui/2019_10/10_12/b2ffa42c-bc55-4e9d-bdec-aae200d196b7/OPTI_SENSATORI.png",
    suneo: "https://content.tui.co.uk/adamtui/2019_10/10_12/cfda577d-4eee-49a8-bcba-aae200d19593/OPTI_TUI_SUNEO.png",
    tui_blue: "https://content.tui.co.uk/adamtui/2019_10/10_12/1991beb6-e2a8-4d30-82a1-aae200d197c7/OPTI_TUI_BLUE.png",
    riu: "https://content.tui.co.uk/adamtui/2019_10/11_9/1c10e194-db34-4a91-b9c9-aae3009d6de7/OPTI_RIU.png",
    robinson: "https://content.tui.co.uk/adamtui/2019_10/11_9/552b2bec-8228-49e2-b6f4-aae3009d68cb/OPTI_ROBINSON.png",
    magic_life: "https://content.tui.co.uk/adamtui/2019_10/11_9/6efe7298-251c-4e60-a3ad-aae3009d6e6b/OPTI_MAGIC_LIFE.png"
}

videojs.getPlayer('videoOverlayPlayer').ready(function() {
  /* Referencing the player */
  var myPlayer = this;
  
  !document.querySelector("#videoOverlay") ? document.querySelector("#videoOverlayPlayer").insertAdjacentHTML('afterend', '<div id="videoOverlay"><div id="videoOverlayInner"></div></div>') : null;
  
  /* Check for custom fields as to display the overlay or not */
  function checkForOverlay() {
      var dataObj = myPlayer.mediainfo.customFields;
      if (dataObj && (dataObj.video_overlay_product_icon || dataObj.video_overlay_title || dataObj.video_overlay_subtext)) {
          videoOverlay.classList.add("overlay-fade-in");
      }
  }
  
  /* Set the overlay HTML based on which custom fields exist */
  function setHTML() {
      var overlayHTML = '';
      var dataObj = myPlayer.mediainfo.customFields;
      overlayHTML += dataObj.video_overlay_product_icon && overlayIconList[dataObj.video_overlay_product_icon] ? "<div class='video-overlay-image-container'><img src='"+ overlayIconList[dataObj.video_overlay_product_icon] +"'/></div>" : "";
      overlayHTML += dataObj.video_overlay_title ? "<h2>"+ dataObj.video_overlay_title +"</h2>" : "";
      overlayHTML += dataObj.video_overlay_title && dataObj.video_overlay_subtext ? "<hr/>" : "";
      overlayHTML += dataObj.video_overlay_subtext ? "<p>"+ dataObj.video_overlay_subtext +"</p>" : "";
      return overlayHTML;
  }
  
  /* When the video loads, set any required HTML, check if it exists and if it does fade overlay in */
  myPlayer.on("firstplay", function() {
      videoOverlayInner.innerHTML = setHTML();
      checkForOverlay();
      overlayFadeOut();
  });
});

/* Fade overlay back out */
function overlayFadeOut() {
    setTimeout(function() {
        videoOverlay.classList.remove("overlay-fade-in")
    },3000)
}
