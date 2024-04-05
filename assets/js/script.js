$(function () {

    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var slide = this.hash;

            $("html, body").animate({
                scrollTop: $(slide).offset().top
            }, 800, function () {
                window.location.hash = slide;
            });
        }
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

});