/**
 * [프로그래머스] 둘만의 암호
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/155652
 * 작성일: 2025-04-18
 */
function solution(s, skip, index) {
    let answer = '';
    const start = 'a'.charCodeAt();
    const end = 'z'.charCodeAt();
    
    s.split('').forEach((ss) => {
        let code = ss.charCodeAt();
        for (let i = 0; i < index; i++) {
            code++;
            if (code > end) code = start;
            
            while (skip.includes(String.fromCharCode(code))) {
                code++;
                if (code > end) code = start;
            }
        }
        answer += String.fromCharCode(code);
    });
    return answer;
}