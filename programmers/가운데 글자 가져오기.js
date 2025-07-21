/**
 * [프로그래머스] 가운데 글자 가져오기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
 * 작성일: 2025-07-21
 */
function solution(s) {
    const size = s.length;
    if (size % 2) { // odd
        const index = Math.round(size/2);
        return s.slice(index-1, index);
    } else {
        const index = size/2;
        return s.slice(index-1, index+1);
    }
}
