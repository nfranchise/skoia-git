	var iOS = navigator.userAgent.match(/(iPod|iPhone|iPad)/);
if(iOS){

    function iosVhHeightBug() {
        var height = $(window).height();
        $("header").css('height', height);
    }

    iosVhHeightBug();
    $(window).bind('resize', iosVhHeightBug);

}

