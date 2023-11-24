$(document).ready(function () {
  $(".tab_title > a").on("click", function (e) {
    e.preventDefault();
  });
});
// a 기능 비활성화

$(function () {
  // tabCont.hide().eq(0).show(); 

  $(tabBtn).on("click", function () {
    const index = $(this).index();
    tabCont.eq(index).show().siblings().hide();
  });

  $('.main_content ul > li').on('mouseover', function(){
    $(this).find('img').css({
        width: '120%'
    })
  })
  $('.main_content ul > li').on('mouseout', function(){
    $(this).find('img').css({
        width: '100%'
    })
  })




});

let tabBtn = $(".design_title > li");
let tabCont = $(".design_contents > .main_content");