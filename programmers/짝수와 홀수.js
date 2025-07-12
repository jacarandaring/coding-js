/**
 * [프로그래머스] 짝수와 홀수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12937
 * 작성일: 2025-07-12
 */
function solution(num) {
    // false=0 임을 이용
    return num % 2 ? 'Odd' : 'Even';
}
/*
function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
*/
