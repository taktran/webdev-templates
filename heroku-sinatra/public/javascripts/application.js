$(document).ready(function(){
  
  // Load sevenUp plugin - http://code.google.com/p/sevenup/ (modified from http://code.google.com/p/sevenup/issues/detail?id=22)
  {
    var osSupportsUpgrade = /(Windows NT 5.1|Windows NT 6.0|Windows NT 6.1|)/i.test(navigator.userAgent); // XP, Vista, Win7
    var options = {
      enableClosing: true,
      enableQuitBuggingMe: true,
      overlayColor: "#000000",  
      lightboxColor: "#ffffff",
      borderColor: "#6699ff",
      downloadLink: osSupportsUpgrade ? 
            "http://www.microsoft.com/windows/internet-explorer" :
            "http://getfirefox.com",
      overrideLightbox: false,
      lightboxHTML: null,
      showToAllBrowsers: false
    };
  
    var callback = function() {
      // Switch IE-specific content
      // AJAX call to map IP to 'IE6 user' status
      // etc.
    }
    sevenUp.plugin.black.test( options, callback );
  }
});
