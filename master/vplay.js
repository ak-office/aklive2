  const urlParams = new URLSearchParams(window.location.search);
  const aklive = urlParams.get('aklive');
  jwplayer("jwplayerDiv").setup({

    controls: "true",
    displaytitle: "true",
    fullscreen: "true",
    stretching: "exactfit",
    autostart: "false",
    primary: "html5",
    hlshtml: "true",
    "logo":    {
        "file": "/images/play-logo.png",
        "hide": true,
        "position": 'top-left'
    },

    playlist: [
      ,
      {
        title: "𝗔𝗞 𝗟𝗜𝗩𝗘",
        description: "Watching on AK LIVE",
        image: "/master/akplay.jpg",
        sources: [{
          file: aklive,
          type: 'video/mp4',
          label: "0"
        }],
      }],

    "image": "/master/akplay.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);

  });