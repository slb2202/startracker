$(document).ready(function(){
  $("#celebs tbody tr:even").addClass("zebra");

  		$('#toggleButton').click(function(){
  			$('#disclaimer').toggle();
  			if($('disclaimeer').is (':visible')) {
  				$(this).val('hide');
  			};
  			else{
  				$(this).val('show');
  			}
  		})

});
