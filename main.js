$(document).ready(function(){
$('a').click(function(){
		$(this).addClass('changeColor');
});

$(".title:contains('Lorem')").click(function(e){

    e.preventDefault();
    var $this = $(this).parent().find('.entry');
    $(".h2 entry").not($this).hide();

    $this.toggle();

});
});





