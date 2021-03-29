const text = '[1,2,3]';
const text2 = '["1 2 3", 23, true, null, 3.214, {"key":"value"}, "234ho"]';   

const tokenizer = (text) => {
    const arr = text.slice(1,-1).split(',').map(chunck => chunck.trim());
    return arr;
}
console.log(tokenizer(text2));
// console.log(tokenizer(text2));





// const par = JSON.parse(text2);
// console.log(par);