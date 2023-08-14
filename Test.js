function findMinMaxAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Input is not a non-empty array.');
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  const average = sum / arr.length;

  return {
    min: min,
    max: max,
    average: average,
  };
}

// Example usage:
const numbers = [12, 5, 9, 20, 3, 8];
const result = findMinMaxAverage(numbers);
console.log(result); // Output: { min: 3, max: 20, average: 9.5 }