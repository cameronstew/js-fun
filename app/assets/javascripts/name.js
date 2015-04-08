function sayHello(){
  var name;

  $('#first_name').change(function(e){
    e.preventDefault();
    name = $(this).val();
    alert("Hello "+ name);
  });

console.log(name);
}
