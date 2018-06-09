$(document).ready(function(){       
   //sticky navbar
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
//hover on menu-icon
  var menuIcon = $(".menuIcon");
  menuIcon.mouseover(function(){
    $(this).html('<img alt="Brand" src="images/icon3.png">')
  });
  menuIcon.mouseleave(function(){
    $(this).html('<img alt="Brand" src="images/icon1.png">')
  });
  
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
      numberVar = 5;
      number.text('0' + numberVar);
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
});

