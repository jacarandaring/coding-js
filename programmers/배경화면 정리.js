/**
 * [프로그래머스] 배경화면 정리
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/161990
 * 작성일: 2025-03-30
 */
function solution(wallpaper) {
    const xlist = [];
    const ylist = [];
    const row = wallpaper.length;
    const column = wallpaper[0].length;
    // get coordinate of files
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (wallpaper[i][j] === '#') {
                ylist.push(i);
                xlist.push(j);
            }
        }
    }
    // get min/max values
    xlist.sort((a, b) => a - b);
    ylist.sort((a, b) => a - b);
    return [ylist[0], xlist[0], ylist[ylist.length-1]+1, xlist[xlist.length-1]+1];
}