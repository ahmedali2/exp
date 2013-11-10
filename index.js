
$(document).on("pageshow", function () { 

	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
	$('.tag').css('height', (height-90));
	$('.wrapper').css('height', (height-150));
	$('.footer').css('top', (height-89));
	$('.line').css('top', (height-1));
	console.log('done2');

	if (height > 1200 && width > 700 ){
		console.log('its a tablet');
		$('#cover_div').css('background-image',"url(./icons/cover1280.png)");
		$('#start_title').css('font-size','30px').css('top','-5px');
		$('.about_t').css('font-size','30px').css('top','-5px');
		$('.header_title').css('font-size','35px').css('top','20px');
		$('#schedule_content img').css('width','90').css('height','90');
		$('#speakers_content img').css('width','120').css('height','144');
		$('#sponsors_content img').css('width','70').css('height','84');
		$('#turkey').css('width','84px !important').css('height','84px !important');
		$('.wrapper input').css('font-size','35px').css('padding-top','8px').css('margin-top','8px');
		$('textarea').css('font-size','35px');
		$('.toast_message').css('font-size','35px !important');
		
	} else if (height >700 && height < 1200  ) {
		console.log('its wvga 480');
		$('#cover_div').css('background-image',"url(./icons/cover480.png)");
		$('.wrapper input').css('font-size','24px').css('padding-top','8px').css('margin-top','8px');
		$('textarea').css('font-size','24px');
	}

	manageLowerPanel('#t_goal', '#t_target','#t_about', '#p_goal', '#p_target', '#p_about');

	manageLowerPanel('#t_sun', '#t_sat','#t_fri', '#p_sun', '#p_sat', '#p_fri');
	
	//----------- Message -------------
	$('#submit').attr('disabled','disabled');

	$('#submit').click(function(){
		if($('#submit').attr('disabled') == 'disabled'){
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
	
	$('#c_sub').keyup(function(){
		enableSubmit();
	});

	$('#c_message').keyup(function(){
		enableSubmit();
	});

	$('#c_message2').keyup(function(){
		enableSubmit();
	});

	if (height > 1200 && width > 700 || height > 700 && width > 1200  ){
		console.log('its galaxy S lll or a tablet ');
		$('.tag p').css('font-size','43px');
		$('#c_message').attr('cols','100');
	} else {
		console.log('not a tablet'); console.log(height, width);
	}
	
});


function adjustTabs(d1, d2, d3, p1, p2, p3){

	if($(p1).css('display')!='none'){
		//Goal is Selected
		$(d1).css('background-image'," url(./../icons/clicked.png)");
	} else {
		$(d1).css('background-image',"none");
	}

	if($(p2).css('display')!='none'){
		//target is Selected
		$(d2).css('background-image'," url(./../icons/clicked.png)");
	} else {
		$(d2).css('background-image',"none");
	}

	if($(p3).css('display')!='none'){
		//about is Selected
		$(d3).css('background-image'," url(./../icons/clicked.png)");
	} else {
		$(d3).css('background-image',"none");
	}
}

function toast(msg){
	$("<div class='ui-loader ui-overlay-shadow ui-body-c ui-corner-all'><h3 class='toast_message' style='color:#616161;'>"+msg+"</h3></div>")
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
	if($('#c_email').val().trim()!='' && $('#c_sub').val().trim()!='' && ( $('#c_message').val().trim() + $('#c_message2').val().trim() ) != '') {
		$('#submit').removeAttr('disabled');
	}else{
		$('#submit').attr('disabled','disabled');
	}
}

	

function send(){

	if($('#c_message').css('display')=='none'){
		mes = $('#c_message2').val();
	} else {
		mes = $('#c_message').val();
	}
	console.log('your message: ',mes);
	
	$.ajax({  
		beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
        complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
		type: "POST",  
		url: "http://teachinsquare.com/expo/send.php",  
		data: { 'email': $('#c_email').val(), 'subject':$('#c_sub').val(), 'message': mes} ,
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
					$('#c_message2').val('');
					$('#submit').attr('disabled','disabled');
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

	manageLowerPanel('#t_goal', '#t_target','#t_about', '#p_goal', '#p_target', '#p_about');
	manageLowerPanel('#t_sun', '#t_sat','#t_fri', '#p_sun', '#p_sat', '#p_fri');
	
	console.log('the wrapper: ',$('.wrapper').height());
	console.log('the content div: ',$('.tag').height());
	console.log('the home div: ',$('#home').height());
	console.log('the directions div: ',$('#directions').height());
	console.log('the footer div: ',$('.footer').height());		
	console.log('the header div: ',$('.theHeader').height());	
	console.log('the card div: ',$('.card').height());

	
}); 

function manageLowerPanel(d1, d2, d3, p1, p2, p3){

	$(p1).hide();
	$(p2).hide();
	$(p3).show();
	adjustTabs(d1, d2, d3, p1, p2, p3);

	$(d3).click(function(){
		$(p1).hide();
		$(p2).hide();
		$(p3).fadeIn(500);
		adjustTabs(d1, d2, d3, p1, p2, p3);
	});

	$(d1).click(function(){
		$(p3).hide();
		$(p2).hide();
		$(p1).fadeIn(500);
		adjustTabs(d1, d2, d3, p1, p2, p3);
	});	

	$(d2).click(function(){
		$(p3).hide();
		$(p1).hide();
		$(p2).fadeIn(500);
		adjustTabs(d1, d2, d3, p1, p2, p3);
	});	
}
