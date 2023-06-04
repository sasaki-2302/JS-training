let nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)


var str = "webcamp" //グローバルスコープ

function foo() {
  console.log(str)
  var y = "hello" //関数スコープ
}

foo()
console.log(y)