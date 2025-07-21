/**
 * [프로그래머스] 문자열 내 p와 y의 개수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12916
 * 작성일: 2025-07-21
 */
function solution(s){
    let [pCount, yCount] = [0, 0];
    s.split('').forEach((word) => {
        // 대소문자 구분 없이 개수 설정
        if ('p' === word.toLowerCase()) pCount++;
        else if ('y' === word.toLowerCase()) yCount++;
    });
    return pCount === yCount;
}
