// 이 패턴은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것

// !!정렬!!된 오름차순 배열을 취하는 sumZero라는 함수를 작성합니다.
//이 함수는 합계가 0인 첫번째 쌍 즉, 한 숫자를 가져와 다른 숫자에 더하면 0이 되는 쌍을 찾습니다.
/*
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5])
*/

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])

//countUniqueValues라는 함수는 여러 숫자가 있는 배열에서 숫자의 종류가 몇개인지를 확인하는 함수입니다. 숫자는 항상 오름차순으로 정렬되어있습니다. ex) [1, 2, 2, 2, 4, 4] = 3  [1,1,1,2,2,2,3,3,3,4,4,4] = 4
/*
function countUniqueValues(arr) {
  let left1 = 0
  let left2 = 1
  let result = [arr[0]]
  while (left2 < arr.length) {
    if (arr[left1] === arr[left2]) {
      left2++
    } else if (arr[left1] !== arr[left2]) {
      result.push(arr[left2])
      left1 = left2
      left2++
    }
  }
  return result.length
}

console.log(countUniqueValues([1, 2, 7, 8, 8]))
*/
function countUniqueValues(arr) {
  if (arr.length === 0) return 0
  var i = 0
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])
