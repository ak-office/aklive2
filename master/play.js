  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  jwplayer("jwplayerDiv").setup({

    controls: "true",
    displaytitle: "true",
    fullscreen: "true",
    stretching: "exactfit",
    autostart: "false",
    primary: "html5",
    hlshtml: "true",

    playlist: [
      ,
      {
        title: "𝗔𝗞 𝗟𝗜𝗩𝗘",
        description: "Join Our Telegram @AK_LIVE_Office",
        image: "/images/play-cover.jpg",
        sources: [{
          file: id,
          type: 'hls',
          label: "0"
        }],
      }],

    "image": "/images/play-cover.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);

  });
