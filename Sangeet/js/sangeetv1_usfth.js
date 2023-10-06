/***********************************************************
 * SOURCE CODE WRITTEN BY D3V IPTV ~ TELEGRAM
 *  - - - - - - - - - - - - - - - - - - - - - - - - 
 *      https://telegram.dog/d3viptv
 *      
 * **********************************************************/

$(document).ready(function()
{
    showelmodal();
});

let song_id = "";
let isPlaying = false;
let updateTimer;
let curr_time = document.querySelector(".play-current-time");
let total_duration = document.querySelector(".play-total-time");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume");
var curr_track = document.createElement('audio');

$("#sangeet_ka_naam").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      search_gaana();
    }
});

function showmodal()
{
  $("#iuwelcomeModal").modal("show");
}

function trigger_carousel()
{
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      dots: false,
      responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
      }
  });
  
  $(".albumdemoholder").each(function(i, obj)
  {
    let img_src = $(this).attr("data-src");
    $(this).attr("src",img_src);
  });
}

function showelmodal()
{
    let langs = ["hindi","english","punjabi","tamil","telugu","malayalam","marathi","bengali","gujarati","bengali","kannada","urdu","bhojpuri"];
    $("#iuwelcomeModal").modal("show");
    $.each(langs, function(k,v){
        load_latest(v);
    });
}
function load_latest(v)
{
  $.ajax({
    "url": API_BASE_URL + "api/latest_releases",
    "data": "l=" + v,
    "beforeSend":function(xhr)
    {

    },
    "success":function(data)
    {
      let sanItm = "";
      try { data = JSON.parse(data); }catch(err){}
      if(data.status == "success")
      {
        sanItm = sanItm + '<div class="latest_items">';
        sanItm = sanItm + capitalizeMe(v);
        sanItm = sanItm + '<div class="owl-carousel owl-theme mt-3">';
        $.each(data.data, function(k,v)
        {
          if(v.type == "song")
          {
            sanItm = sanItm + '<div class="item">';
            sanItm = sanItm + '<img class="albumdemoholder" src="https://i.postimg.cc/59K5sGGR/default-album.png" data-sid="' + v.id + '" onclick="opensongs(this)" data-src="' + v.image + '" alt="' + v.title + '"/>';
            sanItm = sanItm + '<span id="sangeet_item_holder">' + v.title + '</span>';
            sanItm = sanItm + '</div>';
          }
          else
          {
            sanItm = sanItm + '<div class="item">';
            sanItm = sanItm + '<img class="albumdemoholder" data-type="' + v.type + '" data-bid="' + v.id + '" onclick="openbundle(this)" src="https://i.postimg.cc/59K5sGGR/default-album.png" data-src="' + v.image + '" alt="' + v.title + '"/>';
            sanItm = sanItm + '<span id="sangeet_item_holder">' + v.title + '</span>';
            sanItm = sanItm + '</div>';
          }
        });
        sanItm = sanItm + '</div>';
        sanItm = sanItm + '</div>';
        $("#sangeet_latest_releases").append(sanItm);
        trigger_carousel();
      }
    },
    "error":function(data)
    {

    }
  });
}

function altersearchshow(s)
{
  let maht = '<div class="spinner-border" id="searchspinner" role="status"><span class="visually-hidden">Loading...</span></div>';
  if(s == "show")
  {
    $("#sangeet_search_result").html(maht);
    $("#sangeet_search_result").fadeIn();
  }
  else
  {
    $("#searchspinner").remove();
  }
}

function search_gaana()
{
  $("#headforSearchItems").fadeIn();
  $("#collapseTwo").attr("class", "accordion-collapse collapse show");
  altersearchshow("show");
  let query = $("#sangeet_ka_naam").val();
  $.ajax({
    "url": API_BASE_URL + "api/search?q=" + encodeURIComponent(query),
    "type": "GET",
    "beforeSend": function(xhr)
    {

    },
    "success":function(data)
    {
      altersearchshow("hide");
      let sanItm = "";
      try { data = JSON.parse(data); }catch(err){}
      if(data.status == "success")
      {
        sanItm = sanItm + '<div class="latest_items">';
        sanItm = sanItm + 'Songs';
        sanItm = sanItm + '<div class="owl-carousel owl-theme mt-3">';
        $.each(data.data, function(k,v)
        {
          if(v.type == "song")
          {
            sanItm = sanItm + '<div class="item">';
            sanItm = sanItm + '<img class="albumdemoholder" src="https://i.postimg.cc/59K5sGGR/default-album.png" data-sid="' + v.id + '" onclick="opensongs(this)" data-src="' + v.image + '" alt="' + v.title + '"/>';
            sanItm = sanItm + '<span id="sangeet_item_holder">' + v.title + '</span>';
            sanItm = sanItm + '</div>';
          }
        });
        sanItm = sanItm + '</div>';
        sanItm = sanItm + '</div>';

        sanItm = sanItm + '<div class="latest_items">';
        sanItm = sanItm + 'Albums';
        sanItm = sanItm + '<div class="owl-carousel owl-theme mt-3">';
        $.each(data.data, function(k,v)
        {
          if(v.type !== "song")
          {
            sanItm = sanItm + '<div class="item">';
            sanItm = sanItm + '<img class="albumdemoholder" data-type="' + v.type + '" data-bid="' + v.id + '" onclick="openbundle(this)" src="https://i.postimg.cc/59K5sGGR/default-album.png" data-src="' + v.image + '" alt="' + v.title + '"/>';
            sanItm = sanItm + '<span id="sangeet_item_holder">' + v.title + '</span>';
            sanItm = sanItm + '</div>';
          }
        });
        sanItm = sanItm + '</div>';
        sanItm = sanItm + '</div>';

        $("#sangeet_search_result").html(sanItm);
        trigger_carousel();

      }
      else
      {
        altersearchshow("hide");
        alert("No Result Found");
      }
    },
    "error":function(data)
    {

    }
  });
}

function opensongs(e)
{
  let song_id = $(e).attr("data-sid");
  sessionStorage.removeItem("songs_list");
  sessionStorage.removeItem("album_detail");
  sessionStorage.removeItem("playingSongSEQ");
  play_song(song_id);
  $("#iuwelcomeModal").modal("hide");
  $("#albumsongslistbtn").fadeOut();
  $(".mhn-player").fadeIn();
}

function openbundle(e)
{
  let bundle_type = $(e).attr("data-type");
  let bundle_id = $(e).attr("data-bid");
  $.ajax({
    "url": API_BASE_URL + "api/bundle_details",
    "type": "GET",
    "data": "id=" + bundle_id + "&type=" + bundle_type,
    "beforeSend": function(xhr)
    {

    },
    "success":function(data)
    {
      try { data = JSON.parse(data); }catch(err){}
      if(data.status == "success")
      {
        $("#iuwelcomeModal").modal("hide");
        $(".song-title").html(data.data.title);
        $(".album-art").html('<img src="' + data.data.image + '" alt=""/>');
        $(".song-artist").html('<span class="song-artist" style="font-size: 12px;">Loading Songs ... </span>');
        sessionStorage.setItem("songs_list", JSON.stringify(data.data.songs));
        sessionStorage.setItem("album_detail", JSON.stringify(data.data));
        sessionStorage.setItem("playingSongSEQ", 0);
        play_song(data.data.songs[0].id);
        $("#albumsongslistbtn").fadeIn();
        $(".mhn-player").fadeIn();
      }
      else
      {
        alert("Failed To Load Album");
      }
    },
    "error": function(data)
    {
      alert("Failed To Load Album");
    }
  });
}

function play_song(song_id)
{
  $.ajax({
    "url": API_BASE_URL + "api/song_details",
    "data": "id=" + song_id,
    "type": "GET",
    "beforeSend": function(xhr)
    {

    },
    "success":function(data)
    {
      try { data = JSON.parse(data); }catch(err){}
      if(data.status == "success")
      {
        sessionStorage.setItem("playingSongID", song_id);
        sessionStorage.setItem("playingSongNAME", data.data.title);
        let tstitle = '';
        $(".song-artist").html('<span class="song-artist" style="font-size: 12px;"><i class="fa fa-user" style="font-size: 12px;"></i> ' + data.data.artists +'</span>');
        $(".song-album").html('<span class="album" style="font-size: 13.5px;"><i class="fa fa-music" style="font-size: 13.5px;"></i> ' + data.data.album + '</span>');
        if(data.data.title.length > 15)
        {
          tstitle = '<marquee><div class="song-title"><i class="fa fa-headphones"></i> ' + data.data.title + '</div></marquee>';
        }
        else
        {
          tstitle = '<div class="song-title"><i class="fa fa-headphones"></i> ' + data.data.title + '</div>';
        }
      $(".song-title").html(tstitle);
      $(".album-art").html('<img src="' + data.data.image + '" alt=""/>');
      document.title = data.data.title + ' | Music Player - Sangeet By UsefulToolsHub';
      resetValues();
      clearInterval(updateTimer);
      curr_track.autoplay = true;
      curr_track.src = API_BASE_URL + "api/play?token=" + makeid(32) + "&id=" + data.data.media_id;
      $("#defaultloader").fadeOut();
    window.setTimeout(function(){
        $("#ctrlbtns").fadeIn();
        $(".toggle-play-list").fadeIn();
    }, 1000);
    
    isPlaying = true;
    if(isSPlaying)
    {
        updateTimer = setInterval(seekUpdate, 1000);
        $(".stop").css('color', '#444');
        $(".play-pause").css('color', '#FFFFFF');
        $(".play-pause").html('<i class="fa fa-pause" aria-hidden="true"></i>');
    }

      }
    },
    "error":function(data)
    {

    }
  });
}

function resetValues()
{
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function capitalizeMe(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function seekUpdate()
{
    let seekPosition = 0;

    if(!isNaN(curr_track.duration))
    {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

curr_track.addEventListener("playing", function()
{
    $("#music_is_playing").attr('src', 'ltlmusic.json');
    $("#music_is_playing").fadeIn();
    $(".play-pause").html('<i class="fa fa-pause" aria-hidden="true"></i>');
    isPlaying = true;
});

curr_track.addEventListener("waiting", function()
{
    $("#music_is_playing").attr('src', '');
    $(".play-pause").html('<i class="fa fa-pp" aria-hidden="true"></i>');
    $("#music_is_playing").attr('src', 'musicf.json?v=1');
});
curr_track.addEventListener("ended", function()
{
    $(".play-pause").css('color', '#444');
    $(".play-pause").html('<i class="fa fa-pp" aria-hidden="true"></i>');
    $("#ctrlbtns").fadeOut();
    $(".toggle-play-list").fadeOut();
    $("#defaultloader").fadeIn();
    loadnextsong();
});

function seekTo()
{
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function loadnextsong()
{
  let songs_list = JSON.parse(sessionStorage.getItem("songs_list")); //Songs List
  let current_playing_id = sessionStorage.getItem("playingSongID"); //Current Song ID Playing ID
  let song_sequence = sessionStorage.getItem("playingSongSEQ"); //Current Song Playing Sequence
  if(songs_list !== null)
  {
    let totalSongs = Number(songs_list.length) - Number(1);
    if(totalSongs > song_sequence)
    {
      let new_song_sequence = Number(song_sequence) + Number(1);
      sessionStorage.setItem("playingSongSEQ", new_song_sequence);
      play_song(songs_list[new_song_sequence]['id']);
    }
    else
    {
      sessionStorage.setItem("playingSongSEQ", 0);
      play_song(songs_list[0]['id']);
    }
  }
  else
  {
    play_song(current_playing_id);
  }
}

function loadprevsong()
{
  let songs_list = JSON.parse(sessionStorage.getItem("songs_list")); //Songs List
  let current_playing_id = sessionStorage.getItem("playingSongID"); //Current Song ID Playing ID
  let song_sequence = sessionStorage.getItem("playingSongSEQ"); //Current Song Playing Sequence
  if(songs_list !== null)
  {
    let totalSongs = Number(songs_list.length) - Number(1);
    if(song_sequence == 0)
    {
      sessionStorage.setItem("playingSongSEQ", totalSongs);
      play_song(songs_list[totalSongs]['id']);
    }
    else
    {
      let new_song_sequence = Number(song_sequence) - Number(1);
      sessionStorage.setItem("playingSongSEQ", new_song_sequence);
      play_song(songs_list[new_song_sequence]['id']);
    }
  }
  else
  {
    play_song(current_playing_id);
  }
}

function playpausesong()
{
    if(isPlaying == false)
    {
        $(".stop").css('color', '#444');
        $(".play-pause").css('color', '#FFFFFF');
        $(".play-pause").html('<i class="fa fa-pause" aria-hidden="true"></i>');
        curr_track.play();
        isPlaying = true;
        updateTimer = setInterval(seekUpdate, 1000);
    }
    else
    {
        curr_track.pause();
        $(".play-pause").html('<i class="fa fa-pp" aria-hidden="true"></i>');
        isPlaying = false;
        $("#music_is_playing").fadeOut();
    }
}

function isSPlaying(curr_track) { return !curr_track.paused; }

function downloadsong()
{
  let current_song_name = sessionStorage.getItem("playingSongNAME");
  let current_song_id = sessionStorage.getItem("playingSongID");
  let download_url = API_BASE_URL + "api/download_song?token=" + makeid(32) + "&id=" + current_song_id + "&name=" + btoa(current_song_name);
  window.open(download_url, '_open');
}

function showsongslist()
{
  let songz_list = "";
  let album_data = JSON.parse(sessionStorage.getItem("album_detail"));
  let songs_list = JSON.parse(sessionStorage.getItem("songs_list"));
  let current_song_id = sessionStorage.getItem("playingSongID");
  let r = 0;
  $.each(songs_list, function(k,v){
    songz_list = songz_list + '<button type="button" data-sq="' + r + '" data-songid="' + v.id + '" onclick="playfromalbumsonglist(this)" class="list-group-item list-group-item-action';
    if(current_song_id == v.id)
    {
      songz_list = songz_list + ' active"><i class="fa fa-volume-up';
    }  
    else
    {
      songz_list = songz_list + '"><i class="fa fa-music';
    }
    songz_list = songz_list + '" aria-hidden="true"></i>&nbsp;&nbsp;<span style="font-size: 14px;">' + v.title + '</span></button>';
    r++;
  });
  $("#albumSongsListModalLabel").text(album_data.title + " Songs");
  $("#album_songs_mholder").html(songz_list);
  $("#albumSongsListModal").modal("show");
}

function playfromalbumsonglist(e)
{
  let song_id = $(e).attr('data-songid');
  let song_sequence = $(e).attr('data-sq');
  play_song(song_id);
  $("#albumSongsListModal").modal("hide");
  sessionStorage.setItem("playingSongSEQ", Number(song_sequence));
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}