//https://rithmschool.github.io/function-timer-demo/
//n보다 낮은 수를 다 더하시오.
function addUpTo(n) {
  //연산의 갯수 (5n + 2)개
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

function addUpTo2(n) {
  // 연산의 갯수 3개
  return (n * (n + 1)) / 2
}

//시간 재기
// let t1 = performance.now()
// addUpTo2(100000000000)
// let t2 = performance.now()

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function countUpAndDown(n) {
  //o(n) n의 갯수와 상관 없이 o(n)으로 표기
  console.log('Going up!')
  //o(n)
  for (let i = 1; i < n; i++) {
    console.log(i)
  }
  console.log('at the top! \n Going down....')
  //o(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log('Back down. bye')
}

function printAllPairs(n) {
  //o(n제곱)
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}

function sum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total
}

function double(arr) {
  //o(n)space
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr
}
