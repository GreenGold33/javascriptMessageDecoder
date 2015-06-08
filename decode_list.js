var super_decoder = require("./super_decoder.js");
var words_list = require("./words_list.js");
var options1 = ["forwards", "backwards"];
var options2 = ["every", "even", "odd"];

function allTheOptions(options1, options2) {
	var optionsTotal = [];
	for (var i = 0; i < options1.length; i++) {
		for (var j = 0; j < options2.length; j++) {
			optionsTotal.push(options2[j] + "-" + options1[i]);
		}
	}

	return optionsTotal
}

function decode_list(words_list) {
	var allOptions = allTheOptions(options1, options2);
	for (var i = 0; i < words_list.length; i++) {
		for (var j = 0; j < allOptions.length; j++) {
			var toPrint = "Message:" + (i + 1) + " | Option: " + allOptions[j];
			toPrint += " | " + super_decoder(words_list[i], allOptions[j]);
			console.log(toPrint);
		}
	}
}

// decode_list(words_list);

decode_list(words_list);