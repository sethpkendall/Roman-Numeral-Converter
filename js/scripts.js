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
  var numLength = number.length;
  var result = "";
  if (numLength===1) {
    if (number==="1") {
      result +="I";
    } else if (number==="2"){
      result +="II";
    } else if (number==="3"){
      result +="III";
    } else if (number==="4"){
      result +="IV";
    } else if (number==="5"){
      result +="V";
    } else if (number==="6"){
      result +="VI";
    } else if (number==="7"){
      result +="VII";
    } else if (number==="8"){
      result +="VIII";
    } else if (number==="9"){
      result +="IX";
  // } else if (numLength===2) {
  //
  // } else if (numLength===3) {
  //
  // } else if (numLength===4) {

    } else {
    }
  }
  return(result);
}

$(document).ready(function(){
  $("form#input").submit(function(event){
    event.preventDefault();
  });
});


//UI Logic
$(document).ready(function(){

  $("form#input").submit(function(event){
    event.preventDefault();
    number = $("input#number").val() ;
    validNumber(number);
    var output = conversion(number);
    $("#conversion").text(output);
    $("#output").show();
  });
  $("#reset").click(function(event) {
    $("#output").hide();
  });
});
