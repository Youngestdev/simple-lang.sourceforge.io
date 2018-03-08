 
$(document).ready(function(){

  // Hide div 2 by default
  $('#shell').hide();

  $('#link_2').click(function(){ 
      $('#hero').hide();
      $('#div_2').show();
  });

  $('#link_1').click(function(){ 
      $('#div_2').hide();
      $('#div_1').show();
  }); 
});