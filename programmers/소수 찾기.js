/**
 * [프로그래머스] 소수 찾기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * 작성일: 2025-04-21
 */
function solution(n) {
    var answer = 1;
    for (let i = 3; i <= n; i++) {
        if (i % 2 === 0) continue;

        let flag = true;
        for (let j = 3; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) answer++;
    }
    return answer;
}