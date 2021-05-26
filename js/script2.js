$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		infinite: false,
		slidesPerRow: 4,
		speed:300,
		variableWidth: true,
		draggable: false,
		lazyLod: 'ondemand',	
		responsive: [
    	{
     	 	breakpoint: 565,
      			settings: {
      			arrows:false,
        		/*dots: true,*/
				infinite: false,
				slidesPerRow: 1,
				speed:300,
				centerMode: true,

				
      			}
    		
    	}]

	});

});

