(function ($) {
  'use strict';

  var form = $('.contact__form'),
      message = $('.contact__msg'),
      form_data;

  form.submit(function (e) {
      e.preventDefault();
      form_data = $(this).serialize();
        $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: form_data
      });
      message.fadeIn().addClass('alert-success');
      setTimeout(function () {
          message.fadeOut();
      }, 2000);
  });
  
})(jQuery);