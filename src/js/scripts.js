//= ../../node_modules/jquery/dist/jquery.min.js
//= partials/helper.js
//= partials/jquery.fancybox.min.js
//= partials/jquery.psgTimer.js


$(document).ready(function () {
    $('.nav a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active');
        }
    });
    $(".burger").click(function () {
        $(".nav_mob").show();
    });

    $('[data-fancybox]').fancybox({
        touch: false,
        hideScrollbar: true
    });
});


$(document).mouseup(function (e) {
    var div = $(".nav_mob");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.hide();
    }
});


