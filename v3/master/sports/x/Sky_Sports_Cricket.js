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
          {

            "type": "mpd",
            "file": "https://linear027-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_720_30/Live/channel(skysportscricket)/manifest_720.mpd",
            "drm": {
              "clearkey": {
                "keyId": "000543c0dc49b43c0e816c2a404249de",
                "key": "836c311dd132a49dbed1049d92800304"
              }
            },
            "label": "0"
          }
        ],
        image: "/images/play-cover.jpg",
        title: "Star Sports Select 1 HD",
        description: "Join Telegram Channel @AK_LIVE_OFFICE"
      }
    ],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);
  }); 
