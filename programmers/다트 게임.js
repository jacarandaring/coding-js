/**
 * [프로그래머스] 다트 게임
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/17682#
 * 작성일: 2025-05-25
 */
function solution(dartResult) {
    let chances = [];
    const chance = /[0-9]{1,2}[SDT]{1}[*#]{0,1}/g;
    const point = /[0-9]{1,2}/;
    const bonus = /[SDT]/;
    const option = /[*#]/;

    // 1. 기회 단위로 구분 *******************KEY POINT*******************
    dartResult.match(chance).forEach((result, index) => {
        // 2. 점수, 보너스, 옵션 단위로 구분
        let p = Number(result.match(point)[0]);
        const b = result.match(bonus)[0];
        let o = result.match(option);
        // 3. 점수 계산
        p = setBonus(p, b);
        if (o !== null) {
           p = setOption(p, o[0], index, chances);
        }
        chances[index] = p;
    });
    
    return chances.reduce((cur, acc) => acc += cur, 0);
}
function setBonus(p, b) {
    if (b === 'D') return p * p;
    else if (b === 'T') return p * p * p;
    return p;
}
function setOption(p, option, index, chances) {
    if (option === '*') {
        // 직전 기회의 점수 2배
        if (index > 0) chances[index-1] *= 2;
        p *= 2;
    } else if (option === '#') {
        p *= -1;
    }
    return p;
}
