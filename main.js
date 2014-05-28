$.urlParam = function(name){
  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (!results) { return 0; }
  return results[1] || 0;
}

function buildURL(subject){
  return 'http://brokenitis.com?subject=' + encodeURIComponent(subject);
}

$(function(){
  var subject = $.urlParam("subject");
  var timeout = $.urlParam("timeout");

  if(subject) {
    $('.subject').text(decodeURIComponent(subject));

    setTimeout(function(){
      $('#answer').show();
      $('#processing').hide();
    }, timeout || 1500);
  }
  else {
    $('#form').show();
  }

  $("#subject_input").on('keyup', function(){
    var url = buildURL($(this).val());
    $("#url_output").val(url);
  });

  $("#url_output").on('mouseup', function() {
    $(this).select();
  });

  $("#show_link").on('click', function(){
    $(this).hide();
    $('#form').show();
    $('#subject_input').val(decodeURIComponent(subject)).focus().select();

    var url = buildURL(subject);
    $("#url_output").val(url);
  });
});
