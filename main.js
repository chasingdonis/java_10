$(document).ready(function(){
$('a').click(function(){
		$(this).addClass('changeColor');
});

$("li#sidebar_content_1").click(function(e){

    var $this = $(this).parent().find('li#sidebar_content_1 ul');
    $this.toggle();
});
    
$("#content div.post:first h2").click(function(){ 
$("#content div.post:first div.entry").html('<p>I try to see what will happen</p>');
    });
    
$('div#menu ul li a').prepend('<img id="image" src="icon.png" />')

$('li#sidebar_content_1 ul li:first a').css('color', 'blue');
$('li#sidebar_content_1 ul li:odd').css('padding-left', 5);
});





