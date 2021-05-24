let num: number = 3;
let string: string = "hi";
let isLoggedIn: boolean = false;

// Object (Array)
let numArr: number[] = [1, 2, 3];
let genericArr: Array<number> = [1, 2, 3];

let tuple: [string, number] = ["hi", 10];
tuple[1].concat("!"); // property concat does not exist on type 'number'
tuple[5] = "hello"; // Tuple type ['string, number]' of length 2 has no element at index '5'

enum Avengers {
	Capt,
	IronMan,
	Thor = 4,
}
let capt: Avengers = Avengers.Capt;
let ironMan: Avengers = Avengers[1]; // 인덱스번호로는 접근할 수 없다.

let anything: any = "hi";
let anything2: any = 10;
let anything3: any = ["a", 2, true];

let unuseful1: void = undefined;
let unuseful2: void = null;
function notuse(): void {
	console.log("return nothing");
}

function neverEnd(): never {
	while (true) {}
}
