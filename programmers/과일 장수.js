/**
 * [프로그래머스] 과일 장수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript
 * 작성일: 2025-03-26
 */
function solution(k, m, score) {
    let result = 0;
    score.sort((a, b) => b - a);
    
    for (let i = 0; i < score.length; i += m) {
        const target = score.slice(i, m+i);
        if (target.length !== m) break;
        
        const p = target[m-1];
        result += p * m;
    }
    return result;
}