function flat(list, newList = []) {
    list.forEach((el) => {
        if(Array.isArray(el)) newList.push(...flat(el));
        else newList.push(el);
    });
    return newList;
}


const list = [1,2,[3, [6, [7]]],4];
const list2 = [1,2,[3, [6, []]],4];
console.log(flat(list));