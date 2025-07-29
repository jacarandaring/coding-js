/**
 * [프로그래머스] 두 정수 사이의 합
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12912
 * 작성일: 2025-07-29
 */
function solution(a, b) {
    let sum = 0
    const arr = [a, b].sort((a, b) => a - b); // sort to set position
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}
