/**
 * [프로그래머스] 폰켓몬
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript
 * 작성일: 2025-04-15
 */
function solution(nums) {
		// 가져갈 수 있는 폰켓몬 수
    const count = nums.length / 2;
    // 폰켓몬 종류 수
    const kinds = nums.filter((num, index) => nums.indexOf(num) === index);
    return Math.min(count, kinds.length);
}