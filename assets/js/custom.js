 
$(document).ready(function(){

	buttonClicks(); 
	$('#try_online_shell').hide();
	$("#introduction > div:gt(0)").hide();
	slideShow();
  
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
	$("#execute_simple_code").attr('src', 'execute_code.sim?'+code);
}

function slideShow() {
	setInterval(function() {
	  $('#introduction > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#introduction');
	}, 3000);
}