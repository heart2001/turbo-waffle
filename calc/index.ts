const add = (n1: number, n2: number) => n1 + n2;
const sub = (n1: number, n2: number) => n1 - n2;
const mul = (n1: number, n2: number) => n1 * n2;
const div = (n1: number, n2: number) => n1 / n2;

// The solve function, executed when the solve button is clicked.
function solve() {
	// Get the values from the input fields and convert them to numbers;
	const n1 = parseInt((document.querySelector('#n1') as HTMLInputElement).value, 10);
	const n2 = parseInt((document.querySelector('#n2') as HTMLInputElement).value, 10);
	const o = (document.querySelector('#operator') as HTMLSelectElement).value;

	let ans = 0;
	if (o === 'add') ans = add(n1, n2);
	else if (o === 'sub') ans = sub(n1, n2);
	else if (o === 'mul') ans = mul(n1, n2);
	else ans = div(n1, n2);

	(document.querySelector('#ans') as HTMLSpanElement).innerHTML = `Ans = ${ans}`;
}

// The main function of our calculator, it is executed once the document has loaded.
function main() {
	// Get the solve button and add Type information using `as` keyword.
	const btn = document.querySelector('#solve') as HTMLButtonElement;
	btn.addEventListener('click', solve);
}
