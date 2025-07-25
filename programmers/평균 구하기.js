/**
 * [프로그래머스] 평균 구하기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12944
 * 작성일: 2025-07-25
 */
function solution(arr) {
    return arr.reduce((acc, cur) => acc += cur, 0) / arr.length;
}
