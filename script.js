$(document).ready(function () {
      $('.question').click(function () {   
        var answer = $(this).next('.ans');
        answer.slideToggle();
    });
    $('.question:first').click();
});


function myFunction(x) {
    x.classList.toggle("ri-subtract-line");
    x.classList.toggle("ri-add-line");
   
  }


var swiper = new Swiper('.swiper-container.swiper-testimonial', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-test',
        prevEl: '.swiper-button-prev-test',
    },
});


$(document).ready(function () {
    var open = $(".menu");
    var close = $(".close");
    var menu = $(".mobile_menu");
    open.click(function () {
      menu.css({ "transform": "translateX(0px)", "transition": "1s ease" });
      $("body").css("overflow", "hidden");
    });
  
    close.click(function () {
      menu.css({ "transform": "translateX(100%)", "transition": "1s ease" });
      $("body").css("overflow", "auto");
    });
  
  });