function removeTextFromTable(){
  $('#myTable tr td').each(function(){
    $(this).text('');
  });
  makeRowsPink();
}

//http://api.jquery.com/nth-child-selector/
function makeRowsPink(){
  $("tr:nth-child(odd)").css("background-color", "hotpink");
}
//https://api.jquery.com/eq/
function makeMiddlePink(){
  $("tr td").eq(2).css("background-color", "hotpink");
}
