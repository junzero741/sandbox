function getText<T>(text: T): T {
	return text;
}
getText<string>("hi");
getText<number>(1);
getText<boolean>(true);
getText<number[]>([1, 2, 3]);

// function logText(text: any): any {
// 	return text;
// }
function logText<T>(text: T): T {
	return text;
}
const text = logText<string>("hello Generic");
const text2 = logText("hello generic");

function logText2<T>(text: T[]): T[] {
	console.log(text.length);
	return text;
}
const text3 = logText2<number>(1);
// const text4 = logText2<string>(['hi','bye']);
// const text5 = logText2<string>('hibyehello');
const text6 = logText2<number>([1, 2, 3]);

function logText3<T>(text: Array<T>): Array<T> {
	console.log(text.length);
	return text;
}

function logText4<T>(text: T): T {
	return text;
}

let strr: <T>(text: T) => T = logText;
let strrr: { <T>(text: T): T } = logText;

interface GenericLogTextFn {
	<T>(text: T): T;
}
function logText5<T>(text: T): T {
	return text;
}
let myStr: GenericLogTextFn = logText5;

// interface GenericLogTextFunction {
// 	(text: T): T;
// }
// let myString: GenericLogTextFunction<string> = logText5;
