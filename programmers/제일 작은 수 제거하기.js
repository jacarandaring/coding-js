/**
 * [프로그래머스] 제일 작은 수 제거하기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12935
 * 작성일: 2025-04-25
 */
function solution(arr) {
    const answer = arr.filter((item) => item !== Math.min(...arr));
    return answer.length === 0 ? [-1] : answer;
}