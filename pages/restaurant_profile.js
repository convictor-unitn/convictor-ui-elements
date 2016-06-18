
$(document).ready(function(){
  $('.ui.rating').rating();

  $('.tabular.menu .item').tab();

  $('.reply.form').hide();

  $('.actions .reply').click(function(){
    $(this).parent().next().toggle();
  });

  $('.reply.form .button').click(function(){
    $(this).parent().toggle();
  });
});
