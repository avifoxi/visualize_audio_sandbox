function addListenerMulti(el, events, fn) {
  for (var i=0; i < events.length; i++) {
    el.addEventListener(events[i], fn, false);
  }
}

addListenerMulti(document, ['keyup', 'keydown'], function(e){ ocarinish(e) });

function ocarinish(e) {
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
		case 74 : 
			annie.toggle(4);
			break;
			// j
		case 75 : 
			annie.toggle(5);
			break;
			// k
		case 76 : 
			annie.toggle(6);
			break;
			// l		
		case 186 : 
			annie.toggle(7);
			break;
			// ;
		default :
			console.log("i so sorry but i cannot sing for you");
    	break;
	}
}











