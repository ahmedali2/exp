$(document).ready(function() {		
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
	
	$('#news').css('height', height);
	$('#tag').css('height', (height-90));

	//For handling the home page bottom tabs (background buttons..etc)
	$('#p_goal').hide();
	$('#p_target').hide();

	adjustTabs();
	function adjustTabs(){

		if($('#p_goal').css('display')!='none'){
			//Goal is Selected
			$('#t_goal').css('background-image'," url(./icons/clicked.png)");
		} else {
			$('#t_goal').css('background-image',"none");
		}

		if($('#p_target').css('display')!='none'){
			//target is Selected
			$('#t_target').css('background-image'," url(./icons/clicked.png)");
		} else {
			$('#t_target').css('background-image',"none");
		}

		if($('#p_about').css('display')!='none'){
			//about is Selected
			$('#t_about').css('background-image'," url(./icons/clicked.png)");
		} else {
			$('#t_about').css('background-image',"none");
		}
	}
	

	$(".h_tabs").on("mousedown mouseup", function(e){
  	  $(this).toggleClass( "active", e.type === "mousedown" );
	});

	$('#t_about').click(function(){
		$('#p_goal').hide();
		$('#p_target').hide();
		$('#p_about').fadeIn(500);
		adjustTabs();
	});

	$('#t_goal').click(function(){
		$('#p_about').hide();
		$('#p_target').hide();
		$('#p_goal').fadeIn(500);
		adjustTabs();
	});	

	$('#t_target').click(function(){
		$('#p_about').hide();
		$('#p_goal').hide();
		$('#p_target').fadeIn(500);
		adjustTabs();
	});	
	
	//Menu button to open panel

}); 
