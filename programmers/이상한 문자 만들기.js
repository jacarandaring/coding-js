/**
 * [프로그래머스] 이상한 문자 만들기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12930
 * 작성일: 2025-04-25
 */
function solution(s) {
    let answer = '';
    s.split(' ').map((word, index) => {
        answer += word.split('').map((w, i) => i%2 === 0 ? w.toUpperCase() : w.toLowerCase()).join('');
        if (index !== s.split(' ').length - 1) answer += ' ';
    });
    return answer;
}