const flag: boolean = true;
const str: string = "crong";
const list: string[] = ["crong", "goody"];
const unionString: string | number = 123;
const thisIsJs = "123";

function adder(base: number, value: number): string {
	return `결과는 : ${base + value} 입니다`;
}

console.log(flag, str, list, unionString, thisIsJs);
console.log(adder(10, 10));

let bar = true; // bar 는 boolean 이라는 사실을 알고 있다.
// const result = bar + 1; // error
