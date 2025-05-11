/**
 * [프로그래머스] 소수 찾기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12921
 * 작성일: 2025-04-21
 */
function solution(n) {
    let array = [];
    for (let i = 2; i <= n; i++) { // 2 ~ n 배열에 담아서
        array[i] = i;
    }
    
    for (let i = 2; i <= n; i++) {
        for (let j = i + i; j <= n; j += i) { // n까지의 i의 배수 모두 제거
            array[j] = 0;
        }
    }
    
    return array.filter((arr) => arr !== 0).length;
}