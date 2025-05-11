/**
 * [프로그래머스] 문자열 나누기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/140108
 * 작성일: 2025-04-11
 */
function solution(s) {
    var answer = 0;
    let rest = s;
    while (rest.length > 1) {
        let x = rest[0];
        let xCount = 1;
        let yCount = 0;
        for (let i = 1; i < rest.length; i++) {
            if (rest[i] === x) xCount++;
            else yCount++;
            
            if (xCount === yCount) {
                answer++;
                rest = rest.substring(xCount + yCount);
                break;
            }
        }
    }
    if (rest.length > 0) answer++;
    return answer;
}