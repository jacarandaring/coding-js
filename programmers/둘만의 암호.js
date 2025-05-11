/**
 * [프로그래머스] 둘만의 암호
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/155652
 * 작성일: 2025-04-16
 */
function solution(s, skip, index) {
    const start = 'a'.charCodeAt(); // 97
    const end = 'z'.charCodeAt(); // 122
    const sp = skip.split('').map((sp) => sp.charCodeAt()).sort((a, b) => a - b);
    
    let ss = s.split('').map((ss) => {
        let result = ss.charCodeAt() + index;
        
        // index만큼 뒤의 알파벳으로 바꾸면서 skip 체크
        let skips = sp.filter((skip) => ss.charCodeAt() <= skip && skip <= result).length;
        if (result > end) {
            skips = sp.filter((skip) => (start <= skip && skip <= result - end + start - 1) || (ss.charCodeAt() <= skip && skip <= end)).length;
        }
        result += skips;
        result = result > end ? result - end + start - 1 : result;
        
        // 건너뛴 후 skip 체크
        console.log(result)
        const skipping = sp.findIndex((skip) => skip === result);
        console.log(skipping)
        if (skipping > -1) {
            for (let i = skipping; i < sp.length; i++) {
                if (sp[i] === result) {
                    result++;
                    result = result > end ? result - end + start - 1 : result;
                }
                else break;
            }
        }

        return result;
    });
    
    return ss.map((s) => String.fromCharCode(s)).join('');
}