$.urlParam = function(name){
  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (!results) { return 0; }
  return results[1] || 0;
}

$(function(){
  var subject = $.urlParam("subject");
  var timeout = $.urlParam("timeout");

  if(subject) {
    $('.subject').text(decodeURIComponent(subject));
  }

  setTimeout(function(){
    $('#answer').show();
    $('#processing').hide();
  }, timeout || 1500);
});
