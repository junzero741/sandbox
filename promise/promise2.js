// const foo = (arg) => {
//     let dodo = new Promise((resolve, reject) => {
//         if(arg === "do") resolve("do");
//         else reject(arg);
//     })

//     return dodo;
// }

// foo("d")
// .then(res => console.log(res))
// .catch(res => console.error(`${res} is not do`));




// const loadScript = (file) => {
//     return(`${file} loaded`);
// }



// let promise = new Promise((resolve, reject) => {
  
//     setTimeout(() => {    
//         resolve("done");   
//     }, 3000);

// });

// console.log("sync code start");

// promise
// .then(res => console.log(res))
// .then(console.log(loadScript(`2.js`)))
// .then(console.log(loadScript('3.js')));


// console.log("sync code end");



// promise // executor 가 성공적으로 실행되어야만 실행되는 체이닝
//     // .then(res => loadScript(`${res}`))
//     // .then(res => loadScript(`${res}`));


// const getCow = () =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`🐮`), 1000); 
//     });
// const getMeat = (cow) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => reject(new Error (`error! ${cow} => 🥩`)), 1000);	
//     });
// const getBurger = (meat) =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => resolve(`${meat} => 🍔`), 1000);	
//     });


// getCow()					// 소를 데려온다.
//     .then(result => getMeat(result))		// 데려온 result 를 고기로 만든다.
//     .then(result => getBurger(result))		// 고기가 된 result로 버거를 만든다.
//     .then(result => console.log(result))	// 결과를 출력한다.
// 	.catch(console.log)


// const loadScript = (file, step) => 
//     new Promise((resolve, reject) => {
//        setTimeout(() => resolve(`${file} is loaded in step ${step}`), 1000);
//     })




// console.log("sync code start");

// loadScript('1.js', 1)
// .then(res => loadScript('2.js', res+1))
// .then(res => loadScript('3.js', res+1))
// .then(res => console.log(`scripts ${res} successfully loaded.`));

// console.log("sync code end");