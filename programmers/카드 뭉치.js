/**
 * [프로그래머스] 카드 뭉치
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript
 * 작성일: 2025-04-21
 */
function solution(cards1, cards2, goal) {
    var answer = 'No';
    let [indexGoal, index1, index2] = [0, 0, 0];
    
    for (indexGoal; indexGoal < goal.length; indexGoal++) {
        if (goal[indexGoal] === cards1[index1]) {
            index1++;
        } else if (goal[indexGoal] === cards2[index2]) {
            index2++;
        } else {
            break;
        }
    }
    // cards1, cards2 둘다 goal과 동일하지 않은 경우 반복문 끛까지 진행 불가능
    if (indexGoal === goal.length) answer = 'Yes';

    return answer;
}
