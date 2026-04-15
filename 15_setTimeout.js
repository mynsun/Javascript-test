console.log("1번");
setTimeout(() => {
  console.log("2번");
}, 1000);
console.log("3번");

function sayHello(name) {
  console.log(`${name} Hello!`);
}

function asyncTest(name, callback) {
  console.log("타이머 시작");
  setTimeout(() => {
    callback(name);
  }, 3000);
}

function doOtherthing() {
  for (let i = 0; i < 300; i++) {
    console.log(`${i}번 째 처리`);
  }
}

asyncTest("뷔", sayHello);
doOtherthing();
