/**
 * [프로그래머스] 2016년
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12901
 * 작성일: 2025-04-21
 */
function solution(a, b) {
    const days = 'SUN,MON,TUE,WED,THU,FRI,SAT'.split(',');
    const day = new Date(`2016-${a}-${b}`).getDay();
    return days[day];
}