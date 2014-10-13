function addListenerMulti(el, events, fn) {
  for (var i=0; i < events.length; i++) {
    el.addEventListener(events[i], fn, false);
  }
}

addListenerMulti(document, ['keyup', 'keydown'], function(e){ ocarinish(e) });

function ocarinish(e) {
	var index;
	var action = e.type;
	switch (e.which) {
		case 65 : 
			index = 0;
			break;
			// a
		case 83 : 
			index = 1
			break;
			// s
		case 68 : 
			index = 2
			break;
			// d		
		case 70 : 
			index = 3
			break;
			// f
		case 74 : 
			index = 4
			break;
			// j
		case 75 : 
			index = 5
			break;
			// k
		case 76 : 
			index = 6
			break;
			// l		
		case 186 : 
			index = 7
			break;
			// ;
		default :
			console.log("i so sorry but i cannot sing for you");
    	break;
	}

	if (action === 'keydown'){
		annie.play(index);
	} else if (action === 'keyup'){
		annie.stop(index);
	}
}