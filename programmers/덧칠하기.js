/**
 * [프로그래머스] 덧칠하기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript
 * 작성일: 2025-04-06
 */
function solution(n, m, section) {
    var answer = 0;
    let filtered = section;
    for (let i = 0; i < section.length; i++) {
        if (section[i] > n) break;

        const end = section[i] + m - 1 > n ? n : section[i] + m - 1;
        let j = i+1;
        while (section[j] <= end) {
            i++;
            j++;
        }
        
        answer++;
    }
    
    return answer;
}