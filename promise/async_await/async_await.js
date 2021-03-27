async function f1() {
    return 1;
}
// is same as 
async function f2() {
    return Promise.resolve(1);
}


/*------------------------------------------------- */


class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        console.log(resolve);
        setTimeout(() => resolve(this.num * 2), 1000);
    }
};

async function f3() {
    let result = await new Thenable(1);
    console.log(result);
}




/*------------------------------------------------- */

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

// new Waiter()
// .wait()
// .then(console.log);

/*------------------------------------------------- */


async function f4() {
    await Promise.reject(new Error("에러 발생!"));
}
// is same as
async function f5() {
    throw new Error("에러 발생!");
}

/*------------------------------------------------- */

async function f6() {
    try {
        let response = await fetch("http://유효하지-않은-주소");
        let user = await response.json();
    } catch (err) {
        console.log(err);
    }
}

// f6().catch(console.log);


/*------------------------------------------------- */
function loadJson1(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
  }
// is same as
async function loadJson2(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    } else {
        throw new Error(url.status);
    }

}

// loadJson2('no-such-user.json')
//     .catch(alert); // Error: 404



/*------------------------------------------------- */

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f7() {
    wait().then(result => console.log(result));
}

wait();
// f7();
/*------------------------------------------------- */