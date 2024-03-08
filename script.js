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


  const swiperTestmonials = new Swiper('.swiper-testmonials', {
    loop: true,
    slidesPerView: 1.2,
    grabCursor: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-test',
        prevEl: '.swiper-button-prev-test',
    },
    breakpoints: {
        // when window width is >= 640px
        500: {
            slidesPerView: 1.4,
        },
        780: {
            slidesPerView: 1.8,
        },
        1300: {
            slidesPerView: 2.6,
        },
        1630: {
            slidesPerView: 3.2,
        }
    }

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


  $(document).ready(function() {
    if ($(window).width() <= 715) {
        $(".left, .right").attr("data-aos-delay", "0");
    }
  });

  gsap.from("#form",{
     y: "-100vh",
     duration:1.2,
     ease: "power2.out"
  });
  gsap.from(".phone",{
    x: 100,
    opacity:0,
    duration :1,
    ease: "power2.out"
  });

  var time = gsap.timeline();
  time.from(".logo",{
    x: -100,
    opacity:0,
    duration :1,
    ease: "power2.out"
  });
  time.from(".links ul a",{
    y : 50,
    opacity:0,
    duration :.8,
    ease: "power2.out",
    stagger: 0.2
  });
  time.from(".hero h2,.line,.hero h4,.hero_botton",{
    y : 50,
    opacity:0,
    duration :.8,
    ease: "power2.out",
    stagger: 0.1
  })

  // time.from(".line",{
  //   y : 50,
  //   opacity:0,
  //   duration :.5,
  //   ease: "power2.out",
  // })
  // time.from(".hero h4",{
  //   y : 50,
  //   opacity:0,
  //   duration :.5,
  //   ease: "power2.out",
  // })
  // time.from(".hero_botton",{
  //   scale : 0,
  //   opacity:0,
  //   duration :.5,
  //   ease: "power2.out",
  // })