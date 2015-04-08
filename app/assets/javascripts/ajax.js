function checkProfanity(word){
  $.ajax({
    url: "http://www.wdyl.com/profanity?q="+word,
    type: 'GET',
    crossDomain: true,
    xhrFields: {
     withCredentials: true
   }
  }).done(function(data) {
    alert( "success" );
      console.log(data);
  }).fail(function(data) {
    console.log(data);
    alert( "error" );
  });
}
