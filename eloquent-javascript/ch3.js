let min = (a, b) => {
	if (a <= b) return a;
	else if (a > b) return b;
}

let isEven = a => {
	if (a === 0) return true;
	if (a === 1) return false;

	if (a < 0) return isEven(a + 2);
	else return isEven(a - 2);
}

let countChar = (a, char) => {
	let count = 0;
	for (let c of a) {
		if (c === char) count++;
	}
	return count;
}