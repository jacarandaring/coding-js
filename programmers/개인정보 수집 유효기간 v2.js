/**
 * [프로그래머스] 개인정보 수집 유효기간
 * url: https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript
 * 작성일: 2025-03-22
 */
function solution(today, terms, privacies) {
    const answer = [];
    const separatorList = ' ';
    let termMap = {};
    terms.forEach((term) => {
        const [code, months] = term.split(separatorList);
        termMap[code] = Number(months);
    });
    privacies.forEach((privacy, i) => {
        const [date, code] = privacy.split(separatorList);
        if (getTimestamp28(today) > getTimestamp28(date, termMap[code])) answer.push(i+1);
    });
    return answer;
}
/**
 * 28일 기준 Timestamp 계산 메소드
 * <- 모든 달은 28알까지 있음을 가정
 */
function getTimestamp28(date, codedMonth) {
    const separatorDate = '.';
    let [year, month, day] = date.split(separatorDate);
    [year, month, day] = [Number(year), Number(month), Number(day)];
    let result = year * 12 * 28 + month * 28 + day;
    if (codedMonth) result += codedMonth * 28 - 1;
    return result;
}