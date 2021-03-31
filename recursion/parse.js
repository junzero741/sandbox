function parse(list, parentNode = { type: 'Directory', child: [] }) {
   
    while (list.length > 0) {
        const q = list.shift();
        if (q === 'dirstart') {
            parentNode.child.push(parse(list));
        }
        else if (q === 'dirend') {
            return parentNode;
        }
        else parentNode.child.push(q);
    }
    return parentNode;
}


const list = ['myfile', 'dirstart', '오늘숙제.doc', 'dirstart', '책리스트.txt', 'dirend', '요리법.hwp', 'dirend', 'fe멤버들.md'];
const list2 = ['myfile', 'dirstart', '오늘숙제.doc', '요리법.hwp', 'dirend', 'fe멤버들.md'];
console.log(JSON.stringify(parse(list), null, ' '));
