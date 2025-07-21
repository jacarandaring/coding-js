/**
 * [프로그래머스] 문자 다루기 기본
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12918#
 * 작성일: 2025-07-21
 */
function solution(s) {
    const regex = new RegExp(/^\d{4}$|^\d{6}$/);
    return regex.test(s);
}
