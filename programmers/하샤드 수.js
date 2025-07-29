/**
 * [프로그래머스] 하샤드 수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
 * 작성일: 2025-07-25
 */
function solution(x) {
    let target = x; // sum 계산용
    let sum = 0;
    while (target >= 1) {
        sum += target % 10;
        target = Math.floor(target/10);
    }
    return !(x % sum);
}
