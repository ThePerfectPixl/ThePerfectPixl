$(document).ready(function(){
	$("#menu").click(function(){
    $(".nav").toggle("0.5");
});
  $(function () {
    var parent = $("#gen_image, #big_image");
    var divs = parent.children('a');
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});
	$('body').on('click touchstart', function () {
            const videoElement = document.getElementById('home_video');
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play();
            }
});
  $('.image-link').magnificPopup({
  type: 'image',
  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: true, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }
});
  
});

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

const videoElement = document.getElementById('ID_of_video');
        videoElement.addEventListener('suspend', () => {
            // suspend invoked
            // show play button
        });

        videoElement.addEventListener('play', () => {
            // video is played
            // remove play button UI
        });



