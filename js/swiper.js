
      var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      });
      var swiper1 = new Swiper(".mySwiper1", {
        navigation: {
          nextEl: ".sbn1",
          prevEl: ".sbp1",
        },
      });

      var swiper2 = new Swiper(".viewSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".pagi1",
          clickable: true,
        },
        
      });

      var swiper3 = new Swiper(".view2Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".pagi2",
          clickable: true,
        },
        
      });



/************jquery start*************/
$(document).ready(function(){

  /************tab active*************/
    $(".sec1_nav li").click(function(){
      var num = $(".sec1_nav li").index(this);
      
      $(".sec1_nav li").removeClass('on');
      $(this).addClass('on');
    
      if ( $('.sec1_nav li:first-child').hasClass('on') == true ) {
          $('.viewbox_wrap ul').hide();
          $('.pagi1').show();
          $('.pagi2').hide();
          $('.viewbox').show();
          $('.dot_wrap').show();
        } else if( $('.sec1_nav li:nth-child(2)').hasClass('on') == true) {
          $('.viewbox_wrap ul').hide();
          $('.pagi1').hide();
          $('.pagi2').show();
          $('.viewbox2').show();
          $('.dot_wrap').show();
        }
        else if( $('.sec1_nav li:nth-child(3)').hasClass('on') == true) {
          $('.viewbox_wrap ul').hide();
          $('.pagi1').hide();
          $('.pagi2').hide();
          $('.viewbox3').show();
          $('.dot_wrap').hide();
        }

        return true;
  });

			$(function(){
				$(window).scroll(function(){
					var winHalfHeight = $(window).outerHeight()/2;
					var calcTemp = ($('.culture').offset().top) - (winHalfHeight);
					if ($(window).scrollTop() > calcTemp) {
						$('.culture ul').addClass('act');
						setTimeout(function(){
							$('.culture ul').addClass('rdy');
						}, 1500)
					}

				});

				$('.culture ul').mouseleave(function(){
					if ($(this).hasClass('rdy')) {
						$('.culture ul > li').removeClass('in out');
					};
				});
			});


});


