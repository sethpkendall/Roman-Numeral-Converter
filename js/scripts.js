//Business Logic
var validNumber = function(x) {
  var num2 = parseInt(x);
  if ((num2<1)||(num2>3999)){
    alert("Error: Invalid Number");
  } else {
  }
}

var ones = function(num) {
  var onesRes = "";
  if (num==="1") {
    onesRes +="I";
  } else if (num==="2"){
    onesRes +="II";
  } else if (num==="3"){
    onesRes +="III";
  } else if (num==="4"){
    onesRes +="IV";
  } else if (num==="5"){
    onesRes +="V";
  } else if (num==="6"){
    onesRes +="VI";
  } else if (num==="7"){
    onesRes +="VII";
  } else if (num==="8"){
    onesRes +="VIII";
  } else if (num==="9"){
    onesRes +="IX";
  }
  return onesRes;
}

var tens = function(num){
  var tensRes = "";
  if (num==="1") {
    tensRes +="X";
  } else if (num==="2"){
    tensRes +="XX";
  } else if (num==="3"){
    tensRes +="XXX";
  } else if (num==="4"){
    tensRes +="XL";
  } else if (num==="5"){
    tensRes +="L";
  } else if (num==="6"){
    tensRes +="LX";
  } else if (num==="7"){
    tensRes +="LXX";
  } else if (num==="8"){
    tensRes +="LXXX";
  } else if (num==="9"){
    tensRes +="XC";
  }
  return tensRes;
}

var hundreds = function(num){
  var hundredsRes = "";
  if (num==="1") {
    hundredsRes +="C";
  } else if (num==="2"){
    hundredsRes +="CC";
  } else if (num==="3"){
    hundredsRes +="CCC";
  } else if (num==="4"){
    hundredsRes +="CD";
  } else if (num==="5"){
    hundredsRes +="D";
  } else if (num==="6"){
    hundredsRes +="DC";
  } else if (num==="7"){
    hundredsRes +="DCC";
  } else if (num==="8"){
    hundredsRes +="DCCC";
  } else if (num==="9"){
    hundredsRes +="CM";
  }
  return hundredsRes;
}

var thousands = function(num){
  var thousandsRes = "";
  if (num==="1") {
    thousandsRes +="M";
  } else if (num==="2"){
    thousandsRes +="MM";
  } else if (num==="3"){
    thousandsRes +="MMM";
  }
  return thousandsRes;
}

var conversion = function(number) {
  var numLength = number.length;
  var result = "";
  if (numLength===1) {
    result += ones(number);
  } else if (numLength===2) {
    result += tens(number.slice(-2,-1));
    result += ones(number.slice(-1));
  } else if (numLength===3) {
    result += hundreds(number.slice(-3,-2));
    result += tens(number.slice(-2,-1));
    result += ones(number.slice(-1));
  } else if (numLength===4) {
    result += thousands(number.slice(-4,-3));
    result += hundreds(number.slice(-3,-2));
    result += tens(number.slice(-2,-1));
    result += ones(number.slice(-1));
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
