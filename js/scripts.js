//Business Logic
var validNumber = function(x) {
  var num2 = parseInt(x);

  if ((num2<1)||(num2>3999)){
    alert("Error: Invalid Number");
  } else {
    console.log("something");
  }
}

var conversion = function(number) {
  if
});

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
  });
});


//UI Logic
$(document).ready(function(){

  $("form#input").submit(function(event){
    event.preventDefault();
    number = parseInt($("input#number").val());
    validNumber(number);
    var output = conversion(number);
    $("#conversion").text(output);
    $("#output").show();
  });
  $("#reset").click(function(event) {
    $("#output").hide();
  });
});
