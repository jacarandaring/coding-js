/**
 * [프로그래머스] 같은 숫자는 싫어
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/12906
 * 작성일: 2025-07-21
 */
function solution(arr)
{
    return arr.filter((a, i) => a !== arr[i+1]);
}
