
$(document).ready(function(){
  $('.ui.rating').rating();

  $('.tabular.menu .item').tab();

  $('.comments .reply.form').hide();

  $('.actions .reply').click(function(){
    $(this).parent().next().toggle();
  });

  $('.comments .reply.form .button').click(function(){
    $(this).parent().toggle();
  });

  // Image slider control functions
  $(function(){
    $("#slides").slidesjs({
      width: 300,
      height: 300,
      play: {
        active: false,
          // [boolean] Generate the play and stop buttons.
          // You cannot use your own buttons. Sorry.
        effect: "slide",
          // [string] Can be either "slide" or "fade".
        interval: 2000,
          // [number] Time spent on each slide in milliseconds.
        auto: true,
          // [boolean] Start playing the slideshow on load.
        swap: true,
          // [boolean] show/hide stop and play buttons
        pauseOnHover: false,
          // [boolean] pause a playing slideshow on hover
        restartDelay: 2500
          // [number] restart delay on inactive slideshow
      }
    });
  });

});
