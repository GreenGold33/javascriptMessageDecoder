var decoder = require("./decoder.js");

function super_decoder(sentence, type) {
	var types = type.split("-");
	var words = [];
	if (types[0] === "every") {
		words = sentence.split(" ");
	} else if (types[0] === "odd") {
		words = sentence.split(" ").filter(function (word, index) {
			return index % 2 != 0;
		});
	} else if (types[0] === "even") {
		words = sentence.split(" ").filter(function (word, index) {
			return index === 0 || index % 2 === 0;
		});
	}

	if (types[1] === "forwards") {
		return decoder(words);
	} else if (types[1] === "backwards") {
		return decoder(words.reverse());
	}
}

module.exports = super_decoder;