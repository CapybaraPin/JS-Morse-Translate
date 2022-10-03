/** @format */

(function ($) {
  "use strict";

  $("[data-bg-color]").each(function () {
    var bg_color = $(this).data("bg-color");
    $(this).css({
      "background-color": bg_color,
    });
  });


  function bootstrapTabControl() {
    if ($(".form_tab .nav-link").hasClass("active")) {
      $(".form_tab .nav-link.active").addClass("complete");
    }
    var i,
      items = $(".nav-link"),
      pane = $(".tab-pane");
    $(".next_tab").on("click", function () {
      for (i = 0; i < items.length; i++) {
        if ($(items[i]).hasClass("active") == true) {
          break;
        }
      }
      if (i < items.length - 1) {
        $(items[i]).removeClass("active");
        $(items[i + 1]).addClass("active complete ");
        $(pane[i]).removeClass("show active");
        $(pane[i + 1]).addClass("show active");
      }
    });
    $(".prev_tab").on("click", function () {
      for (i = 0; i < items.length; i++) {
        if ($(items[i]).hasClass("active") == true) {
          break;
        }
      }
      if (i != 0) {
        $(items[i]).removeClass("active complete");
        $(items[i - 1]).addClass("active");
        $(pane[i]).removeClass("show active complete");
        $(pane[i - 1]).addClass("show active");
      }
    });
  }
  bootstrapTabControl();

  function parallaxEffect() {
    if ($(".parallax-effect").length) {
      $(".parallax-effect").parallax();
    }
  }
  parallaxEffect();
})(jQuery);
