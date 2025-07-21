/**
 * [프로그래머스] 수박수박수박수박수박수?
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12922
 * 작성일: 2025-07-21
 */
function solution(n) {
  // set value while initiate array
  const array = Array.from({length: n}, (value, index) => value = index % 2 ? '박' : '수');
  return array.join('');
}
