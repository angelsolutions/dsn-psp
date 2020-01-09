$(':checkbox').change(function() {
  if ($(this).is(':checked')) {
    $(this).next('label').addClass('muted');
  } else {
    $(this).next('label').removeClass('muted');
  }
  if ($('#ckUnsubscribe').is(':checked')) {
    $('.unsub-info').addClass('muted');
  } else {
    $('.unsub-info').removeClass('muted');
  }

});

$(':checkbox.essentials').change(function() {
  var essentialsChecked = $('.essentials:checked').length;
  $('.js-essentials-counter').text(essentialsChecked);
  if (essentialsChecked > 0) {
    $('.js-essentials-box').removeClass('muted');
  }
  if (essentialsChecked > 0 && essentialsChecked < 10) {
    $('.js-essentials-box').removeClass('positive').addClass(' whisper');
    $('.js-essentials-message').addClass('hidden');
  }
  if (essentialsChecked == 10) {
    $('.js-essentials-box').addClass('positive').removeClass('whisper');
    $('.js-essentials-message').removeClass('hidden');
  }
  else if (essentialsChecked == 0) {
    $('.js-essentials-box').addClass('muted').addClass('whisper').removeClass('positive');
    $('.js-essentials-message').addClass('hidden');
  }
});

$(':checkbox.extras').change(function() {
  var extrasChecked = $('.extras:checkbox:checked').length;
  $('.js-extras-counter').text(extrasChecked);
  if (extrasChecked > 0) {
    $('.js-extras-box').removeClass('muted');
  }
  if (extrasChecked > 0 && extrasChecked < 7) {
    // $('.js-extras-box').removeClass('positive').addClass(' whisper');
    $('.js-extras-message').addClass('hidden');
  }
  if (extrasChecked == 7) {
    // $('.js-extras-box').addClass('positive').removeClass('whisper');
    $('.js-extras-message').removeClass('hidden');
  }
  else if (extrasChecked == 0) {
    $('.js-extras-box').addClass('muted');
    // .addClass('whisper').removeClass('positive');
    $('.js-extras-message').addClass('hidden');
  }
});