 
$(document).ready(function(){

	loadTest();
  // Hide div 2 by default
  $('#try_online_shell').hide();

  $('#shell_hero').click(function(){ 
	if ($('#shell_hero').html() == "TRY ONLINE") {
		$('#introduction').hide();
		$('#try_online_shell').show();
		$('#shell_hero').text("INTRODUCTION");
	} else {
		$('#introduction').show();
		$('#try_online_shell').hide();
		$('#shell_hero').text("TRY ONLINE");
	}      
  });
});

function loadTest() {
	var iframe = $("#execute_simple_code");
    iframe.attr("src", iframe.data("contributors.html"));
}