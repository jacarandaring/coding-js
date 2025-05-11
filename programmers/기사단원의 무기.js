/**
 * [프로그래머스] 기사단원의 무기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/136798
 * 작성일: 2025-04-11
 */
function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++) {
        let divisorCount = 0;
        // 약수 구하기
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisorCount++;
                if (i !== n / i) divisorCount++;
            }
        }
        if (divisorCount > limit) divisorCount = power;
        answer += divisorCount;
    }
    return answer;
}