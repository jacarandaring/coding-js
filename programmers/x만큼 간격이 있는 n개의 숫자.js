/**
 * [프로그래머스] x만큼 간격이 있는 n개의 숫자
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
 * 작성일: 2025-07-25
 */
function solution(x, n) {
    return Array.from({length: n}).fill(x).map((item, index) => item *= index + 1);
}
