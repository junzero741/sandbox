const insertionSort = (numbers) => {
    for(let i = 1; i < numbers.length; i++) {
        let cur = numbers[i];
        let left = i - 1;

        while(left >=0 && numbers[left] > cur) {
            numbers[left+1] = numbers[left];
            left--;
        }

        numbers[left+1] = cur;
        console.log(`${i}회전: ${numbers}`);
    }

    return numbers;
}
export default insertionSort;