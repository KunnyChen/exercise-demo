(function () {
    $(".menu-phone").click(function () {
        $(this).addClass("active");
        $("#access").show();
    });
    $("#access").click(function () {
        $(".menu-phone").removeClass("active");
        $("#access").hide();
    });
})()