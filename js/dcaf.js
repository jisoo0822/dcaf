$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.nav').addClass('active');
        $('.slogo').css('display','block');
        $('.subcon').css('top','70px');
    }else{
        $('.nav').removeClass('active');
        $('.slogo').css('display','none');
        $('.subcon').css('top','226px');
    }
});

$(function() {
    var $btn = $('.view'),
      $subnav = $('.subnav'),
      $subcon = $('.subcon'),
      $navc = $('.navc'),
      $body = $('body'),
      $navbg = $('.map_bg')
    $btn.on("click", function() {
        $subnav.toggle();
        $navbg.toggle(); 
        $body.toggleClass('love');
        $subcon.hide()
        $('.nav li').removeClass('active')
        $('.nav.active li').removeClass('active')
      })
    $navc.on("click",function(){
        $subnav.hide();
        $subcon.hide();
        $body.removeClass('love');
        $navbg.hide();
        $('.nav.active li').removeClass('active')
        $('.nav li').removeClass('active')
    })
 });
  

 $(".subcon").hide();
  $(".main_nav li a").on("click",function () {
    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().toggleClass("active"); 
    $('.subnav').hide()
    $('body').removeClass('love');
    $('.map_bg').hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).toggle();
    $("#" + activeTab).siblings("div").hide();
  });


  $(".viewb").hide();
  $(".program").each(function () {
    $(this).children(".sub_navli:first").addClass("sub_on"); //Activate first tab
    $(this).children(".viewb:first").first().show();
  });
  $(".sub_nav li a").on("click",function () {
    $(this).parent().siblings("li").removeClass("sub_on");
    $(this).parent().addClass("sub_on"); 
    $(this).parent().parent().parent().find(".viewb").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
  });

