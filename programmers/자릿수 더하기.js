/**
 * [프로그래머스] 자릿수 더하기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12931
 * 작성일: 2025-05-08
 */
function solution(n) {
    var answer = 0;
    answer = String(n).split('').map(Number)
        .reduce((cur, acc) => acc += cur);
    return answer;
}