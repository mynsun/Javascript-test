const DB = [];

function save2DB(user, callback) {
  DB.push(user);
  console.log(`${user.name}님 데이터베이스에 저장 완료되었습니다.`);
  return callback(user);
}

function sendEmail(user, callback) {
  console.log(`${user.email}으로 이메일이 전송 완료되었습니다.`);
  return callback(user);
}

function getResult(user) {
  return `${user.name}님 회원가입에 성공했습니다.`;
}

function register(user) {
  return save2DB(user, (user) => {
    return sendEmail(user, (user) => {
      return getResult(user);
    });
  });
}

const result = register({ name: "손흥민", email: "son@naver.com" });
console.log(result);
