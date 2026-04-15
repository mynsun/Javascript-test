const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("작업 성공!");
  } else {
    reject("작업 실패!");
  }
});

promise
  .then((result) => {
    console.log("성공 결과: ", result);
  })
  .catch((error) => {
    console.log("실패 결과: ", error);
  });

const p = new Promise((resolve) => {
  console.log("1. Promise 실행");
  resolve(10);
});
console.log("2. 코드 계속 실행");
p.then((num) => {
  console.log("3. then 실행:", num);
});

const p1 = new Promise((resolve) => {
  const result = 10;
  resolve(result);
});
const p2 = p1.then((num) => num + 1);
p2.then((num) => console.log(num));
p1.then((num) => num + 1).then((num) => console.log(num));

new Promise((resolve) => {
  resolve(10);
});
Promise.resolve(10);
function getData() {
  return Promise.resolve("데이터");
}
getData().then(console.log);

Promise.resolve(1)
  .then((n) => n + 1)
  .then(console.log);

Promise.reject("에러").catch(console.log);

function checkAge(age) {
  if (age < 18) {
    return Promise.reject("미성년자");
  }
  return Promise.resolve("통과");
}

checkAge(15).catch(console.log);
checkAge(19).then(console.log);

const DB = [];

function saveDB(user) {
  const oldDBLength = DB.length;
  DB.push(user);
  console.log(`${user.uname} 저장 완료되었습니다.`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBLength) {
      resolve(user);
    } else {
      reject(new Error("저장에 실패했습니다!"));
    }
  });
}

function sendEmail(user) {
  console.log(`${user.email}으로 이메일을 발송했습니다.`);
  return Promise.resolve(user);
}

function getResult(user) {
  return Promise.resolve(`${user.uname}님 등록 성공했습니다.`);
}

function registerByPromise(user) {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((error) => new Error(error));
  return result;
}

const myUser = { uname: "손흥민", emial: "son@naver.com" };
const result = registerByPromise(myUser);
result.then(console.log);

const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .catch(() => {
    console.log("요청에 실패했습니다.");
  })

  .then((data) => {
    if (!data) {
      throw new Error("데이터가 없습니다.");
    }
    if (!data.articleList || data.articleList.length === 0) {
      throw new Error("데이터가 없습니다.");
    }
    return data.articleList;
  })
  .catch((error) => {
    console.log("에러 발생: ", error.message);
  })

  .then((articles) => {
    return articles.map((article, idx) => {
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movie of results) {
      console.log(`[${movie.rank}위] ${movie.title}`);
    }
  })
  .catch((err) => {
    console.log("<<에러 발생>>");
    console.log(err);
  });

async function func1() {
  return "hello";
}

func1().then(console.log);

function func2() {
  return new Promise((resolve) => {
    resolve("hello");
  });
}

func2().then(console.log);

async function registerByAsync(user) {
  try {
    const savedUser = await saveDB(user);
    const emailedUser = await sendEmail(savedUser);
    const result = await getResult(emailedUser);
    return result;
  } catch (error) {
    return new Error(error);
  }
}

const myUser1 = { uname: "손흥민", email: "son@naver.com" };
registerByAsync(myUser).then(console.log);

async function fetchMovieData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("요청에 실패. 상태 코드: " + response.status);
  }
  const data = await response.json();
  return data;
}

function validateMovieData(data) {
  if (!data.articleList || data.articleList.length === 0) {
    throw new Error("데이터가 없습니다.");
  }
}

function extractMovieInfos(articleList) {
  return articleList.map((article, idx) => ({
    title: article.title,
    rank: idx + 1,
  }));
}

function displayMovies(movieInfos) {
  for (const movie of movieInfos) {
    console.log(`[${movie.rank}위] ${movie.title}`);
  }
}

async function movies() {
  try {
    const data = await fetchMovieData(url);
    validateMovieData(data);
    const movieInfos = extractMovieInfos(data.articleList);
    displayMovies(movieInfos);
  } catch (err) {
    console.error("에러 발생: ", err.message);
  }
}

movies();
