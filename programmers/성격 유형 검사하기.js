/**
 * [프로그래머스] 성격 유형 검사하기
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/118666
 * 작성일: 2025-03-27
 */
function solution(survey, choices) {
  let answer = '';
  const points = [3, 2, 1, 0, 1, 2, 3]; // point of choice
  const categories = ['RT', 'CF', 'JM', 'AN'];
  let pointMap = {};
  categories.forEach((category) => {
      category.split('').forEach((key) => {
          pointMap[key] = 0;
      });
  });
  // calculate point
  const standard = 4; // choice value of 0 point
  survey.forEach((select, index) => {
      if (choices[index] !== standard) { // exclude 0 point
          const i = choices[index] < standard ? 0 : 1;
          const key = select.split('')[i];
          pointMap[key] += points[choices[index]-1];
      }
  });
  // define type
  categories.forEach((category) => {
      const [type1, type2] = category.split('');
      let type = type1;
      if (pointMap[type1] < pointMap[type2]) type = type2;
      answer += type;
  });
  return answer;
}