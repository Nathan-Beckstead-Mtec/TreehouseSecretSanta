// let names = ["alice", "bob", "charlie", "dave", "eve", "frank"];
function generate(year) {
	let names = ["Julie", "Teri", "Gina", "Christy", "Paula", "Ann"];

	let longestnamelength = names.reduce((max, thus) => {
		return Math.max(max, thus.length);
	}, 0);



	class prng {
		//linear congruential generator
		//aka next = (a * last + c) % m
		//values from random0
		constructor(seed){
			this.last = seed;
			console.log(seed);
			//burn a few
			this.next();
			this.next();
			this.next();
			this.next();
			this.next();
			this.next();
			this.next();
			this.next();
			this.next();
		}
		next(){
			let now = (this.last * 8121 + 28411)% 134456;
			this.last = now;
			return now;
		}
	}
	let seed = (year-2022 + 1) * 2946901 + 479001599
	//this started as utc for (dec 25th 4:20:06:09 [year]) but that messes up per timezone
	//so this is not actually utc but big-number-that-changes-per-year

	let rng = new prng(seed);
	let rands = [];
	for (let i = 0; i < names.length; i++) {
		rands[i]=rng.next();
	}




	names = names.map((input, index) => {
		return { name: input, rand: rands[index] };
	});

	console.log(names);


	names.sort((a, b) => compare(a.rand, b.rand));

	// console.log("output:");
	// console.log(names);


	let length = names.length;
	let words = names.map((curr, index) => {
		return curr.name.padStart(longestnamelength, " ") + " is the secret santa for: " + names[(index + 1) % length].name;
	});

	words = words.join("\n");
	// console.log("final:");
	// console.log(words);



	//remove crypto numbers
	names = names.map(curr => {
		return curr.name;
	});
	// console.log("final2:");
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
	let year = 2022;
	console.log(generate(year++));
	console.log(generate(year++));
	console.log(generate(year++));
	console.log(generate(year++));
	console.log(generate(year++));
}
