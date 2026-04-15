let day= 6;
let day1;

switch (day) {
    case 0:
        day1 = '일';
    break;
    case 1:
        day1 = '월';
    break;
    case 2:
        day1 = '화';
    break;
    case 3:
        day1 = '수';
    break;
    case 4:
        day1 = '목';
    break;
    case 5:
        day1 = '금';
    break;
    case 6:
        day1 = '토';
    break;
    default:
        day1 = '존재하지 않는 값';
}
console.log(`오늘은 ${day1}요일 입니다.`);

//다른 예시
// let day = 3;
// let result;
// switch (day) {
// case 1:
// result =
// '월요일'; break;
// case 2:
// result =
// '화요일'; break;
// case 3:
// result =
// '수요일'; break;
// case 4:
// result =
// '목요일'; break;
// case 5:
// result =
// '금요일'; break;
// case 6:
// result =
// '토요일'; break;
// case 0:
// result =
// '일요일'; break;
// default:
// result =
// '잘못된 값';
// }
// console.log(`${result}입니다`);