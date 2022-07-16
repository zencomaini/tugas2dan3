(function ($) {
  
  $("#formValid").validate({
    rules: {
      name: {
        minlength: 3
      },
      email: {
        email: true
      },
      phone: {
        number: true,
          minlength: 10,
          maxlength: 12
      }
    },
    message: {
      name: {
        required: "Please enter your name"
      },
      email: "Please enter your email",
      phone: {
        required: "Please input number"
      }
    },
    submitHandler: function() {
      location.replace("index.html")
    }
  });

  var currentSlide = 1;
  var $footer_slider = $(".foodSlides");
  var slideCount = $footer_slider.children().length;
  var slideTime = 3000;
  var animationTime = 5000;

  setInterval(function(){
    $footer_slider.animate({
      marginLeft : '-=180vh'
    }, 
    animationTime , function() {
      currentSlide++;
      if(currentSlide === slideCount) {
        currentSlide = 1;
        $(this).css("margin-left", "0px")
      }
    });
  }, slideTime)
}(jQuery));

(function ($) {
 
  var currentSlide = 1;
  var $slider_video = $(".slide-img");
  var slideCount = $slider_video.children().length;
  var slideTime = 5000;
  var animationTime = 5000;

  setInterval(function(){
    $slider_video.animate({
      marginLeft : '-=110%'
    }, 
    animationTime , function() {
      currentSlide++;
      if(currentSlide === slideCount) {
        currentSlide = 1;
        $(this).css("margin-left", "0px")
      }
    });
  }, slideTime)
}(jQuery));