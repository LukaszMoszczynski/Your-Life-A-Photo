$(document).ready(function(){       
   //sticky navbar
  if($(window).width() >= 768) {
    var scroll_start = 0;  
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
      $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar-default").css('background-color', '#000000');
            $(".navbar-default").css('padding-top', '0');
         } else {
            $('.navbar-default').css('background-color', 'transparent');
            $(".navbar-default").css('padding-top', '25px');
         }
      });
    }
  }
//1 st carousel
  var carouselList = $("#my-carousel .images");
  function moveFirstSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem);
    carouselList.css({marginLeft: -320});
    
  }

  function changeNextSlide() {
    carouselList.animate({"marginLeft": -640}, 0, moveFirstSlide);
    nextCount();
  }

  var interval = setInterval(changeNextSlide, 3000);


  function moveLastSlide() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    firstItem.before(lastItem);
    carouselList.css({"marginLeft": -320});
    
  }

  function changePrevSlide() {
    carouselList.animate({"marginLeft": 0}, 0, moveLastSlide);
    prevCount();
  }

  $("#design-left").click(function(event) {
    changePrevSlide();
  });
  $("#design-right").click(function(event) { 
    changeNextSlide();
  });
  $(".navigation").mouseover(function(event) {
    clearInterval(interval);
  });
  $(".navigation").mouseout(function(event) {
    clearInterval(interval);
    interval = setInterval(changeNextSlide, 3000);
  });

  var number = $("#design-id");
  var maxNumber = $("#design-max");
  var numberVar = number.html();
  var maxNumberVar = maxNumber.html();

  function nextCount(){
    numberVar++;
    if (numberVar > 1 && numberVar <= maxNumberVar){
      number.text('0' + numberVar);
    } else {
    numberVar = 1;
    number.text('0' + numberVar);
   }
  }

  function prevCount(){
    numberVar--;
      if (numberVar >= 1 && numberVar <= maxNumberVar){
        number.text('0' + numberVar);
      } else {
      numberVar = maxNumberVar;
      number.text(numberVar);
     }
  }

//2nd carousel

  var carouselList2 = $("#my-carousel2 .images");
  function moveFirstSlide2() {
    var firstItem = carouselList2.find("li:first");
    var lastItem = carouselList2.find("li:last");
    lastItem.after(firstItem);
    carouselList2.css({marginLeft: -420});
  }
  function changeNextSlide2() {
    carouselList2.animate({"marginLeft": -840}, 500, moveFirstSlide2);
  }

  var interval2 = setInterval(changeNextSlide2, 5000);

  function moveLastSlide2() {
    var firstItem = carouselList2.find("li:first");
    var lastItem = carouselList2.find("li:last");
    firstItem.before(lastItem);
    carouselList2.css({"marginLeft": -420});
  }
  function changePrevSlide2() {
    carouselList2.animate({"marginLeft": 0}, 500, moveLastSlide2);
  }
  $("#community-left").click(function(event) {
    changePrevSlide2();
  });
  $("#community-right").click(function(event) { 
    changeNextSlide2();
  });
  $("#my-carousel2").mouseover(function(event) {
    clearInterval(interval2);
  });
  $("#my-carousel2").mouseout(function(event) {
    clearInterval(interval2);
    interval2 = setInterval(changeNextSlide2, 5000);
  });

//close navbar on menu click
if($(window).width() < 768) {
 $(".nav li").click(function(){ 
   $(".navbar-toggle").click();
  });
}

//scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });
  // fade in
  /* Every time the window is scrolled ... */
  if($(window).width() > 991) {
    $(window).scroll( function(){ 
        /* Check the location of each desired element */
        $('.hideme').each( function(i){        
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();          
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object-80) ){
                $(this).animate({'opacity':'1'},500);                       
            }        
        });   
    });

    $(window).scroll( function(){ 
        
        $('.slide').each( function(i){        
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();          
            
            if( bottom_of_window > (bottom_of_object-100) ){
                $(this).animate({'margin-left':'0'},700);                       
            }        
        });   
    });
  }

});

