 
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
	document.getElementById('testframe').contentWindow.document.write('#!C:\Users\thecarisma\Documents\SIMPLE GITHUB\simple\bootsrc\dist\Debug\MinGW-Windows\simple.exe -cgi display "Hello World : "+(2*50)');
}