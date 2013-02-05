'use strict'
;(function bringColorToNode(){
	var styles = {
		white:1, black:30, blue:34, pink:35, cyan:36,
		
		red:31, redLight:91,
		green:32, greenLight:92,
		yellow:33, yellowLight:93,
		gray:90, grayLight:37,
		
		bgRed:41, bgRedLight:101,
		bgGreen:42, bgGreenLight:102,
		bgYellow:43, bgYellowLight:103,
		bgBlue:44, bgLightBlue:104,
		bgPink:45, bgPinkLight:105,
		bgCyan:46, bgCyanLight:106,
		bgGray:100, bgGrayLight:47,
		bgWhite:107,
		
		underline:4, inverse:7
	}
	
	for (var name in styles) {
		addStringPrototypeProperty(name, styles[name])
	}
	
	function addStringPrototypeProperty(name, code) {
		var prefix = '\u001b['
		var reset = '\u001b[0m'
		Object.defineProperty(String.prototype, name, {
			get: function() { return prefix + code + 'm' + this + reset }
		})
	}
	
	module.exports = function showColorfulExamples() {
		Object.keys(styles).forEach(function(style) {
			if (style.match(/^bg/)) { console.log(style[style].black )}
			else { console.log(style[style]) }
		})
		console.log('black.bgYellow'.black.bgYellow)
		console.log('blue.bgGrayLight.underline'.blue.bgGrayLight.underline)
		console.log('yellowLight.bgPink'.yellowLight.bgPink)
		console.log('yellowLight.bgPink.inverse'.yellowLight.bgPink.inverse)
	}
}())
