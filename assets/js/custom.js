 
$(document).ready(function(){

	buttonClicks();
  // Hide div 2 by default
  $('#try_online_shell').hide();
	
  
});

function buttonClicks() {
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
	$('#exec_code').click(function(){ 
		executeCGICode();
	});
}

function executeCGICode(code) {
	$("#execute_simple_code").attr('src', 'execute_code.sim?'+code);
}