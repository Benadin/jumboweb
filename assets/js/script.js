$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready

    // breakpoint and up
    $(window).resize(function() {
        if ($(window).width() >= 980) {
            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function() {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });

    window.onscroll = () => {
        if (window.scrollY > 30) {
            $(".navbar").addClass("navbar-active");
            document
                .getElementById("logo1change")
                .setAttribute("src", "img/logo1-w.png");
        } else {
            $(".navbar").removeClass("navbar-active");
            document.getElementById("logo1change").setAttribute("src", "img/logo1.png");
        }
    };
    // document ready
});

window.onload = function() {
    document.getElementById("allBtnClick").click();
};

