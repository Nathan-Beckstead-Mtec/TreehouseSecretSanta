// let names = ["alice", "bob", "charlie", "dave", "eve", "frank"];
function generate() {
	let names = ["Julie", "Teri", "Gina", "Christy", "Paula", "Ann"];

	let longestnamelength = names.reduce((max, thus) => {
		return Math.max(max, thus.length);
	}, 0);


	let crypto;
	try {
		crypto = self.crypto;
	} catch (err) {
		try {
			crypto = require('node:crypto').webcrypto;
		} catch (err2) {
			console.warn(err);
			console.warn(err2);
			console.log('crypto support is disabled!');
		}
	}




	const rands = new Uint16Array(names.length);
	crypto.getRandomValues(rands);
	console.log("rands:");
	console.log(rands);
	console.log();

	names = names.map((input, index) => {
		return { name: input, rand: rands[index] };
	});


	names.sort((a, b) => compare(a.rand, b.rand));

	console.log("output:");
	console.log(names);


	let length = names.length;
	let words = names.map((curr, index) => {
		return curr.name.padStart(longestnamelength, " ") + " is the secret santa for: " + names[(index + 1) % length].name;
	});

	words = words.join("\n");
	console.log("final:");
	console.log(words);



	//remove crypto numbers
	names = names.map(curr => {
		return curr.name;
	});
	console.log("final2:");
	console.log(JSON.stringify(names));
	return names;

	function compare(a, b) {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		// a must be equal to b
		return 0;
	}
}

if (typeof window === "undefined"){ //if running in node
	generate();
}
