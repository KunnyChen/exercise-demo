(function() {
    $(".menu-phone").click(function() {
        $(this).addClass("active");
        if ($(this).hasClass("active")) {
            $("#access").show();
        } else {
            $("#access").hide();
        }
    });
    $("#access").click(function() {
        $(".menu-phone").removeClass("active");
        $("#access").hide();
    });
})()
