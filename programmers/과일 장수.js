/**
 * [프로그래머스] 과일 장수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript
 * 작성일: 2025-03-26
 */
function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  while (score.length >= m) {
      const target = score.splice(0, m);
      // const p = Math.min(...target);
      const p = target[m-1];
      console.log(p)
      result += p * m;
  }
  return result;
}