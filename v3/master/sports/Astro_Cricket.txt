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
            "file": "https://linearjitp02-playback.astro.com.my/dash-wv/linear/2504/default.mpd",
            "drm": {
              "clearkey": {
                "keyId": "03c2e0af2f8159f9f0ce9b5dbc865f10",
                "key": "cd84ed136b0cc71f8ab8cd4d4f6a2e4c"
              }
            },
            "label": "0"
          }
        ],
        image: "/images/play-cover.jpg",
        title: "Astro Cricket",
        description: "Live Watching on AK LIVE"
      }
    ],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);
  }); 
