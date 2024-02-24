
  $(document).ready(function(){
    $(".qtwo").click(function(){
      $("#atwo").slideToggle();
    });
  });

  var one = 1;
  function passicon1(){
    var toggle3 = document.getElementById('qtwo');
    var toggle4 = document.getElementById('qqtwo');
    
if(one == 1){
    one = 2;
   toggle3.style.display = "none";
   toggle4.style.display = "block";
}
else{
    one = 1;
   toggle3.style.display = "block";
   toggle4.style.display = "none";	
}
};




var swiper = new Swiper('.swiper-container.swiper-testimonial', {
    slidesPerView: 3,
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