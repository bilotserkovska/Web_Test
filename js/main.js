$(document).ready(function(){
$('.carousel').carousel()
   	$('a.scroll, .burger-button').click(function(){
   		if($(this).hasClass('burger-button')) {
   			if($('.menu-button').hasClass('menu-button-active')) {
	            $('.menu-button').removeClass('menu-button-active');
	            $('.menu-button').addClass('menu-button-hidden');
	            $('.menu-button').slideUp();
	        }else{
	            $('.menu-button').removeClass('.menu-button-hidden');            
	            $('.menu-button').addClass('menu-button-active');
	            $('.menu-button').slideDown();
	        }
   		}
    });	
});