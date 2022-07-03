$(document).ready(function() {
//  $(".fake-div").scroll(function() {



    //$("h5").css("color", "pink");




function reveal() {
  var reveals = document.querySelectorAll(".count-up");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
    $(".counter").each(function () {
      var count = $(this);
      var countTo = count.attr("data-count");

      $({countNum:count.text()}).animate({
        countNum:countTo,
      },
    {
      duration:3000,
      easing:"linear",
      step:function(){

    count.text(Math.floor(this.countNum));
  },
   complete:function(){
     count.text(this.countNum);
   }
  });
});
      //reveals[i].classList.add("scrolled");
    } else {
      $("h5").css("color", "red");
    //  reveals[i].classList.remove("scrolled");
    }
  }
}



window.addEventListener("scroll", reveal);



  //$("h5").css("background", "yellow");

  //});
});



//$("h5").css("color", "red");


//$(document).ready(function () { });







//window.addEventListener("scroll", countReveal);


/*var a = 0;
$(window).scroll(function() {

  var oTop = $("#counter").offset().top - window.innerheight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
         countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },
    {
      duration: 2000,
      easing: 'swing',
      step: function() {
        $this.text(this.countNum);
      }
    });
  });
  a = 1;
  }
});*/
