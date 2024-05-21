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
            "file": "https://bpprod5catchup.akamaized.net/bpk-tv/irdeto_com_Channel_252/output/manifest.mpd?begin=20240517T000000&end=20240531T160000",
            "drm": {
              "clearkey": {
                "keyId": "52d365494fec5575b9315370a2ee4e15",
                "key": "2ea411c299e2c3fea3add5de08501061"
              }
            },
            "label": "0"
          }
        ],
        image: "/images/play-cover.jpg",
        title: "Star Sports 1 Hindi HD",
        description: "Join Telegram Channel @AK_LIVE_OFFICE"
      }
    ],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);
  }); 
