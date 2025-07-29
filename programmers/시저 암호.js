/**
 * [프로그래머스] 시저 암호
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12926
 * 작성일: 2025-07-29
 */
function solution(s, n) {
    const [upperStart, upperEnd, lowerStart, lowerEnd] = ['A'.charCodeAt(), 'Z'.charCodeAt(), 'a'.charCodeAt(), 'z'.charCodeAt()]; // 65, 90 | 97, 122
    
    let result = '';
    s.split('').forEach((t, i) => {
        const alphabet = t.charCodeAt();
        // 알파벳 ASCII코드에 해당하는 경우에만 계산 후 문자열로 재변환
        if (lowerStart <= alphabet && alphabet <= lowerEnd || upperStart <= alphabet && alphabet <= upperEnd) {
            let start = lowerStart <= alphabet && alphabet <= lowerEnd ? lowerStart : upperStart;
            let end = lowerStart <= alphabet && alphabet <= lowerEnd ? lowerEnd : upperEnd;
            let ascii = alphabet + n > end ? alphabet + n - end + start - 1 : alphabet + n;
            t = String.fromCharCode(ascii);
        }
        result += t;
    });
    return result;
}
