(function() {
    $(".menu-phone").click(function() {
        $(this).addClass("active");
        if ($(this).hasClass("active")) {
            $(".phone-access").show();
          document.body.style.overflow='hidden';
        } else {
            $(".phone-access").hide();
            document.body.style.overflow='scroll';
        }
    });
    $(".phone-access").click(function() {
        $(".menu-phone").removeClass("active");
        $(".phone-access").hide();
         document.body.style.overflow='scroll';
    });
})()
