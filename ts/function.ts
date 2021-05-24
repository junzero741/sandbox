function sum(a: number, b: number): number {
	return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // too many params
sum(10); // too few params

function sum2(a: number, b?: number): number {
	return a + b;
}

sum2(10, 20); // 30
sum2(10, 20, 30); // too many params
sum2(10); // 10

function sum3(a: number, b = 100): number {
	return a + b;
}
sum3(10, undefined); // 110
sum3(10, 20, 30); // too many params
sum3(10, 20); // 30

function sum4(a: number, ...nums: number[]): number {
	let totalOfNums = 0;
	for (let el of nums) {
		totalOfNums += el;
	}
	return a + totalOfNums;
}
sum4(1, 2, 3, 4, 5);

interface Vue {
	el: string;
	count: number;
	init(this: Vue): () => {};
}

let vm: Vue = {
	el: "#app",
	count: 10,
	init: function (this) {
		return () => {
			return this.count;
		};
	},
};
