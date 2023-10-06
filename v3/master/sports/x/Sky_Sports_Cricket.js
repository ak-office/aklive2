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
            "file": "https://linear003-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_sd/Live/channel(skysportscricket)/manifest_sd.mpd",
            "drm": {
              "clearkey": {
                "keyId": "0003ebd896e56bfb036e1a91be3d70ad",
                "key": "df0ec40586d641f3d4728ab5fd62adc3"
              }
            },
            "label": "0"
          }
        ],
        image: "/images/play-cover.jpg",
        title: "Sky Sports Cricket",
        description: "Live Watching on AK LIVE"
      }
    ],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);
  }); 
