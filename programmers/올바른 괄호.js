/**
 * [프로그래머스] 올바른 괄호
 * url: http://school.programmers.co.kr/learn/courses/30/lessons/12909
 * 작성일: 2025-03-25
 */
function solution(s){
  let answer = false;
  const target = s.split('');
  const stack = [];
  
  for (let j = 0; j < target.length; j++) {
    if (stack.length > 0 && target[j] === ')' && stack[stack.length-1] === '(') {
      stack.pop();
    } else {
      stack.push(target[j]);
    }
  }
  if (stack.length === 0) answer = true;

  return answer;
}