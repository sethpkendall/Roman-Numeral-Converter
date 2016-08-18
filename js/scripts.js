//Business Logic

//UI Logic
$(document).ready(function(){
  
  $("#input form").submit(function(event){
    var number = $("input#number").val();
    var output = conversion(number);

    $("#conversion").text(output);
    $("#output").show();
    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#output").hide();
  });

});
