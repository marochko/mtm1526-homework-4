$(document).ready(function(){

		$('.navigation a').on('click', function(){
			
		var tabToShow = $(this).attr('href');	
		console.log(tabToShow);
		$(tabToShow).show("slow"); //$('#tab-1')
		$('.selected').hide("slow");
		$('.selected').removeClass('selected');
		$(tabToShow).removeClass('selected');
		$(tabToShow).addClass('selected');
			
		});

	  
});

