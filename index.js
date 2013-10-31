
$(document).on("pageshow", function () { 

	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
	$('.tag').css('height', (height-90));
	$('.wrapper').css('height', (height-150));
	$('.footer').css('top', (height-60));
	console.log('done2');
	$('.submit').css('top',(height-90));
	$('#p_goal').hide();
	$('#p_target').hide();
	$('#p_about').show();
	adjustTabs();

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

	//----------- Message -------------
	$('.submit').attr('disabled','disabled');

	$('.submit').click(function(){
		if($('.submit').attr('disabled') == 'disabled'){
			console.log('its disabled');
			 toast('Please type your email and a message..');
		} else {
			console.log('its enabled');
			send();
		}
	});
	
	$('#c_email').keyup(function(){
		enableSubmit();
	});

	$('#c_message').keyup(function(){
		enableSubmit();
	});
});

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

function toast(msg){
	$("<div class='ui-loader ui-overlay-shadow ui-body-c ui-corner-all'><h3 style='color:#616161;'>"+msg+"</h3></div>")
	.css({ display: "block", 
		opacity: 0.90, 
		position: "fixed",
		padding: "7px",
		"text-align": "center",
		width: "270px",
		left: ($(window).width() - 284)/2,
		top: $(window).height()/2 })
	.appendTo( $.mobile.pageContainer ).delay( 1500 )
	.fadeOut( 400, function(){
		$(this).remove();
	});
}

function enableSubmit(){
	if($('#c_email').val().trim()!='' && $('#c_message').val().trim()!= '') {
		$('.submit').removeAttr('disabled');
	}else{
		$('.submit').attr('disabled','disabled');
	}
}

	

function send(){
	$.ajax({  
		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
        complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
		type: "POST",  
		url: "http://teachinsquare.com/expo/send.php",  
		data: { 'email': $('#c_email').val(), 'subject':$('#c_sub').val(), 'message': $('#c_message').val()} ,
		success: function(data){  
		
			var response = JSON.parse(data);
			
			if(response.status){
				console.log(response.status);

				if(response.status=="success"){
					//Show 'Message Sent!'
					toast('Message Sent!');			
					$('#c_email').val('');
					$('#c_sub').val('');
					$('#c_message').val('');
					$('.submit').attr('disabled','disabled');
				} else if(response.status=="error"){
					//Show 'Sending Message failed try again later'
					toast('Sending Message failed try again later.');
				}					
			} else {
				//Show alert about the error
				toast('Sending Message failed try again later.');
			}
		} 
	});
}


$(document).ready(function() {		

	//For handling the home page bottom tabs (background buttons..etc)
	$('#p_goal').hide();
	$('#p_target').hide();

	adjustTabs();

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
	
	
	console.log('the wrapper: ',$('.wrapper').height());
	console.log('the content div: ',$('.tag').height());
	console.log('the home div: ',$('#home').height());
	console.log('the directions div: ',$('#directions').height());
	console.log('the footer div: ',$('.footer').height());		
	console.log('the header div: ',$('.theHeader').height());	
	console.log('the card div: ',$('.card').height());

	
}); 


