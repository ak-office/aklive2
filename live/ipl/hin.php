<!DOCTYPE html>
  
 <title> M1 Hindi (Ad-Free)  </title> 
</head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<script disable-devtool-auto='true' src='https://cdn.jsdelivr.net/npm/disable-devtool' clear-log='true'
  disable-select='true' disable-copy='true' disable-cut='true' disable-paste='true'></script>
<script src="/js/click-heart.js" defer></script>
<script src="/js/prodevs.js"></script>
<script src="/login/protection.js"> </script>
<link rel="stylesheet" href="/css/jw.css">
<script src="/js/jw-topleft.js"></script>
<div id="jwplayerDiv"></div> 
<script>
   jwplayer("jwplayerDiv").setup({

    controls: true,
    displaytitle: true,
    fullscreen: "true",
    primary: 'html5',
    stretching: "exactfit",
    autostart: false,
    "logo":    {
        "file": "/images/play-logo.png",
        "hide": false,
        "link": "https://aklive.bio.link",
        "margin": "20",
        "position": 'top-left'
    },

  "playlist": [
      {
        "sources": [
          null,
          {

            "type": "dash",
            "file": "https://prod-sports-north-gm.jiocinema.com/bpk-tv/M1_IPL24_Hin_HD_IDC_AND/Fallback/index.m3u8",
            "label": "0"
          }
        ],
        image: "/images/play-cover.jpg",
        title: "Sony Sports Ten 1 HD",
        description: "Live Watching on AK LIVE"
      }
    ],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);
  }); 
</script>

  <script>
    
    if (confirm("Join Telegram Channel For Latest Update") == true) {
      window.open("/link/telegram.html", '_blank');
    }
  </script>
  
</html>
