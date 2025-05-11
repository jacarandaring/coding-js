/**
 * [프로그래머스] 자연수 뒤집어 배열로 만들기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12932
 * 작성일: 2025-04-23
 */
function solution(n) {
    const array = [];
    do {
        array.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0)
    return array;
}