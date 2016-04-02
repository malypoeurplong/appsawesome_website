$( document ).ready(function() {
      setupEvents();
      setupFormValidation();
});

function setupEvents() {
  $('#contact-form').submit(function(event){
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();

    var data = {
      name: name,
      from: email,
      phone: phone,
      message: message
    };

    var url = "/email";
    $.post(url, data, function(data, status, xhr){
      $('#contact-form--thank-you').addClass('animated fadeIn');
      $('#contact-form').addClass('animated fadeOutRight');
    }).error(function(err){
      $('#contact-form--error').addClass('animated fadeIn');
      $('#contact-form').addClass('animated fadeOutRight');
    });
  });
}


function setupFormValidation() {
  $.validate({
    onSuccess: function() {
      console.log('form success');
    },
    onError: function(){
      console.log('form error');
    }
  });
}
