/**
 * [프로그래머스] 문자열 내림차순으로 배치하기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
 * 작성일: 2025-04-23
 */
function solution(s) {
    return s.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}