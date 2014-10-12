document.addEventListener('keyup', function(e){

	switch (e.which) {
		case 65 : 
			console.log('u press a');
			break;
		case 83 : 
			console.log('u press s');
			break;
		case 68 : 
			console.log('u press d');
			break;		
		case 70 : 
			console.log('u press f');
			break;

		default :
			console.log("Cherries are $3.00 a pound.");
    	break;
	}

})
