
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.carousel').carousel({
      shift:0,
      indicators:true,
      fullWidth: true,
    });

    $('.modal').modal({
        opacity: .5,
        endingBottom: '80%',
    });
});
