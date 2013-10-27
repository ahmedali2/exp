$(document).ready(function() {		
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

	$('.tag').css('height', (height-90));
	$('.wrapper').css('height', (height-150));
	$('.footer').css('top', (height-60));

	console.log("hello!!!");

	console.log('the wrapper: ',$('.wrapper').height());
	console.log('the content div: ',$('.tag').height());
	console.log('the home div: ',$('#home').height());
	console.log('the footer div: ',$('.footer').height());		
	console.log('the header div: ',$('.theHeader').height());	
	
}); 
