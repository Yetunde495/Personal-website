$(document).ready(function() {

function firstReveal() {
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
    } else {

    reveals[i].classList.remove("scrolled");
    }
  }
}



window.addEventListener("scroll", firstReveal);
});





 var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 300;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  /*var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);*/
};


//////////////////////

function reveal() {
  var reveals = document.querySelectorAll(".js-scroll");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("scrolled");
    } else {
      reveals[i].classList.remove("scrolled");
    }
  }
}



window.addEventListener("scroll", reveal);



///////////////////////////
/*const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {
    const scrollElements = entry.target.querySelector(".js-scroll");

    if (entry.isIntersecting) {
      scrollElements.classList.add('scrolled');
      return;
    }
      scrollElements.classList.remove('scrolled');
  });
});

observer.observe(document.querySelector('.on-scroll'));*/


  //portfolio

  document.getElementsByClassName("offcanvas-link");
var clicked = document.querySelectorAll(".clicked-link");

document.getElementById("portfolio-button").addEventListener("click", function() {
  document.getElementById("o-b").style.backgroundColor = "#141414";


});
