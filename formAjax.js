$(document).ready(function() {
    $('#btnSubmit').click(function(e) {
        e.preventDefault();
        var idForm = $(this).attr('aria-form');
        var form = new FormData(document.getElementById(idForm));
        var action = $('#' + idForm).attr('action');
        //console.log(action);
        //
        formAjax(action, form);
    });
});

function formAjax(action, form) {
    var posicion = $('#message').offset().top;
    $.ajax({
        url: action,
        type: 'POST',
        data: form,
        contentType: false,
        processData: false,
        cache: false,
        beforeSend: function(){
            $('#btnSubmit').after('<p><img class=id="ajax-loader" src="./images/ajax-loader.gif"></p>');
        }
    }).done(function(r) {
        $('img#ajax-loader').slideUp('slow');
        $('html, body').animate({
            scrollTop: posicion - 20
        }, 2000);
        $('#message').slideDown('slow');
        $('#message').html(r);
    }); /*END ajax*/
}
