// popup
$(document).ready(function(){
  function setCookie(name,value,expiredays){
      var today = new Date();
      today.setDate(today.getDate() + expiredays);
      document.cookie = name + '=' + value + '; path=/; expires' + today.toGMTString() + ';';
  }
  
  var popup = '.popup';
  var closeBtn = '.close_btn';
  var todayBtn = '.today_btn';

  $(closeBtn).click(function(){
      $(popup).stop().fadeOut(0);
      $('body').css('overflow','visible');
  });

  $(todayBtn).click(function(){
      setCookie('exCookie','yes',1); 
      $(popup).stop().fadeOut(0);
      $('body').css('overflow','visible');
  });

  var cookieData = document.cookie;
  if(cookieData.indexOf('exCookie=yes') < 0){
      $(popup).stop().fadeIn(0);
      $('body').css('overflow','hidden');
  }else{
      $(popup).stop().fadeOut(0);
      $('body').css('overflow','visible');
  }
});

// main
$(document).ready(function(){
    var swiper = new Swiper("main .swiper", {
        pagination: {
          el: "main .swiper-pagination",
        },
      });
});

// menu
$(document).ready(function() {
    var swiper = new Swiper(".menu .swiper", {
        slidesPerView: 2.3,
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
    });
});

// board
$(document).ready(function(){
    var swiper01 = new Swiper(".board .event_text", {
        effect: 'fade',
        pagination: {
          el: ".board .swiper-pagination",
          type: "fraction",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
    });
    var swiper02 = new Swiper(".board .event_img", {
        slidesPerView: 1.3,
        spaceBetween: 16,
        pagination: {
          el: ".board .swiper-pagination",
          type: "fraction",
        },
        thumbs: {
            swiper: swiper01,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
});
