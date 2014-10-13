console.log('hola from init')

// $( document ).ready(function() {

	CONTEXT = new AudioContext();

	var note1 = new synthNote(261.63);
	var note2 = new synthNote(392)
	var note3 = new synthNote(440)
	var note4 = new synthNote(659.26)
	var note5 = new synthNote(880);
	var note6 = new synthNote(987.77)
	var note7 = new synthNote(1174.66)
	var note8 = new synthNote(1479.98)




	var annie = new analyzeDest([note1, note2, note3, note4, note5, note6, note7, note8]);

	var canvas = $('canvas')
	var HEIGHT = canvas.height()
	var WIDTH = canvas.width()
	var drawContext = canvas[0].getContext('2d')

	// console.log('height: ' + HEIGHT + ' --- width: ' + WIDTH)
	// var freqDomain = new Float32Array(annie.analyser.frequencyBinCount);
	// annie.analyser.getFloatFrequencyData(freqDomain);

	// function getFrequencyValue(frequency) {
	//   var nyquist = CONTEXT.sampleRate/2;
	//   var index = Math.round(frequency/nyquist * freqDomain.length);
	//   return freqDomain[index];
	// }

	var freqDomain = new Uint8Array(annie.analyser.frequencyBinCount);
	
	function updateCanvas(){
		annie.analyser.getByteFrequencyData(freqDomain);
		for (var i = 0; i < annie.analyser.frequencyBinCount; i++) {
		  var value = freqDomain[i];
		  var percent = value / 256;
		  var height = HEIGHT * percent;
		  var offset = HEIGHT - height - 1;
		  var barWidth = WIDTH/annie.analyser.frequencyBinCount;
		  var hue = i/annie.analyser.frequencyBinCount * 360;
		  drawContext.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
		  drawContext.fillRect(i * barWidth, offset, barWidth, height);
		}
		// window.requestAnimationFrame(updateCanvas);
	}
	
	// window.requestAnimationFrame(updateCanvas);






// });







