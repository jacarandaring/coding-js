/**
 * [프로그래머스] 핸드폰 번호 가리기
 * url:https://school.programmers.co.kr/learn/courses/30/lessons/12948
 * 작성일: 2025-07-12
 */
function solution(phone_number) {
    const count = phone_number.length-4;
    // replace 메소드에 변수 포함 정규표현식 사용하기 위한 생성자
    const regex = new RegExp(`^\\d{${count}}`, 'g');
    return phone_number.replace(regex, '*'.repeat(count));
}
