'use strict'
;(function bringColorToNode(){
	module.exports = {
		showColorfulExamples:showColorfulExamples
	}

	var styles = {
		white:1, black:30, blue:34, magenta:35, cyan:36,
		
		red:31, lightRed:91,
		green:32, lightGreen:92,
		yellow:33, lightYellow:93,
		gray:90, lightGray:37,
		
		bgRed:41, bgLightRed:101,
		bgGreen:42, bgLightGreen:102,
		bgYellow:43, bgLightYellow:103,
		bgBlue:44, bgLightBlue:104,
		bgMagenta:45, bgLightMagenta:105,
		bgCyan:46, bgLightCyan:106,
		bgGray:100, bgLightGray:47,
		bgWhite:107,
		
		underline:4, inverse:7, reset:0
		
		// Intentionally left out for poor support and duplicate rendering:
		// bold (e.g yellow.bold is same as lightYellow)
		// reset, dim, italic, hidden
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
	
	function showColorfulExamples() {
		var res = []
		Object.keys(styles).forEach(function(style) {
			if (style.match(/^bg/)) { res.push(style[style].black) }
			else { res.push(style[style]) }
		})
		res.push('black.bgYellow'.black.bgYellow)
		res.push('blue.bgLightGray.underline'.blue.bgLightGray.underline)
		res.push('lightYellow.bgMagenta'.lightYellow.bgMagenta)
		res.push('lightYellow.bgMagenta.inverse'.lightYellow.bgMagenta.inverse)
		console.log('showColorfulExamples:', res.join(', '))
	}
}())
