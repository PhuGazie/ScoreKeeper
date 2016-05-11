$(document).ready(function() {

  var sum = 0;
  $("#score").html(sum);

  $(document).on("click", "#increase-5", function() {
    sum = sum + 5;
    $("#score").html(sum);
  });

  $(document).on("click", "#decrease-5", function() {
    sum = sum - 5;
    $("#score").html(sum);

  });

  $(document).on("click", "#submit-custom-score", function (){
      var custom = parseInt($("#custom-score").val());
      $("#score").html(custom);
      sum = custom + sum;
  });


});
