
$(document).ready(function(){


  $('.fv_slide').slick({
    cssEase: 'linear', // 動きの種類は等速に
    arrows: false, // 左右に出る矢印を非表示
    dots: true,
    slidesToShow: 1,
    pauseOnFocus: false, // フォーカスが合っても止めない
    pauseOnHover: false, // hoverしても止めない
    autoplay: true, // 自動再生
    speed: 1000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }
    ]
  });


///スマホヘッダーここから
  //sp
  $(function(){
    // ハンバーガーメニュー開閉とリンククリック時のナビゲーション制御

    // JavaScriptで#navが.activeの時に#nav_fix_iconを非表示にする
    function updateNavFixIconVisibility() {
        var nav = document.getElementById("nav_sp");
        var navFixIcon = document.getElementById("nav_fix_icon_sp");
        
        if (nav && navFixIcon && nav.classList.contains("active")) {
            navFixIcon.style.display = "none";
        }
        else {
          navFixIcon.style.display = "block"; // .active クラスがない場合、表示する
      }
        
    }


    $("#hamb_sp, #menu_text").on("click", function() {
      $("#hamb_sp span").toggleClass("active");
      $("#nav_sp").toggleClass("active");

      if ($("#nav_sp").hasClass("active")) {
          $("#menu_text").text("閉じる");
      } else {
          $("#menu_text").text("メニュー");
      }

      updateNavFixIconVisibility(); // メニュー状態が変わったら非表示を更新
  });

    $('a[href*="#"]').on('click', function() {  
      $('#nav_sp').removeClass('active');
      $("#hamb_sp span").removeClass("active");
      $("#menu_text").text("メニュー");
      updateNavFixIconVisibility(); // メニュー状態が変わったら非表示を更新
  });


});


//SPヘッダーメニューのアコーディオン
$(function(){

  $(".menu-parent").on("click", function(){
    $(this).children(".sub-menu").stop().slideToggle();
    // 矢印の形を変えるためにactiveクラスをトグル
    $(this).toggleClass("active");
  });
});

///スマホヘッダーここまで

//top banner
$('.pickup_slide').slick({
  cssEase: 'linear',//動きの種類は等速に
  arrows:true,//左右に出る矢印を非表示
  dots:false,
  slidesToShow: 1,
  centerMode: true,//一枚目を中心に表示させる
  pauseOnFocus: false,//フォーカスが合っても止めない
  pauseOnHover: false,//hoverしても止めない
  autoplay: true, //自動再生
  speed: 800,
  infinite: true,
  responsive: [
    {
        breakpoint: 600, // 599px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        centerMode: false,//一枚目を中心に表示させる
    },
    }
],
});

//top 人気商品
$('.best_slide_pc').slick({
  cssEase: 'linear',//動きの種類は等速に
  arrows:true,//左右に出る矢印を表示
  dots:false,
  slidesToShow: 4.5,
  // pauseOnHover: false,//hoverしても止めない
  speed: 800,
  infinite: true,
  autoplay: true, //自動再生
  responsive: [
    {
        breakpoint: 1200, // 例: 1200px以下の画面幅の場合
        settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 992, // 例: 992px以下の画面幅の場合
        settings: {
            slidesToShow: 2.5,
        }
    }
]
});




AOS.init({
    duration: 800,
    easing: 'ease',
  });


// });


// $(document).ready(function() {
    // アコーディオンをクリックした時の動作
    $('.title, .ibox').on('click', function() {
        var parent = $(this).closest('.faq_box'); // 親要素を取得
        var findElm = parent.find(".box"); // 親要素内の .box を取得
        var titleElm = parent.find('.title'); // 親要素内の .title を取得
        var ibox = parent.find('.ibox'); // 親要素内の .ibox を取得

        // すべてのアコーディオンを閉じる
        $('.box').not(findElm).slideUp(500);
        $('.title').not(titleElm).removeClass('close'); // 他のすべてのタイトルからクラス名 close を除去
        $('.ibox').removeClass('minus'); // すべての .ibox から minus クラスを削除
        // 現在のアコーディオンを開く/閉じる
        if (titleElm.hasClass('close')) {
            titleElm.removeClass('close'); // クラス名を除去
            findElm.slideUp(500); // アコーディオンを閉じる
            findElm.siblings('.ibox').remoevClass('minus'); // .ibox の兄弟要素の .minus を追加

        } else {
            titleElm.addClass('close'); // クリックしたタイトルにクラス名 close を付与
            findElm.slideDown(500); // アコーディオンを開く
            findElm.siblings('.ibox').addClass('minus'); // .ibox の兄弟要素の .minus を削除
        }
      });


//itemページの商品スライド
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    // centerMode: true,
    focusOnSelect: true
  });


  
});



