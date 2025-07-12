/**
 * [프로그래머스] 직사각형 별찍기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12969
 * 작성일: 2025-07-12
 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let result = '';
    const target = '*';
    const n = data.split(" ");
    const col = Number(n[0]), row = Number(n[1]);
    // repeat 함수 활용
    result += (target.repeat(col)+'\n').repeat(row);
    console.log(result);
});
/*
이중 반복문 풀이 방법

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let result = '';
    const target = '*';
    const n = data.split(" ");
    const y = Number(n[0]), x = Number(n[1]);
    
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            result += target;
        }
        result += '\n';
    }
    console.log(result);
});
*/
