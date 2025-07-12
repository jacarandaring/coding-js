/**
 * [프로그래머스] 콜라츠 추측
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12943/solution_groups?language=javascript
 * 작성일: 2025-07-12
 */
function solution(num) {
    var answer = 0;
    while (num !== 1) {
        if (answer >= 500) return -1;

        num = num % 2 ? num * 3 + 1 : num / 2;
        answer += 1;
    }
    return answer;
}
