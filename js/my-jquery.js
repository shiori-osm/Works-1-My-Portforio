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

  {
    "use strict";

    const openBtn = document.getElementById("open-btn");
    const closeBtn = document.getElementById("close-btn");
    const openedList = document.getElementById("opened-list");
    openBtn.addEventListener("click", () => {
      openedList.classList.add("opened");
      openBtn.classList.add("hide");
    });
    openBtn.addEventListener("click", () => {
      openedList.classList.add("opened");
      openBtn.classList.add("hide");
    });
    closeBtn.addEventListener("click", () => {
      openedList.classList.remove("opened");
      openBtn.classList.remove("hide");
    });
  }
