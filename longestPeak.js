/*Write a function that takes in an array of integers and returns the length of the longest peak in the array.

A peak is defined as adjacent integers in the array that are STRICTLY increasing until they reach a tip 
(the highest value in the peak), at which point they become STRICTLY decreasing, At least three integers are required to form a peak

For example, the integers 1,4,10,2 form a peak, but the integers 4,0,10 don't and neither do the integers 1,2,2,0.
Similarly, the integers 1,2,3 don't form a peak because there aren't any STRICTLY decreasing integers after the 3

Sample Input:
array=[1,2,3,3,4,0,10,6,5,-1,-3,2,3]
Sample Output: 6*/

function longestPeak(array) {
  let pico = 0;
  let i = 1;
  let marcapasos = 1;
  while (i <= array.length - 1) {
    if (array[i - 1] < array[i]) {
      marcapasos++;
      i++;
    }
    if (array[i - 1] >= array[i]) {
      marcapasos = 1;
      i++;
    }
    while (marcapasos >= 3 && i <= array.length - 1) {
      if (array[i - 1] === array[i]) {
        marcapasos = 1;
        break;
      }
      if (array[i - 1] < array[i]) {
        marcapasos++;
        i++;
      }
      if (array[i - 1] > array[i]) {
        marcapasos++;
        i++;
        if (marcapasos > pico) {
          pico = marcapasos;
          marcapasos = 1;
        }
      }
      if (marcapasos === 1) {
        break;
      }
    }
  }
  if (pico <= 3) {
    pico = 0;
  }
  console.log(pico);
}

longestPeak( [5, 4, 3, 2, 1, 2, 10, 12]);
