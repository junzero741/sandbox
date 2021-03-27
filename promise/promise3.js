const getCow = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`🐮`), 1000); // 소를 데려오기 1초
    });

const getMeat = (animal) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (animal === '🐮') resolve(`🥩`);
            else reject(new Error(`error! ${animal} => 🥩`));
        }, 1000) 	                        // 도축 1초
    });

const getBurger = (meat) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (meat === '🥩') resolve(`🍔`);
            else reject(new Error(`error! ${meat} => 🍔`));
        }, 1000) 	                        // 햄버거 제조 1초
    });

    getCow()					            // 소를 데려온다.
    .then(result => getMeat(result))		// 데려온 result 를 고기로 만든다.
    .then(result => getBurger(result))		// 고기가 된 result로 버거를 만든다.
    .then(result => console.log(result))	// 결과를 출력한다.
	.catch(console.log)