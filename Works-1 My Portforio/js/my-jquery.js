// 最上部 ぼわっと表示 2500は2.5秒
$(document).ready(function () {
  $('.fv').hide().fadeIn(2500);
});

// 要素が読み込まれたらふわっと表示
jQuery(function ($) {
  const fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      const offset = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});


// ページ途中からボタンの表示
$(function() {
  const btn = $('.page-top-btn');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('totop');
    }else{
      btn.removeClass('totop');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});

// ハンバーガーメニュー
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const openedList = document.getElementById("opened-list");

  openBtn.addEventListener("click", () => {
    openedList.classList.add("opened");
    openBtn.classList.add("hide");
  });
  closeBtn.addEventListener("click", () => {
    openedList.classList.remove("opened");
    openBtn.classList.remove("hide");
  });