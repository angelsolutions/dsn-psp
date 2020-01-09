$(function () {
  var $btn = $(".js-greedy-overflow");
  var $vlinks = $(".js-greedy-links");
  var $hlinks = $(".js-greedy-hidden-links");
  var stickyClass = ".js-greedy-sticky";

  // Get initial state 0 based index
  function setSize(includeIndex) {
    $btn.addClass('hidden');

    $hlinks.children(":not(" + stickyClass + ")").appendTo($vlinks);

    $vlinks.children().each(function (i, e) {
      var w = $(e).outerWidth(true);
      if (includeIndex) {
        $(e).attr("data-index", i);
      }
      $(e).attr("data-width", Math.floor(w));
    });
  }

  function sort() {
    $vlinks
      .children()
      .sort(function (a, b) {
        return +a.getAttribute("data-index") - +b.getAttribute("data-index");
      })
      .appendTo($vlinks);
  }

  function check() {
    var requiredSpace = 43;
    // Get instant state
    var availableSpace = Math.floor($vlinks.outerWidth(true));
    var numOfVisibleItems = $vlinks.children().length;
    $.each($vlinks.children(), function (index, child) {
      requiredSpace += $(child).data("width") || 0;
    });

    requiredSpace += +$hlinks.children().first().data("width") || 0;

    var $movableLinks = $vlinks.children(":not(" + stickyClass + ")");
    var $hiddenLinks = $hlinks.children(":not(" + stickyClass + ")");
    var $stickyHiddenLinks = $hlinks.children(stickyClass);

    // There is not enought space
    if (requiredSpace > availableSpace) {
      var visibleRequiredSpace = requiredSpace;
      for (mlink = $movableLinks.length; mlink >= 0; mlink--) {
        $mlink = $($movableLinks[mlink]);
        if (visibleRequiredSpace > availableSpace) {
          $mlink.prependTo($hlinks);
        }
        visibleRequiredSpace -= +$mlink.data("width") || 0;
      }
      // There is more than enough space
    } else if (availableSpace >= requiredSpace) {

      var visibleRequiredSpace = requiredSpace;
      for (hlink = 0; hlink < $hiddenLinks.length; hlink++) {
        $hlink = $($hiddenLinks[hlink]);
        if (availableSpace >= visibleRequiredSpace) {
          $hlink.appendTo($vlinks);
        }
        visibleRequiredSpace += +$hlink.data("width") || 0;
      }
    }

    // Update the button accordingly 
    $btn.attr("data-count", $hlinks.children().length);
    if ($hlinks.children().length) {
      $btn.removeClass("hidden");
      $btn.addClass("display--inline-block");
    } else {
      $btn.addClass("hidden");
      $btn.removeClass("display--inline-block");
      $hlinks.addClass("hidden");
    }
  }

  var resizeTimer;

  // Window listeners
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      setSize();
      check();
      sort();
    }, 50);
  });

  $btn.on("click", function () {
    $hlinks.toggleClass("hidden");
  });

  //$hlinks.parent().on("mouseleave ", function () {
  //    $hlinks.addClass("hidden");
  //});

  setSize(true);
  check();
});