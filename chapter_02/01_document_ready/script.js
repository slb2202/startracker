$(document).ready(function(){
  $("#celebs tbody tr:even").addClass("zebra");
  $('#toggleButton').click(function (){
  		if($('#disclaimer').is(':visible')){
  			$('#disclaimer').hide();
  		}
  		else {
  			$('#disclaimer').show
  		}
  })

});
