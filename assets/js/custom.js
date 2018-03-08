 
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
		executeCGICode($('#code_to_execute').val());
	});
}

function executeCGICode(code) {
	alert(code);
	$("#execute_simple_code").attr('src', 'execute_code.sim?'+code);
}