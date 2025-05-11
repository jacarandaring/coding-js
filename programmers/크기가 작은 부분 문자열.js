/**
 * [프로그래머스] 크기가 작은 부분 문자열
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/147355?language=javascript
 * 작성일: 2025-03-30
 */
function solution(t, p) {
    let answer = 0;
    const plength = p.length;
    for (let i = 0; i < t.split('').length - plength + 1; i++) {
        const target = t.substring(i, i + plength);
        if (Number(target) <= Number(p)) answer++;
    }
    return answer;
}