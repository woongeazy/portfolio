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
    $(this).addClass("on").siblings().removeClass("on");
    tabCont.eq(index).show().siblings().hide();
  });

  $(".design_title > li:nth-last-child(1)").on("click", function () {
    tabCont.show();
  });

  $(".main_content ul > li").on("mouseover", function () {
    $(this).find("img").css({
      width: "110%",
    });
  });
  $(".main_content ul > li").on("mouseout", function () {
    $(this).find("img").css({
      width: "100%",
    });
  });

  // window.onload = function () {
  //   let imgScroll = document.querySelector(".wdb_img");

  //   imgScroll.addEventListener("mouseover", () => {
  //     console.log("over");
  //     imgScroll.querySelectorAll(
  //       "img"
  //     ).style.animation = `imgscroll 3s forwards`;
  //   });
  // };

  // popup window
  $(".popup").hide();
  $(".kakao_qr > img").hide()
  $(".popup").on("click", function(){
    $(".kakao_qr > img").hide()
    $(".popup").hide();
  })

  $(".page_design > li").on("click", function () {
    const pageIndex = $(this).index();
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .page").show()
    $(".page > img").hide().eq(pageIndex).show();
  });
  
  $(".sns_design > li").on("click", function () {
    const bannIndex = $(this).index();
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .bann").show()
    $(".bann > img").hide().eq(bannIndex).show();
  });

  $(".card_design > li").on("click", function () {
    const cardIndex = $(this).index();
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .card").show()
    $(".card > img").hide().eq(cardIndex).show();
  });

  $(".leaflet_design > li").on("click", function () {
    const reafIndex = $(this).index();
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .leafl").show()
    $(".leafl > div").hide().eq(reafIndex).show()
  });

  $(".popart_design > li").on("click", function () {
    const popaIndex = $(this).index();
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .popa").show()
    $(".popa > div").hide().eq(popaIndex).show()
  });


  $(".magazine_design > li").on("click", function () {
    const moveIndex = $(this).index();
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .movie").show()
    $(".movie > img").show();
  });

  $(".ka_qr").on("click", function () {
    $(".popup").show();
    $(".popup_imgs > div").hide()
    $(".popup_imgs > .kakao_qr").show()
    $(".kakao_qr > img").show();
  });
  
  $('.m_nav_icons > i:nth-child(1)').on('click', function(){
    $(".m_nav_icons > i:nth-child(1)").addClass('d-none')
    $(".m_nav_icons > i:nth-child(2)").removeClass('d-none')
    $(".m_nav_bg").css({right: "0%"})
  })
  $('.m_nav_icons > i:nth-child(2)').on('click', function(){
    $(".m_nav_icons > i:nth-child(2)").addClass('d-none')
    $(".m_nav_icons > i:nth-child(1)").removeClass('d-none')
    $(".m_nav_bg").css({right: "-100%"})
  })



});


// 한채웅 태크 클라우드 애니메이션 효과

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("스크롤 ="+value);

  if (value > 100) {
    topAni.style.animation = `topback 2s forwards`;
    leftAni.style.animation = `leftBack 2s forwards`;
    arrowAni.style.animation = `leftBack 2s forwards`;
    rightAni.style.animation = `rightBack 2s forwards`;
    rightTop.style.animation = `rightBack 2s forwards`;
    fadeIn.style.animation = `fade_inBack 2s forwards`;
    hanChae.style.animation = `hanchaewoongBack 2s forwards`;
  } else {
    topAni.style.animation = `top 2s forwards`;
    leftAni.style.animation = `left 2s forwards`;
    arrowAni.style.animation = `left 2s forwards`;
    rightAni.style.animation = `right 2s forwards`;
    rightTop.style.animation = `right 2s forwards`;
    fadeIn.style.animation = `fade_in 2s forwards`;
    hanChae.style.animation = `hanchaewoong 2s forwards`;
  }
});

let topAni = document.querySelector(".tag_imgs img:nth-child(1)");
let leftAni = document.querySelector(".tag_imgs > img:nth-child(2)");
let arrowAni = document.querySelector(".arrow");
let rightAni = document.querySelector(".tag_imgs > img:nth-child(3)");
let rightTop = document.querySelector(".tag_imgs > img:nth-child(4)");
let fadeIn = document.querySelector(".tag_imgs > img:nth-child(5)");
let hanChae = document.querySelector(".tag_imgs > img:nth-child(6)");

let arrowTop = $(".arrow");

let tagTop = $(".tag_imgs > img:nth-child(1)");

let tabBtn = $(".design_title > li");
let tabCont = $(".design_contents > .main_content");
