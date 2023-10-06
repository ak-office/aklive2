  const urlParams = new URLSearchParams(window.location.search);
  const aklive = urlParams.get('aklive');
  jwplayer("jwplayerDiv").setup({

    controls: "true",
    displaytitle: "true",
    fullscreen: "true",
    primary: 'html5',
    stretching: "exactfit",
    autostart: "false",
    

    captions: {
      color: '#fff000',
      fontSize: 14,
      backgroundOpacity: 0,
      edgeStyle: 'raised'
    },

    playlist: [
      ,
      {
        title: "𝗜𝗣𝗟 𝟮𝟬𝟮𝟯 - 𝗔𝗞 𝗟𝗜𝗩𝗘",
        description: "Watching on Avdhesh Kushwah LIVE",
        image: "https://v3img.voot.com/v3Storage/assets/finals_csk_vs_gt_carousel-1685273680050.jpg",
        sources: [{
          file: aklive,
          type: 'video/mp4',
        }],
      }],

    "image": "https://v3img.voot.com/v3Storage/assets/finals_csk_vs_gt_carousel-1685273680050.jpg"
  }).on('ready', function () {
    // Set poster image for video element to avoid black background for audio-only programs.
    var video = document.getElementById(this.id).getElementsByTagName('video')[0];
    if (video) video.setAttribute('poster', this.getConfig().image);

  });