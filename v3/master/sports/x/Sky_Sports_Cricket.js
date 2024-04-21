if(confirm("Join Our Telegram Channel @AK_LIVE_OFFICE")) { window.location.href = "https://telegram.me/AK_LIVE_OFFICE" }

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
            "file": "https://linear007-gb-dash1-prd-ak.cdn.skycdp.com/016a/Content/DASH_003_720_120/Live/channel(skysportscricket)/manifest_720-120.mpd",
            "drm": {
              "clearkey": {
                "keyId": "0005cd7d2b9121a3c8586709d03f0e16",
                "key": "aa548c9e2a24dd9cfda694a89c4b8dce"
              }
            },
            "label": "0"
          }
        ],
        image: "/images/play-cover.jpg",
        title: "Sky Sports Cricket",
        description: "Join Telegram Channel @AK_LIVE_OFFICE"
      }
    ],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);
  }); 
