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

// (function() {
//     $(".menu-phone").click(function() {
//         var hide = $("#access").hasClass("hide");
//          $(this).toggleClass('active');
//         function hideMenu() {
//             // $("#access").addClass("hide");
//             setTimeout(function() {
//                 $("#access").addClass("hide");
//             }, 100);
//         }
//         if (hide)
//             $("#access").removeClass("hide");
//         else {
//             hideMenu();
//             $(".menu-phone").removeClass('active');
//         }
//         $("#access").click(function() {
//             $("#access").addClass("hide");
//              $(".menu-phone").removeClass('active');
//         })

//     })
// })()
