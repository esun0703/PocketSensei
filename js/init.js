var keywordName=$("#searchinput").val();


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

 $(document).ready(function(){
      $('.carousel.carousel-slider').carousel({
        shift:0,
        padding:200,
        indicators:true,
        fullWidth: true,
      });
    });


$("#searchedKeywordTitle").html(keywordName)