/*jslint browser: true*/
/*global $*/

function respnav() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function imgLoaded(img) {
    var galleryitem = img.parentNode;
    galleryitem.className += galleryitem.className ?
            ' loaded' : 'loaded';
}

function lazyload(){
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    $('img.lazy').each(function(){
        var imgOTop = $(this).offset().top;
        if( imgOTop < (winHeight + winScrollTop) ) {
            console.log($(this));
            $(this)
                .attr( 'src', $(this).data('src') )
                .removeClass('lazy')
                .removeAttr('data-src');

        }
    });
}

$(function() {
    lazyload();
    window.addEventListener("beforeunload", function () {
        document.body.classList.add("animate-out");
    });

    $(document).scroll(function() {
        lazyload();
    });

    $('*').scroll(function() {
        lazyload();
    });

    $('#send-mail').click(function (e) {
        e.preventDefault();
        var data = {
            nom: $('#votre-nom').val(),
            email: $('#votre-email').val(),
            objet: $('#votre-objet').val(),
            message: $('#votre-message').val()
        };
        $.ajax({
            type: "POST",
            url: "C/send-email.php",
            data: data,
            dataType: 'html',
        });
    });
});