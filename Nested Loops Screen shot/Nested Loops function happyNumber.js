function happyNumber(n) {
	let happyNums = [];

	for (let i = 0; i <= 9999; i++) {
		let bigNum = i.toString().split("").map(Number);

		let d1 = bigNum[0];
		let d2 = bigNum[1];
		let d3 = bigNum[2];
		let d4 = bigNum[3];

		if (d1 + d2 === n && d3 + d4 === n) {
			happyNums.push(i);
		}
	}

	console.log(happyNums.join(" "));
}

happyNumber(3);
