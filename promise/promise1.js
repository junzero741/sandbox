promise = new Promise((resolve, reject) => {
    resolve("duh");
})


promise
.then(result => console.log(result))
.catch(error => console.error(error));


    //let's make my own Promise.
    
class myPromise {
    constructor() {

    }

    then () {

    }
}