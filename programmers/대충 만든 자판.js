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
        for (let i = 0; i < target.split('').length; i++) {
            const t = target.split('')[i];
            if (countsMap[t]) count += countsMap[t];
            else {
                count = -1;
                break; // 한 글자라도 존재하지 않을 경우 작성 불가능
            }
        }
        answer.push(count);
    });
    return answer;
}