dotNav('section', 'easeInOutCubic');

/*var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
*/
/**
 * Frame-by-frame video animation with ScrollMagic and GSAP
 * 
 * Note that your web server must support byte ranges (most do).
 * Otherwise currentTime will always be 0 in Chrome.
 */

 /*
var video = document.getElementById('video');
var long = document.getElementById('long');
var scrollpos = 0;
var lastpos;
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: long,
  triggerHook: "onEnter"
});
var startScrollAnimation = () => {
  scene
    .addTo(controller)
    .duration(long.clientHeight)
    .on("progress", (e) => {
      scrollpos = e.progress;
    });

  setInterval(() => {
    if (lastpos === scrollpos) return;
    requestAnimationFrame(() => {
      video.currentTime = video.duration * scrollpos;
      video.pause();
      lastpos = scrollpos;
      // console.log(video.currentTime, scrollpos);
    });
  }, 50);
};

var preloadVideo = (v, callback) => {
  var ready = () => {
    v.removeEventListener('canplaythrough', ready);

    video.pause();
    var i = setInterval(function() {
      if (v.readyState > 3) {
        clearInterval(i);
        video.currentTime = 0;
        callback();
      }
    }, 50);
  };
  v.addEventListener('canplaythrough', ready, false);
  v.play();
};

preloadVideo(video, startScrollAnimation);

// startScrollAnimation();
*/

$( document ).ready(function() {
  console.log( "ready!" );
});

// select video element
var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();

// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
  vid.pause();
};

// refresh video frames on interval for smoother playback
// pageXOffset/x will determine how fast a scroll will scrub through video
// the lower the number, the more frames will be covered in a scroll
setInterval(function(){
  vid.currentTime = window.pageYOffset/255;
}, 45);

// alternate between two specific locations on page with keystrokes 'f' and 'j'
document.body.onkeydown = function(event){
event = event || window.event;
var keycode = event.charCode || event.keyCode;
  if(keycode === 70){
      window.scrollTo(0,0);
  }
  else if (keycode === 74){
      window.scrollTo(0,800);
  }
}