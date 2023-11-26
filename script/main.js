$(document).ready(function () {
  $(".tab_title > a").on("click", function (e) {
    e.preventDefault();
  });
});
// a 기본 기능 비활성화

$(function () {
  // tabCont.hide().eq(0).show(); 

  $(tabBtn).on("click", function () {
    const index = $(this).index();
    tabCont.eq(index).show().siblings().hide();
  });



  $('.main_content ul > li').on('mouseover', function(){
    $(this).find('img').css({
        width: '120%'
    });
  });
  $('.main_content ul > li').on('mouseout', function(){
    $(this).find('img').css({
        width: '100%'
    });
  });

// popup window
$(".popup").hide()



});





// 한채웅 태크 클라우드 애니메이션 효과

window.addEventListener('scroll', function (){
  let value = window.scrollY;
  console.log("스크롤 ="+value);

  if (value > 100) {
    topAni.style.animation=`topback 2s forwards`;
    leftAni.style.animation=`leftBack 2s forwards`;
    arrowAni.style.animation=`leftBack 2s forwards`;
    rightAni.style.animation=`rightBack 2s forwards`;
    rightTop.style.animation=`rightBack 2s forwards`;
    fadeIn.style.animation=`fade_inBack 2s forwards`;
    hanChae.style.animation=`hanchaewoongBack 2s forwards`;
  } else {
    topAni.style.animation=`top 2s forwards`;
    leftAni.style.animation=`left 2s forwards`;
    arrowAni.style.animation=`left 2s forwards`;
    rightAni.style.animation=`right 2s forwards`;
    rightTop.style.animation=`right 2s forwards`;
    fadeIn.style.animation=`fade_in 2s forwards`;
    hanChae.style.animation=`hanchaewoong 2s forwards`;
  }
});

let topAni = document.querySelector('.tag_imgs img:nth-child(1)')
let leftAni = document.querySelector('.tag_imgs > img:nth-child(2)')
let arrowAni = document.querySelector('.arrow')
let rightAni = document.querySelector('.tag_imgs > img:nth-child(3)')
let rightTop = document.querySelector('.tag_imgs > img:nth-child(4)')
let fadeIn = document.querySelector('.tag_imgs > img:nth-child(5)')
let hanChae = document.querySelector('.tag_imgs > img:nth-child(6)')

let arrowTop = $('.arrow')

let tagTop = $('.tag_imgs > img:nth-child(1)')

let tabBtn = $(".design_title > li");
let tabCont = $(".design_contents > .main_content");