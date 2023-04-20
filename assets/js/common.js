// JavaScript Document
// $(function () {
//   /*** 上に戻るボタン ***/
//   let topBtn = $('#scroll-top');
//   topBtn.hide();
// });

//   // ある程度スクロールされたら、上に戻るボタンを表示する
//   // $(window).scroll(function () {
//   //       console.log($(this).scrollTop());
//   //   //thisはイベントが発生した$(window).を取得
//   //   console.log($(this).height());
//   $(window).scroll(function () {
//   if ($(this).scrollTop() > 300) {
//       topBtn.fadeIn(); // フェードインで表示
//     } else {
//       topBtn.fadeOut(); // フェードアウトで非表示
//     }
//   });

//   topBtn.click(function (event) {
//     event.preventDefault();  // ページ内リンクの挙動をキャンセル
//     $('body,html').animate({ // スムーズにスクロールする設定
//       scrollTop: 0
//     }, 800);
//   });


  /*** ハンバーガメニュ ***/
  $('.close-button,.open-button').click(function () {
    $('.header nav').slideToggle();
  });


  /*** スライダー（slick） ***/
  $('#slick-slide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false
  });

    /*** お客様の声をPC版の時にはslicker発火しない ***/
  $(function(){
    function sliderSetting(){
          var width = $(window).width();
                console.log($(window).width());
        if(width <= 1160){
          // スマートフォンの場合
          $('#slick-slide2').slick({
            dots: true,
            speed: 500,
            arrows:false,
            centerMode:true,
            infinite:false
          });
                  console.log("スマホ");
        } else {
            // pcの場合
            $('.slick-box.onlysp.slick-initialized').slick('unslick');
            console.log("PC");
        }
    }
    sliderSetting();
  
    $(window).resize( function() {
        sliderSetting();
    });
});

// SPのときのみナビメニューから開いたらトグルを閉じる
$(function(){
  var width = $(window).width();
  if(width <= 1160){
// スマートフォンの場合
$(document).on('click', '.navi-close', function(){
  // alert('Button is clicked');
  $('.header nav').slideToggle();
});
  }
});


  // ヘッダー固定
$(function (){
  var $header = $(".header");
  $(window).on("load scroll" ,function(){
  var value = $(this).scrollTop();
  if (value > 0){
    $header.addClass("scroll");
    $header.fadeIn();
  }else{
    $header.removeClass("scroll");
  }
  });
});

//ナビ再表示

$(function showSetting(){
  $(window).resize(function() {
    var $hn =$('.header nav');
    var width = $(window).width();
    if (width <= 1160){
      console.log("スマホ用表示");
    } else{
      console.log("PC表示");
    $hn.removeAttr('style');
    }
  });
});