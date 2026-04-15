try {
  console.log(a);
} catch (error) {
  console.log("에러 발생!");
}

try {
  console.log("실행");
} catch (e) {
  console.log("에러");
} finally {
  console.log("무조건 실행");
}

try {
  throw new Error("문제 발생");
} catch (error) {
  console.log(error.message);
}
function checkAge(age) {
  if (age < 18) {
    throw new Error("미성년자");
  }
  return "통과";
}
try {
  checkAge(15);
} catch (error) {
  console.error(error);
}
