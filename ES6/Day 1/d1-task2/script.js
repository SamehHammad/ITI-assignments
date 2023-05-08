function findMinMax(...numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const result = [];
  
    for (let i = 0; i < numbers.length; i++) {
      result.push(numbers[i]);
    }
  
    result.push(min);
    result.push(max);
  
    const [resultMin, resultMax] = result.slice(-2);
  
    console.log(`Minimum value is ${resultMin}, Maximum value is ${resultMax}`);
  }
  
  findMinMax(4, 6, 8, 2, 3, 9);
  