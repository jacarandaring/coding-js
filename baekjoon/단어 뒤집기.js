/**
 * [백준] 단어 뒤집기
 * url: https://www.acmicpc.net/problem/9093
 * 작성일: 2025-03-22
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const [count, ...rest] = input;
  const result = Array.from({length: count}).fill('');
  rest.forEach((tc, index) => {
    for(let i = 0; i < tc.split(' ').length; i++) {
      const word = tc.split(' ')[i];
      if (i > 0) result[index] += ' '; // set blank by word
      
      const stack = word.split('');
      while(stack.length > 0) {
        const letter = stack.pop();
        result[index] += letter;
      }
    }
  });
  result.forEach((sentence) => {
      console.log(sentence);
  });
}
solution(input);