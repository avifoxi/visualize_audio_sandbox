console.log('hawo')


function synthNote(freq) {
	this.freq = freq;
	this.osc;
	
	var _this = this;

	this.makeMeAnOsc = function() {
		_this.osc = CONTEXT.createOscillator();
		_this.osc.frequency.value = _this.freq;
	}
	this.start = function() {
		_this.osc.start(0);
	}
	this.stop = function() {
		_this.osc.disconnect();	
	}
	this.connect = function(node){
		_this.osc.connect(node);
	}
	this.disconnect = function(){
		_this.osc.disconnect();
	}
}


function analyzeDest(sourceOsc){
	
	this.osc = sourceOsc;
	this.analyser = CONTEXT.createAnalyser();
	this.destination = CONTEXT.destination
	this.isPlaying = false;

	var _this = this;

	this.play = function(){
		_this.osc.makeMeAnOsc();
		_this.connectToOut();
		_this.osc.start(0);
	}
	this.stop = function() {
		_this.osc.disconnect();
		
	}
	this.connectToOut = function(){
		_this.osc.connect(_this.analyser);
		_this.analyser.connect(_this.destination);
	}
	this.toggle = function() {
		if (_this.isPlaying){
			_this.stop();
			_this.isPlaying = !(_this.isPlaying);
		} else {
			_this.play();
			_this.isPlaying = !(_this.isPlaying);
		}
	}
}












