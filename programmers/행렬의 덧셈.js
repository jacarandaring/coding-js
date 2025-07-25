/**
 * [프로그래머스] 행렬의 덧셈
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12950
 * 작성일: 2025-07-25
 */
function solution(arr1, arr2) {
    return arr1.map((arr, i) => arr.map((item, j) => item += arr2[i][j]));
}
