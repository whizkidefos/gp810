dotNav('section', 'easeInOutCubic');

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

//GSAP and ScrollMagic animations
/*var tl = new TimelineMax({onUpdate:updatePercentage});
var controller = new ScrollMagic.Controller();

tl.from("#chapter-01", .5, {x:200, opacity: 0});

var scene = new ScrollMagic.Scene({
  triggerElement: "#chapter-01",
  troggerHook: "onLeave",
  duration: "100%"
})
.setPin("#chapter-01")
.setTween(tl)
.addTo(controller);*/
$(document).ready(function(){
  
  //init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //Build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: '#chapter-02'
  })
  .setClassToggle('#chapter-02', 'slide-top')
  .addTo(controller);

});