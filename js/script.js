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
     	 	breakpoint: 767,
      			settings: {
      			arrows: false,
        		/*dots: true,*/
				infinite: false,
				slidesPerRow: 1,
				speed:300,
				centerMode: true,
      			}
    		
    	}]

	});

});

function sendMail(){
	var senderName = document.getElementById("name").value;
	var senderMail = document.getElementById("Email").value;
	var senderText = document.getElementById("textArrea").value;
	
	Email.send({
		SecureToken : "c6d18dab-4d80-430f-b735-c8b7bbbcfc88",
		To : 'ulyana.torga@gmail.com',
		From : senderMail,
		Subject : senderName + ", запис на фотосесію",
		Body : senderText
	}).then(
		message => alert(message)
	);
}