/**
 * [프로그래머스] 개인정보 수집 유효기간
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript
 * 작성일: 2025-03-22
 */
function solution(today, terms, privacies) {
  const answer = [];
  const separatorList = ' ';
  const separatorDate = '.';
  const todayDate = new Date(today);
  
  /* 1. calculate valid date */
  let termMap = {};
  terms.forEach((term) => {
      const [code, months] = term.split(separatorList);
      termMap[code] = Number(months);
  });
  privacies.forEach((privacy, i) => {
      const [date, code] = privacy.split(separatorList);
      let [year, month, day] = date.split(separatorDate);
      [year, month, day] = [Number(year), Number(month), Number(day)];
      
      const smonth = month + termMap[code];
      if (smonth > 12) {
          month = Math.floor(smonth % 12);
          year += Math.floor(smonth / 12);
      } else {
          month = smonth;
      }
      
      day--;
      if (day <= 0) {
          month--;
          day = 28;
      }
      if (month <= 0) {
          year--;
          month = 12;
      }
      
      /* 2. validation */
      const validDate = new Date(`${year}${separatorDate}${month}${separatorDate}${day}`);
      if (todayDate > validDate) answer.push(i+1);
  });
  return answer;
}