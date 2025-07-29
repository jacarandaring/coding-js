/**
 * [프로그래머스] 하샤드 수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
 * 작성일: 2025-07-25
 */
function solution(x) {
    // 각 자리 수의 합
    const sum = String(x).split('').reduce((acc, cur) => acc += Number(cur), 0);
    return !(x % sum);
}
