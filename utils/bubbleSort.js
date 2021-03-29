const bubbleSort = (numbers) => {
    for(let i = 0; i < numbers.length; i++) {
        let temp = 0;
        for(let j = 0; j < numbers.length; j++) {
            if(numbers[j] > numbers[j+1]) {
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
        console.log(`${i} 회전: ${numbers}`);
    }
    return numbers;
}
export default bubbleSort;