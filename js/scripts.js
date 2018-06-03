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
});

