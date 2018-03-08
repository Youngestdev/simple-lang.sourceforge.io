 
$(document).ready(function(){

  // Hide div 2 by default
  $('#try_online_shell').hide();

  $('#shell_hero').click(function(){ 
      $('#introduction').hide();
      $('#try_online_shell').show();
  });

  $('#link_1').click(function(){ 
      $('#try_online_shell').hide();
      $('#introduction').show();
  }); 
});