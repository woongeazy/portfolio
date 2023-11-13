$(document).ready(function() {
    $('a').on("click", function(e) {
        e.preventDefault();
    });
});
// a 기능 비활성화

$(function(){
    $('.design_title > li:nth-last-child(2)').on('click', function(){
        $('.design_contents > ul').stop().slideDown(300);
        $('.design_contents > h5').removeClass('d-none');
        $('.design_title > li:nth-last-child(1)').removeClass('d-none')
        $(this).addClass('d-none');
    });
    $('.design_title > li:nth-last-child(1)').on('click', function(){
        $('.design_contents > ul').stop().siblings().slideUp(300);
        $('.design_contents > h5').addClass('d-none');
        $('.design_title > li:nth-last-child(2)').removeClass('d-none')
        $(this).addClass('d-none')
    });



    let tabBtn = $('.design_title > li');
    let tabCont = $('.design_contents > ul');
    tabCont.hide().eq(0).show();
    
    
    $(tabBtn).on('click', function(){
        const index = $(this).index();
        tabCont.eq(index).show().siblings().hide();

    })
});