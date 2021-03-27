let promise = new Promise(function (resolve, reject) {
    //executor ()
    setTimeout (() => resolve("done"), 1000);
});