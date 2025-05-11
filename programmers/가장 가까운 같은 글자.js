/**
 * [프로그래머스] 가장 가까운 같은 글자
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/142086
 * 작성일: 2025-03-30
 */
function solution(s) {
    const answer = Array.from({length: s.split('').length}).fill(-1);
    for (let i = 0; i < s.split('').length; i++) {
        for (let j = i-1; j > 0; j--) {
            const sliced = s.split('').slice(0, i);
            if (s[i] === sliced[j]) {
                answer[i] = i-j;
                break;
            }
        }
    }
    return answer;
}