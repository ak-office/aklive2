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
            "file": "https://linear027-gb-dash1-prd-ll.cdn.skycdp.com/016a/Content/DASH_003_720_30/Live/channel(skysportscricket)/manifest_720.mpd",
            "drm": {
              "clearkey": {
                "keyId": "0003a6c61c2b2f7f0a9d760ac83c06d8",
                "key": "7305fa96d356316f2d544bfc78a6922c"
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
