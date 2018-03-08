 
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
	$("#execute_simple_code").attr('src', 'http://localhost/simple-lang.sourceforge.io/contributors.html');
}