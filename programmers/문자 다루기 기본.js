/**
 * [프로그래머스] 문자 다루기 기본
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12918#
 * 작성일: 2025-07-21
 */
function solution(s) {
    return (s.length === 4 || s.length === 6) && !isNaN(Number(s));
}
