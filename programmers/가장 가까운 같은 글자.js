/**
 * [프로그래머스] 가장 가까운 같은 글자
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/142086
 * 작성일: 2025-03-30
 */
function solution(s) {
    const answer = [];
    for (let i = 0; i < s.split('').length; i++) {
        let indexs = s.split('').slice(0, i).map((t, idx) => {
            if (t === s[i]) return idx;
        }).filter((idx) => idx);
        const diff = indexs.length > 0 ? i - indexs[indexs.length - 1] : -1;
        answer.push(diff);
    }
    return answer;
}
