/**
 * [프로그래머스] 문자열 나누기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/140108
 * 작성일: 2025-04-11
 */
function solution(s) {
    var answer = 0;
    let x = s[0];
    let xCount = 0;
    let yCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (x === s[i]) xCount++;
        else yCount++;
        
        if (xCount === yCount) {
            x = s[i+1]; // 포인터를 옮기는 방식
            xCount = 0;
            yCount = 0;
            answer++;
        } else if (!s[i+2]) {
            answer++;
            break;
        }
    }
    return answer;
}