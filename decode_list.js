var super_decoder = require("./super_decoder.js");
var words_list = require("./words_list.js");
var forwards = [true, false];
var types = ["every", "even", "odd"];

function allTheOptions(options1, options2) {
	var optionsTotal = [];
	for (var i = 0; i < forwards.length; i++) {
		for (var j = 0; j < types.length; j++) {
			optionsTotal.push([types[j], forwards[i]]);
		}
	}

	return optionsTotal
}

function decode_list(words_list) {
	var allOptions = allTheOptions(forwards, types);
	for (var i = 0; i < words_list.length; i++) {
		for (var j = 0; j < allOptions.length; j++) {
			var toPrint = "Message:" + (i + 1) + " | Option: " + allOptions[j];
			toPrint += " | " + super_decoder(words_list[i], allOptions[j][0], allOptions[j][1]);
			console.log(toPrint);
		}
	}
}

// decode_list(words_list);

decode_list(words_list);
