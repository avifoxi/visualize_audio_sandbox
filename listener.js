document.addEventListener('keyup', function(e){

	switch (e.which) {
		case 65 : 
			annie.toggle(0);
			break;
			// a
		case 83 : 
			annie.toggle(1);
			break;
			// s
		case 68 : 
			annie.toggle(2);
			break;
			// d		
		case 70 : 
			annie.toggle(3);
			break;
			// f
		default :
			console.log("Cherries are $3.00 a pound.");
    	break;
	}

})
