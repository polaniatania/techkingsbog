$(document).ready(function () {

    $( "form" ).submit(function( event ) {
        $("#datos-recibidos").removeClass("ocultar")
        .fadeIn(2000)
        .delay(3000)
        .fadeOut( "slow", function() {
            $("#datos-recibidos").addClass("ocultar")
            $("form").trigger('reset');
          });
        event.preventDefault();
      });


});