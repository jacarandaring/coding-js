/**
 * [프로그래머스] 둘만의 암호
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/155652
 * 작성일: 2025-03-31
 */
function solution(s, skip, index) {
    var answer = '';
    const aCode = 'a'.charCodeAt();
    const zCode = 'z'.charCodeAt();
    const skipList = skip.split('').map((s) => s.charCodeAt());
    
    s.split('').forEach((ss) => {
        let target = ss.charCodeAt() + index;
        let [start, end] = [ss.charCodeAt(), target];
        const toSkip = skipList.filter((sl) => sl >= start && sl <= end);
        if (toSkip) {
            target += toSkip.length;
        }
        if (target > zCode) {
            target -= (zCode - aCode + 1); // return to a
        }
        answer += String.fromCharCode(target);
    });
    return answer;
}