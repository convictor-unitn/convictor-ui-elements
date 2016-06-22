// Image slider control functions
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}



$(document).ready(function(){
  //Star rating initializer
  $('.ui.rating').rating();

  //Tabular menu initializer
  $('.tabular.menu .item').tab();

  //Hides all reply forms in reviews
  $('.comments .reply.form').hide();

  //Manages to show/hide reviews
  $('.actions .reply').click(function(){
    $(this).parent().next().toggle();
  });

  $('.comments .reply.form .button').click(function(){
    $(this).parent().toggle();
  });

  //Add new image modal initializer
  $('.ui.modal').modal();

  $(".add_image").click(function(){
    $('.ui.modal')
    .modal({
      blurring: true
    })
    .modal('show');
  });

});
