let person = { name: "Capt", age: 28 };
function logAge(obj: { age: number }) {
	console.log(obj.age);
}
logAge(person);
interface personAge {
	age: number;
}
function logAge2(obj: personAge): Function {
	console.log(obj.age);
	return () => {};
}
let person2 = { name: "IronMan", age: 30 };
logAge2(person2);


interface CraftBeer {
  readonly brand : string;
}
let myBeer : CraftBeer {
  brand= 'Belgian Monk'
};
myBeer.brand = 'korean carpenter' // brand property is read-only!
let arr : ReadonlyArray<number> = [1,2,3];
arr.push(4);
arr[0] = 100;


interface justBeer {
  brand?: string;
}
function brewBeer(beer: justBeer) {
  console.log(beer);  
}
brewBeer({brand:'what'});
let yourBeer = {brandon : "what"};
brewBeer(yourBeer as justBeer);
interface everybodyBeer {
  brand?: string;
  [propName: string] : any;
}


interface login {
  (username: string, password: string): boolean;
}
let loginUser: login;
loginUser = function(id: string, pw: string) {
  console.log('로그인 완료', id, pw);
    return true;
}

interface Person {
  name: string;
}
interface Developer extends Person {
  skill: string;
}
let fe = {name:"goody", skill:'non'} as Developer;
console.log(fe);