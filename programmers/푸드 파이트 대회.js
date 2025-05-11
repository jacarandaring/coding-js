/**
 * [프로그래머스] 푸드 파이트 대회
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 작성일: 2025-04-09
 */
function solution(food) {
    var answer = '';
    let part = [];
    for (let i = 1; i < food.length; i++) {
        part.push(...Array.from({length: Math.floor(food[i] / 2)}).fill(i));
    }
    answer = part.join('') + '0' + part.reverse().join('');
    return answer;
}