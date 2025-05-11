/**
 * [프로그래머스] 대충 만든 자판
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/160586?language=javascript
 * 작성일: 2025-04-09
 */
function solution(keymap, targets) {
    const answer = [];
    const countsMap = {};
    keymap.forEach((key) => {
        key.split('').forEach((k, index) => {
            if (!countsMap[k] || countsMap[k] > index+1) countsMap[k] = index+1;
        });
    });
    targets.forEach((target) => {
        let count = 0;
        target.split('').forEach((t) => {
            if (countsMap[t]) count += countsMap[t];
        });
        if (count === 0) count = -1;
        answer.push(count);
    });
    return answer;
}