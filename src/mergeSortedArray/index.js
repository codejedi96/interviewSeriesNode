const mergeSortedArray = (num1, m, num2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && num1[i] > num2[j]) {
      num1[k] = num1[i];
      k--;
      i--;
    } else {
      num1[k] = num2[j];
      k--;
      j--;
    }
  }
};

export default mergeSortedArray;
