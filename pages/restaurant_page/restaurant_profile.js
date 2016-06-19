
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
});
