/**
 * [프로그래머스] 푸드 파이트 대회
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/134240
 * 작성일: 2025-04-09
 */
function solution(food) {
    var answer = '';
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(food[i]/2); // 파라미터 타입: 정수
    }
    answer = `${answer}0${answer.split('').reverse().join('')}`
    return answer;
}