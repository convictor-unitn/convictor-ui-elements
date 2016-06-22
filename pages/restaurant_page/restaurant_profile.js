
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
  $("#slides").slidesjs({
    width: 800,
    height: 800,
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 2000,
        // [number] Time spent on each slide in milliseconds.
      auto: false,
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
