function loopExample(){
  var colors = ["red", "blue", "green"];
  for (i = 0; i < colors.length; i++){
    var color = colors[i];
    console.log("At position " + i + " color is: " + color);
  }
}


function switchCase(){
  var colors = ["red", "blue", "green"];
  for (i = 0; i < colors.length; i++) {
    var color = colors[i];

    switch(color){
      case "red":
        $(".red").show();
        break;

        case "blue":
          $(".blue").show();
          break;

        case "green":
          $(".green").show();
          break;
    }
  }
}
