$(".definition").hover(
	function() {
	$("#page-wrapper").addClass("blur-filter");
    $("body").append(
    	"<div class='popup hover-popup'>"+ 
    	"<i class='fa fa-times popup-close' style='float:right'></i>" +
    	"<h5>" + $(this).text() + "</h5>" +
    	"<p>" + $(this).attr( "definition" ) + "</p>" +
    	"<div>")
	}, 
	function() {
  	if ($('.hover-popup').is(":visible")){
    	$("#page-wrapper").removeClass("blur-filter")
  	}
  	if ($('.hover-popup').is(":hover")==false){
  		$(".hover-popup").remove();
  	}
  }
);

$(document).on({
    mouseleave: function(){
        $(".hover-popup").remove();
    }
}, '.hover-popup');

$(".definition").on('click', function(){
	if ($('.hover-popup').is(":visible")){
    $(".hover-popup").remove();
  }
	if ($('.popup').is(":visible")==false) {
		$("#page-wrapper").addClass("blur-filter");
		$("body").append(
	    "<div class='popup'>"+ 
	    "<div class='fa fa-times popup-close' style='float:right'></div>" +
	    "<h5>" + $(this).text() + "</h5>" +
	    "<p>" + $(this).attr( 'definition' ) + "</p>" +
	    "<div>"
	  );
	  setTimeout(function(){$('.popup').addClass('popup-click')}, 5);
	}
});

$("body").on('click', function(){
	if ($('.popup-click').is(":visible")) {
		$("#page-wrapper").removeClass("blur-filter");
		$(".popup").remove();
	}
});