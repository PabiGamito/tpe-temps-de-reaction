$( document ).ready(function() {
  $("h3").fadeIn(1500);
  $("#instructions").show();
  $(".faint-label").fadeIn(1000);
});

var startTime; var total_time = 0; var tries = 0; var avg; var timeout;

function start(){
  timeout=setTimeout(function(){
    $('#go, #results, #landing, #waiting, #retry, #submit').hide();
    $('body').css('background-color', '#4BDB6A');
    $("#go").show();
    startTime = Date.now();
  }, (Math.floor(Math.random() * 4500)+500));
}

$(".submit-link").click(function(){


});

$("#submit-link").click(function(){
  $('#go, #results, #landing, #waiting, #retry, #submit').hide();
  $("#submit-popup").show();
});

$(document).on('click', function() {
  if ($('#submit-popup').is(":visible")===false) {
    if ($('#go').is(":visible")) {
      $('#go, #results, #landing, #waiting, #retry, #submit').hide();
      tries += 1;
      if (tries<5) {
        $('#results').show();
      } else{
        $('#submit').show();
      }
      total_time += Date.now()-startTime;
      avg = total_time/tries;
      $('body').css('background-color', '#2B87D1');
      $('#results #results_div').text(Date.now()-startTime + " ms");
      $('.average').text("Moyenne | " + Math.round(avg * 100) / 100 + " ms");
      $('.tries').text("Essaies | " + tries + " sur 5")
    } else if ($('#waiting').is(":visible")) {
      clearTimeout(timout);
      $('#go, #results, #landing, #waiting, #retry, #submit').hide();
      $('body').css('background-color', '#2B87D1');
      $('#retry').show();
    } else if ($('#landing').is(":visible") || $('#retry').is(":visible") || $('#submit').is(":visible") || $('#results').is(":visible")) {
      $('#go, #results, #landing, #waiting, #retry, #submit').hide();
      $('body').css('background-color', '#CE2636');
      $('#waiting').show();
      start();
    }
  }
});

$("#done-link").on('click', function(){
  $(this).html("<i class='fa fa-spinner fa-spin'></i>");
  $.post("51.254.126.24:8000/save-speed-test-results",
  {
    average: avg,
    sex: "male"
  },
  function(data, status){
    // alert("Data: " + data + "\nStatus: " + status);
    $(this).html("Recue par le Serveur. Merci!");
  });
});

$.get("51.254.126.24:8000/get-speed-test-stats", function(data, status){
  alert("Data: " + data + "\nStatus: " + status);
});