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

$(function() {
    window.addEventListener("beforeunload", function () {
        "use strict";
        document.body.classList.add("animate-out");
    });

    $('#send-mail').click(function (e) {
        "use strict";
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