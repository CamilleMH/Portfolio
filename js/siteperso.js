/*jslint browser: true*/
/*global $*/

function respnav() {
    "use strict";
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function imgLoaded(img) {
    "use strict";
    var galleryitem = img.parentNode;
    galleryitem.className += galleryitem.className ?
            ' loaded' : 'loaded';
}

window.addEventListener("beforeunload", function () {
    "use strict";
    document.body.classList.add("animate-out");
});


$(function() {
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