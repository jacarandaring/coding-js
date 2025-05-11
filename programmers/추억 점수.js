/**
 * [프로그래머스] 추억 점수
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/176963?language=javascript
 * 작성일: 2025-03-31
 */
function solution(name, yearning, photo) {
    let answer = [];
    const valueMap = {};
    for (let i = 0; i < name.length; i++) {
        valueMap[name[i]] = yearning[i];
    }
    
    photo.forEach((p) => {
        let value = 0;
        p.forEach((person) => {
            if (valueMap[person]) {
                value += valueMap[person];
            }
        });
        answer.push(value);
    });
    return answer;
}